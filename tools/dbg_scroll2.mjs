import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1100 } })).newPage();
await p.goto('https://somilsharma2000.github.io/gym-os/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(3500);
const info = await p.evaluate(() => {
  const out = {};
  out.scrollingElement = document.scrollingElement ? document.scrollingElement.tagName : null;
  out.htmlOverflow = getComputedStyle(document.documentElement).overflow;
  out.bodyOverflow = getComputedStyle(document.body).overflow;
  out.htmlHeight = document.documentElement.style.height;
  out.bodyHeight = document.body.style.height;
  const scrollables = [];
  document.querySelectorAll('*').forEach(el => {
    const s = getComputedStyle(el);
    if ((s.overflowY === 'auto' || s.overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 50) {
      scrollables.push({ tag: el.tagName, cls: el.className && el.className.toString().slice(0,40), sh: el.scrollHeight, ch: el.clientHeight });
    }
  });
  out.scrollables = scrollables.slice(0, 8);
  out.windowScrollable = document.documentElement.scrollHeight > window.innerHeight;
  return out;
});
console.log(JSON.stringify(info, null, 2));
await b.close();
