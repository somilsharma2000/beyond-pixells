import { chromium } from 'playwright';
const pages = [
  ["hub", "https://somilsharma2000.github.io/beyond-pixells/"],
  ["gym-os", "https://somilsharma2000.github.io/gym-os/"],
  ["dentist-os", "https://somilsharma2000.github.io/dentist-os-site/"],
  ["builder-os", "https://somilsharma2000.github.io/builder-os-site/"],
];
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
for (const [name, url] of pages) {
  const pg = await browser.newPage({viewport:{width:1440,height:900}});
  const errs = [];
  pg.on('pageerror', e => errs.push(String(e)));
  await pg.goto(url, {waitUntil:'networkidle', timeout:45000});
  await pg.waitForTimeout(800);
  const y = await pg.evaluate(() => { window.scrollTo(0, 1200); return new Promise(r => setTimeout(() => r(window.scrollY), 200)); });
  const y2 = await pg.evaluate(() => { window.scrollTo(0, 3000); return new Promise(r => setTimeout(() => r(window.scrollY), 200)); });
  const base44 = await pg.evaluate(() => document.body.innerText.toLowerCase().includes('base44'));
  await pg.screenshot({path:`/tmp/final-${name}.png`});
  console.log(`[${name}] scroll=${y}/${y2} base44Text=${base44} errors=${errs.length}`);
  await pg.close();
}
await browser.close();
