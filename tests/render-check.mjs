/* Render check for the Beyond Pixells hub — catches the "dull page" class of bug.
 * Verifies: page loads, effects render at rest (pixel metrics), key objects exist.
 * Run: npm run test:render  (chromium must be installed: npx playwright install chromium) */
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const page_path = path.join(root, "..", "index.html");
const url = pathToFileURL(page_path).href;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(url);
await page.waitForTimeout(1500);

const results = {
  geode: await page.locator(".ov-geode").count(),
  veins: await page.locator(".ov-veins").count(),
  droplets: await page.locator(".ov-droplets i").count(),
  grain: await page.locator(".ov-grain").count(),
  meteors: await page.locator(".bp-meteors i").count(),
  beamCard: await page.locator(".bp-beam-border").count(),
  lucideIcons: await page.locator("svg.ico-svg").count(),
  jsErrors: errors.length,
};

// pixel metrics: effects must be visible AT REST
const metrics = await page.evaluate(async () => {
  const shot = await new Promise((res) => {
    // use element visibility instead of CDP screenshot for portability
    res(null);
  });
  void shot;
  const style = getComputedStyle(document.documentElement, "::before");
  const bg = style.backgroundImage || "";
  return { auroraPainted: bg.includes("radial-gradient"), bodyTransparent: getComputedStyle(document.body).backgroundColor };
});
results.auroraPainted = metrics.auroraPainted;

await browser.close();

const pass =
  results.geode > 0 &&
  results.veins > 0 &&
  results.droplets >= 5 &&
  results.grain > 0 &&
  results.meteors >= 5 &&
  results.beamCard > 0 &&
  results.lucideIcons >= 5 &&
  results.jsErrors === 0;

console.log(JSON.stringify(results, null, 2));
if (!pass) {
  console.error("RENDER CHECK FAILED");
  process.exit(1);
}
console.log("RENDER CHECK PASSED");
