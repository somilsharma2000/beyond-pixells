// Capture baseline screenshots (the BEFORE state). Run after a verified-good deploy:
//   node tools/visual-regression/capture.mjs
import { chromium } from 'playwright';
import { SITES, VIEWPORTS } from './sites.mjs';
import { mkdirSync } from 'fs';
mkdirSync('tools/visual-regression/baselines', { recursive: true });
const b = await chromium.launch({ args: ['--disable-gpu', '--disable-dev-shm-usage'] });
for (const [name, url] of SITES) {
  for (const [vp, opts] of VIEWPORTS) {
    const pg = await b.newPage({ viewport: { width: opts.width, height: opts.height },
      ...(opts.isMobile ? { isMobile: true, hasTouch: true } : {}) });
    await pg.goto(url, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.waitForTimeout(400);
    await pg.screenshot({ path: `tools/visual-regression/baselines/${name}-${vp}.png`, fullPage: true });
    await pg.close();
    console.log(`baseline: ${name}-${vp}`);
  }
}
await b.close();
console.log('BASELINES CAPTURED');
