import { chromium } from 'playwright';
import { spawn } from 'child_process';
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
const repos = ["beyond-pixells","gym-os","dentist-os-site","builder-os-site"];
const ports = { "beyond-pixells":8123, "gym-os":8124, "dentist-os-site":8125, "builder-os-site":8126 };
const procs = {};
for (const r of repos) {
  procs[r] = spawn("python3",["-m","http.server",String(ports[r]),"--directory","/app/conversations/6ab7015079e56019d831d8c5/work/"+r], {detached:true, stdio:"ignore"});
  procs[r].unref();
}
await new Promise(r => setTimeout(r, 3000));
let pass = 0, total = 0;
for (const r of repos) {
  // inject a test override into that repo's site.json copy? site.json is the live one; test current values apply (no-override baseline). Instead: verify loader wired: ids present, no JS errors, and fetch works (content/site.json 200).
  const pg = await browser.newPage(); const errs = [];
  pg.on('pageerror', e => errs.push(e.message.slice(0,80)));
  await pg.goto(`http://localhost:${ports[r]}/`, {waitUntil:'networkidle'});
  await pg.waitForTimeout(1000);
  const ids = await pg.evaluate(() => ({
    h: !!document.getElementById('bp-headline'),
    sub: !!document.getElementById('bp-sub'),
    cta: !!document.getElementById('bp-cta'),
    mcta: !!(document.getElementById('bp-mcta') || document.getElementById('sticky-cta')),
    h1: document.querySelector('h1')?.textContent.trim().slice(0,40),
  }));
  const json = await pg.evaluate(async () => (await fetch('content/site.json')).ok);
  total++; const ok = ids.h && ids.sub && ids.cta && ids.mcta && json && errs.length===0;
  if (ok) pass++;
  console.log(`[${r}] ids(head=${ids.h} sub=${ids.sub} cta=${ids.cta} bar=${ids.mcta}) site.json=${json} h1="${ids.h1}" errors=${errs.length} => ${ok?'PASS':'FAIL'}`);
  await pg.close();
}
// admin property switch test (uses live site.json for OS repos, which aren't pushed yet — test hub switch only + selector presence)
const ad = await browser.newPage(); const aerrs = [];
ad.on('pageerror', e => aerrs.push(e.message.slice(0,80)));
await ad.goto('http://localhost:8123/admin/', {waitUntil:'networkidle'});
await ad.click('text=Skip'); await ad.waitForTimeout(1200);
const sel = await ad.evaluate(() => document.getElementById('propSel')?.options.length);
const hlField = await ad.evaluate(() => !!document.querySelector('[data-f="hero.hl"]'));
await ad.selectOption('#propSel', 'gym-os'); await ad.waitForTimeout(1500);
const gymField = await ad.evaluate(() => document.querySelector('[data-f="hero.headline"]')?.value);
total++; const okA = sel===4 && hlField && /Stop chasing fees/.test(gymField||'') && aerrs.length===0;
if (okA) pass++;
console.log(`[admin] props=${sel} hlField=${hlField} gymSwitch="${(gymField||'').slice(0,25)}" errors=${aerrs.length} => ${okA?'PASS':'FAIL'}`);
console.log(`\n${pass}/${total} checks passed`);
await browser.close();
process.exit(0);
