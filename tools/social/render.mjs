#!/usr/bin/env node
// Beyond Pixells — brand-styled image renderer (Free Stack Phase 4: content machine)
// Renders satori templates to PNG. No server, no browser: satori (layout) +
// resvg (raster). This is the $0, render-on-demand reel/image foundation.
//
// Usage:
//   node tools/social/render.mjs ogHub '{"title":"Beyond Pixells","tagline":"We build operating systems for local businesses","url":"somilsharma2000.github.io"}' og-image.png 1200 630
//   node tools/social/render.mjs statCard '{"headline":"...","stat":"14","statLabel":"...","footnote":"..."}' post.png 1080 1350
//
// Rule: only real numbers in templates — never invent business metrics.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { TEMPLATES } from "./templates.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const [templateName, dataJson, outFile, widthArg, heightArg] = process.argv.slice(2);
  if (!templateName || !dataJson || !outFile) {
    console.error("usage: render.mjs <template> <json-data> <out.png> [width] [height]");
    process.exit(1);
  }
  const template = TEMPLATES[templateName];
  if (!template) {
    console.error(`unknown template '${templateName}'. available: ${Object.keys(TEMPLATES).join(", ")}`);
    process.exit(1);
  }
  // dataJson is inline JSON, or "@path/to/data.json" to read from a file
  const data = JSON.parse(dataJson.startsWith("@") ? readFileSync(dataJson.slice(1), "utf8") : dataJson);
  const defaults = { statCard: [1080, 1350], hookCard: [1080, 1350], ogHub: [1200, 630] };
  const width = Number(widthArg) || defaults[templateName]?.[0] || 1080;
  const height = Number(heightArg) || defaults[templateName]?.[1] || 1350;

  // static weights (satori cannot parse variable fvar fonts)
  const fontFile = (family, weight) =>
    ({ name: family, data: readFileSync(path.join(root, "fonts", `${family.replace(/ /g, "")}-${weight}.ttf`)), weight: String(weight), style: "normal" });
  const fonts = [400, 600, 700].flatMap((w) => [fontFile("Space Grotesk", w), fontFile("Plus Jakarta Sans", w), fontFile("Inter", w)]);

  const tree = template(data, fonts);
  const svg = await satori(tree, { width, height, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: width } }).render();
  writeFileSync(outFile, png.asPng());
  console.log(`rendered ${templateName} -> ${outFile} (${width}x${height})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
