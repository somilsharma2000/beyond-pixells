import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1000 } })).newPage();
await p.goto('https://somilsharma2000.github.io/beyond-pixells/', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(3000);
await p.evaluate(() => window.scrollTo({ top: 800, behavior: 'instant' }));
await p.waitForTimeout(600);
console.log('LIVE hub window.scrollY after scrollTo(800):', await p.evaluate(() => window.scrollY));
await b.close();
