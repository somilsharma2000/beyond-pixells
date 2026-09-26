import { chromium } from 'playwright';
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
let pass = 0, total = 0;

// live hub: content layer applied, no JS errors, headline correct
const pg = await browser.newPage(); const errs = [];
pg.on('pageerror', e => errs.push(e.message));
await pg.goto('https://somilsharma2000.github.io/beyond-pixells/', {waitUntil:'networkidle'});
await pg.waitForTimeout(1500);
const h1 = await pg.evaluate(() => document.getElementById('bp-headline')?.textContent.trim());
total++; const ok1 = h1.includes('operating systems for') && h1.includes('local businesses') && errs.length===0;
if (ok1) pass++;
console.log(`[live-hub] h1=${JSON.stringify(h1)} errors=${errs.length} => ${ok1?'PASS':'FAIL'}`);

// live admin: boots from live site.json, guard works
const ad = await browser.newPage(); const aerrs = [];
ad.on('pageerror', e => aerrs.push(e.message));
await ad.goto('https://somilsharma2000.github.io/beyond-pixells/admin/', {waitUntil:'networkidle'});
await ad.click('text=Skip'); await ad.waitForTimeout(1800);
const field = await ad.evaluate(() => document.querySelector('[data-f="hero.headline"]')?.value);
const ver = await ad.evaluate(() => document.getElementById('stVer')?.textContent);
await ad.click('[data-v="theme"]');
await ad.evaluate(() => { const el = document.querySelector('[data-f="theme.accent"]'); el.value='#8B5CF6'; el.dispatchEvent(new Event('input',{bubbles:true})); });
await ad.click('text=Run design-law check'); await ad.waitForTimeout(300);
const guard = await ad.evaluate(() => document.getElementById('themeMsg')?.textContent);
const health = await ad.evaluate(() => document.querySelectorAll('#estateTable tbody tr').length);
total++; const ok2 = /operating systems/.test(field) && aerrs.length===0 && /off-law/.test(guard) && health===7;
if (ok2) pass++;
console.log(`[live-admin] hydrated=${!!field} ver=${ver} estateRows=${health} guard=${guard.slice(0,50)} errors=${aerrs.length} => ${ok2?'PASS':'FAIL'}`);
console.log(`\n${pass}/${total} live checks passed`);
await browser.close();
