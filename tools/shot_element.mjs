import { chromium } from 'playwright';
const [url, selector, out] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1200 } })).newPage();
await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(4500);
const el = await p.$(selector);
if (!el) { console.log('SELECTOR NOT FOUND'); process.exit(1); }
await el.scrollIntoViewIfNeeded();
await p.waitForTimeout(1200);
await el.screenshot({ path: out });
console.log('captured', out);
await b.close();
