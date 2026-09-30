// Compare LIVE estate against committed baselines (the AFTER check).
//   node tools/visual-regression/compare.mjs   → exit 1 on regression
import { chromium } from 'playwright';
import { SITES, VIEWPORTS } from './sites.mjs';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
mkdirSync('tools/visual-regression/diffs', { recursive: true });
const THRESHOLD = 0.01;       // per-pixel sensitivity
const MAX_DIFF_RATIO = 0.005; // >0.5% pixels changed = regression
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage'] });
let fails = 0, missing = 0;
for (const [name, url] of SITES) {
  for (const [vp, opts] of VIEWPORTS) {
    const base = `tools/visual-regression/baselines/${name}-${vp}.png`;
    if (!existsSync(base)) { console.log(`SKIP ${name}-${vp}: no baseline`); missing++; continue; }
    const pg = await b.newPage({ viewport: { width: opts.width, height: opts.height },
      ...(opts.isMobile ? { isMobile: true, hasTouch: true } : {}) });
    await pg.goto(url, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.waitForTimeout(400);
    const shot = await pg.screenshot({ fullPage: true });
    await pg.close();
    const a = PNG.sync.read(readFileSync(base));
    const img = PNG.sync.read(shot);
    if (img.width !== a.width || img.height !== a.height) {
      console.log(`FAIL ${name}-${vp}: size changed (${a.width}x${a.height} → ${img.width}x${img.height})`);
      fails++; continue;
    }
    const diff = new PNG({ width: a.width, height: a.height });
    const changed = pixelmatch(a.data, img.data, diff.data, a.width, a.height, { threshold: THRESHOLD });
    const ratio = changed / (a.width * a.height);
    if (ratio > MAX_DIFF_RATIO) {
      writeFileSync(`tools/visual-regression/diffs/${name}-${vp}.png`, PNG.sync.write(diff));
      console.log(`FAIL ${name}-${vp}: ${(ratio * 100).toFixed(2)}% pixels changed (${changed})`);
      fails++;
    } else {
      console.log(`PASS ${name}-${vp}: ${(ratio * 100).toFixed(3)}% changed`);
    }
  }
}
await b.close();
console.log(fails === 0 ? `VISUAL REGRESSION: ALL PASS${missing ? ` (${missing} skipped, no baseline)` : ''}` : `VISUAL REGRESSION: ${fails} FAILURES`);
process.exit(fails === 0 ? 0 : 1);
