import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1100 } })).newPage();
await p.goto('https://somilsharma2000.github.io/gym-os/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(3500);
const info = await p.evaluate(() => {
  document.documentElement.style.scrollBehavior='auto';
  window.scrollTo(0, 900);
  const out = {
    afterWindowScroll: window.scrollY,
    htmlOverflow: getComputedStyle(document.documentElement).overflow,
    bodyOverflow: getComputedStyle(document.body).overflow,
    bodyPos: getComputedStyle(document.body).position,
    docElScrollHeight: document.documentElement.scrollHeight,
    innerHeight: window.innerHeight,
    bodyScrollTopAfter: document.body.scrollTop
  };
  return out;
});
console.log(JSON.stringify(info, null, 2));
await b.close();
