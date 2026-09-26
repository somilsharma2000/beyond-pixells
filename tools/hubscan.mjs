import { chromium } from 'playwright';
const browser = await chromium.launch({args:['--disable-gpu','--disable-dev-shm-usage']});
const pg = await browser.newPage({viewport:{width:1440,height:900}});
await pg.goto('https://somilsharma2000.github.io/beyond-pixells/', {waitUntil:'networkidle'});
await pg.waitForTimeout(1500);
const H = await pg.evaluate(() => document.documentElement.scrollHeight);
console.log('docHeight', H);
// walk the page, find white sections
for (let y = 0; y <= Math.min(H-900, 6000); y += 300) {
  await pg.evaluate(v => window.scrollTo(0, v), y);
  await pg.waitForTimeout(250);
  const w = await pg.evaluate(() => {
    const els = [...document.elementsFromPoint(720, 100), ...document.elementsFromPoint(200, 200)];
    const top = els.find(e => e.getBoundingClientRect().height > 50);
    const bg = top ? getComputedStyle(top).backgroundColor : '?';
    const id = top ? (top.id || top.className || top.tagName).toString().slice(0,60) : '?';
    return { bg, id, y: window.scrollY };
  });
  console.log(`scroll=${w.y} top-el=${w.id} bg=${w.bg}`);
}
await browser.close();
