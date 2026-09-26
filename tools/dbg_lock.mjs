import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1100 } })).newPage();
const errs=[]; p.on('pageerror', e=>errs.push(e.message));
await p.goto('https://somilsharma2000.github.io/gym-os/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(3500);
const r1 = await p.evaluate(() => { document.body.scrollTop = 500; return document.body.scrollTop; });
await p.waitForTimeout(500);
const r2 = await p.evaluate(() => document.body.scrollTop);
console.log('assign 500 ->', r1, '| after 500ms ->', r2);
console.log('docEl scrollTop:', await p.evaluate(() => document.documentElement.scrollTop));
console.log('JS errors:', errs.length ? errs : 'none');
// check for wheel/scroll listeners
const listeners = await p.evaluate(() => {
  let count = 0;
  try { count = getEventListeners ? 0 : 0; } catch(e) {}
  return { hasWheel: 'onwheel' in document.body, bodyOnScroll: !!document.body.onscroll };
});
console.log(listeners);
await b.close();
