/* Screenshot + pixel-audit helper: node tools/shot_page.mjs <url> <out-prefix>
   Renders with grain intact (what users see). Use PIL on the PNG for audits. */
import { chromium } from 'playwright';
const [url, prefix] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox'] });
const p = await (await b.newContext({ viewport: { width: 1400, height: 1000 } })).newPage();
const errs = [];
p.on('pageerror', e => errs.push(e.message));
await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(4000);
await p.screenshot({ path: `/tmp/${prefix}-top.png` });
console.log('JS errors:', errs.length ? errs : 'none');
await b.close();
