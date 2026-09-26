Topic: Estate perfection pass + BP Command Center (site admin with full control)
Date: 2026-09-26
Research owner: lead agent (beyond)
Founder directive: leave client sites; make OUR website perfect — find
mistakes, correct, analyse, research, more features, more control; plus
an admin with full control over all possible things.
Method:
- Deep audit (live Playwright, 6 pages): titles, meta lengths, h1 counts,
  duplicate ids, image alts, canonicals, viewports, lang, JS errors,
  failed requests, phone consistency.
- Source audit (4 repos): retired-palette strings/hexes, console.log
  leftovers, TODOs, favicon, off-palette hexes.
- Research: control patterns for static $0 estates -> content data layer
  (JSON) + runtime application + GitHub Contents API deploys from the
  browser (token stays client-side, scoped contents:read/write on one
  repo). This gives real admin control with zero servers, zero cost, and
  no secrets in the repo.
Findings + fixes:
1. style-lab.html still declared retired Chrome Violet v4 as the official
   design language — REBUILT as v7.2 ONE DESIGN reference (noindex).
2. Legal pages link color was violet #A78BFA -> accent #338CFF.
3. handover.html still v4-styled -> v7.2 tokens.
4. Hub title 64 chars, all 5 blog titles 61-82 chars -> all <=60 (SEO).
Built — BP Command Center (beyond-pixells/admin/, noindex):
- Overview: 7 estate properties with live pings, version, dirty banner.
- Content: hero pill/headline/sub, CTA label, WhatsApp number+prefill,
  email, phone, footer blurb — bound to content/site.json fields.
- Theme: token editor with live preview + design-law guard (refuses
  non-blue accents 200-250deg, non-green success 95-160deg). Guard bug
  found in testing: JS chained comparison always true — fixed.
- Features: mobile CTA on/off + label/sub, blog nav link, hero pill.
- Health: liveness pings from browser + link to Upptime status page.
- Deploy: commit site.json via GitHub Contents API (fine-grained PAT in
  localStorage only, never in repo), or copy-paste git command fallback.
- Content layer: content/site.json is the single source of truth; hub
  index.html applies it at runtime with matching HTML defaults for SEO
  and no-JS. Local + live tests: headline override reflected, toggles
  work, guard rejects violet, 0 JS errors.
Verification: local suite PASS (hub content-layer, admin 6 tabs,
guard, hydration); live suite PASS (hub renders correct headline from
live site.json, admin boots from live JSON, estate rows fill, guard
fires, 0 errors). admin/ + content/site.json return 200 live.
Machine rules learned: (a) chained comparisons in JS are always true —
audit guards with boundary tests; (b) absolute-URL fetches in admin
need a relative fallback so local testing works before first deploy.
Security/privacy: no secrets in repo; PAT is user-scoped, browser-local,
contents-only on one repo; admin noindex,nofollow; gate is PIN
convenience only and labelled honestly (client-side, no real secrets).
Honesty: admin copy warns never to publish invented metrics.
