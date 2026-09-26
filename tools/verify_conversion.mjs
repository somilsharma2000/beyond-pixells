import { chromium } from 'playwright';
const pages = [
  ["hub", "https://somilsharma2000.github.io/beyond-pixells/", "Blog"],
  ["blog-index", "https://somilsharma2000.github.io/beyond-pixells/blog/", "Latest posts"],
  ["blog-gym", "https://somilsharma2000.github.io/beyond-pixells/blog/gym-os-for-indian-gyms.html", "operating system"],
  ["gym-os", "https://somilsharma2000.github.io/gym-os/", "OS Family"],
  ["dentist-os", "https://somilsharma2000.github.io/dentist-os-site/", "OS Family"],
  ["builder-os", "https://somilsharma2000.github.io/builder-os-site/", "Beyond Pixells"],
];
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
let pass = 0;
for (const [name, url, needle] of pages) {
  const pg = await browser.newPage({viewport:{width:390,height:844}});
  const errs = [];
  pg.on('pageerror', e => errs.push(String(e).slice(0,80)));
  await pg.goto(url, {waitUntil:'networkidle', timeout:45000});
  await pg.waitForTimeout(900);
  const r = await pg.evaluate((needle) => {
    const txt = document.body.innerText;
    const mcta = document.querySelector('.bp-mobile-cta');
    const mctaVisible = mcta ? getComputedStyle(mcta).display !== 'none' : false;
    const mctaBtn = mcta ? mcta.querySelector('a.bp-mct-btn') : null;
    const schemas = document.querySelectorAll('script[type="application/ld+json"]').length;
    const links = [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href'));
    return { has: txt.includes(needle), mctaVisible, wa: mctaBtn ? mctaBtn.href : null, schemas, links };
  }, needle);
  const broken = [];
  for (const l of new Set(r.links)) {
    if (l.startsWith('#') || l.startsWith('data:')) continue;
    const abs = new URL(l, url).href;
    if (!abs.startsWith('http')) continue;
    if (abs.includes('wa.me')) { if (!abs.includes('wa.me/917737077479')) broken.push(l); continue; }
    try { const res = await pg.request.head(abs); if (res.status() >= 400) broken.push(`${l} -> ${res.status()}`); }
    catch(e) { broken.push(`${l} -> ERR`); }
  }
  const ok = r.has && r.mctaVisible && errs.length===0 && broken.length===0;
  if (ok) pass++;
  console.log(`[${name}] content=${r.has} mobileCTA=${r.mctaVisible} wa=${r.wa? 'ok':'MISSING'} schemas=${r.schemas} errors=${errs.length} broken=${broken.length} ${broken.length? broken.slice(0,3).join(' | '):''} => ${ok?'PASS':'CHECK'}`);
  await pg.close();
}
console.log(`\n${pass}/${pages.length} mobile checks passed`);
await browser.close();
