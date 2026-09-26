import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message.slice(0,80)));
await p.goto('http://127.0.0.1:8767/somilsharma2000_gym-os/index.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
await p.waitForTimeout(3000);
const d = await p.evaluate(() => {
  const f = document.querySelector('#gym-lead-form');
  const r = f.getBoundingClientRect();
  const band = document.querySelector('#demo').getBoundingClientRect();
  return { formVisible: f && f.offsetHeight > 50, formW: Math.round(r.width), formBelowFold: r.bottom > window.innerHeight,
    overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth };
});
console.log(JSON.stringify(d));
console.log('JS errors:', errs.length ? errs : 'none');
await b.close();
