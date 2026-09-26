import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message.slice(0,50)));
await p.goto('http://127.0.0.1:8767/somilsharma2000_gym-os/index.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
await p.waitForTimeout(2500);
const d = await p.evaluate(() => ({
  meteors: document.querySelectorAll('.bp-meteors i').length,
  kitLoaded: !!document.querySelector('link[href*="bp-effects-kit"]'),
  heroPos: getComputedStyle(document.querySelector('[data-bp-meteors]')).position
}));
console.log('GYM METEORS:', JSON.stringify(d), '| JS errors:', errs.length);
await b.close();
