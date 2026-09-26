import { chromium } from 'playwright';
const [url, yStr, out] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1100 } })).newPage();
await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(4000);
const target = parseInt(yStr);
let scrolled = 0;
while (scrolled < target) { await p.mouse.wheel(0, Math.min(500, target - scrolled)); scrolled += 500; await p.waitForTimeout(250); }
await p.waitForTimeout(1500);
console.log('body.scrollTop =', await p.evaluate(() => document.body.scrollTop), '| window.scrollY =', await p.evaluate(() => window.scrollY));
await p.screenshot({ path: out });
console.log('->', out);
await b.close();
