# Beyond Pixells — Visual Design Language (v4.0 "CHROME VIOLET")

> Locked 26 September 2026 (founder-selected). Supersedes v2 dark-crimson and
> v3 Light & Energetic.
> **Working assets:** `assets/bp-design-system.css` + `assets/bp-motion.js` —
> 2 lines and any site inherits the whole system.

## Add to any site (2 lines)

```html
<link rel="stylesheet" href="https://somilsharma2000.github.io/beyond-pixells/assets/bp-design-system.css">
<script src="https://somilsharma2000.github.io/beyond-pixells/assets/bp-motion.js"></script>
```

## The language

Glossy dark premium: near-black canvas, deep violet-purple chrome surfaces,
orange-gold rim light on edges, glass blur nav, cinematic glow. The signature
object is the **chrome tile** — violet gradient body (8B5CF6 → 3B1470),
gold rim, top gloss highlight, soft violet glow underneath. Content, social
and email assets are generated around this tile motif.

## Tokens (exact)
- Canvas `#06060D` · surfaces `#10101E` `#13131F` `#191930` · footer `#040408`
- Text: primary `#F4F2FB` · secondary `#ABA6C7` · muted `#6E688F`
- Violet spectrum: `#8B5CF6 #7C3AED #6D28D9 #5B21B6 #A78BFA #C4B5FD`
- Gold accent: `#FF9500` `#FFA733` `#FFB86B` (CTAs, kickers, rim light)
- Borders: violet hairlines `rgba(167,139,250,.12–.2)` · emphasis rim `rgba(255,149,0,.35–.55)`
- Gloss law: top-down white fade `rgba(255,255,255,.08) → 0` at 45%
- Gradients: chrome `160deg #8B5CF6→#6D28D9→#3B1470` · gold `#FFA733→#F97300`
- Type: Space Grotesk (display, -0.03em) + Plus Jakarta Sans (body)
- Buttons: pill (100px radius), inner gloss, glow shadow
- Status: success `#34D399` · demo `#22D3EE/#67E8F9` · error `#FB7185`

## Motion (restrained)
- `bp-fadeUp` hero choreography + scroll reveals · shimmer on headline gradient (6s)
- Hover lift `-4px` with violet/gold glow · `.bp-magnetic-btn`, `.bp-spotlight-card` kept
- `prefers-reduced-motion` always respected

## Reference implementations
- Hub: `https://somilsharma2000.github.io/beyond-pixells/`
- Style guide: `https://somilsharma2000.github.io/beyond-pixells/style-lab.html`
- Product landings: gym-os, dentist-os-site, builder-os-site (all v4)

## Rollout status
- ✅ Hub + style lab + legal pages + handover + og-image
- ✅ Gym OS, Dentist OS, Builder OS landings
- ⏳ Client gym sites + smaller properties: intentionally on hold (founder
  directive 26 Sep 2026 — focus is Beyond Pixells only)

## v5 — OBSIDIAN VEINS (26 Sep 2026, founder-selected; supersedes Chrome Violet v4)

**Reference:** founder-supplied macro photo — cracked black matte surface, glowing violet
bioluminescent veins running through fissures, a glitter/crystal "geode" core, glossy black
water droplets. Single accent family: violet-on-black. **Zero warm tones anywhere** — all
gold/orange (#FF9500, #FFB86B, #F97300) purged sitewide, along with the old floating chrome
orbs and light-beam (retired, conflicted with the flat cracked-texture language).

**Tokens:** `--ov-ink:#07070A`, `--ov-violet-deep:#3B1470`, `--ov-violet:#7C3AED`,
`--ov-violet-bright:#A855F7`, `--ov-violet-glow:#C4B5FD`, `--ov-sparkle:#F5F3FF`.

**Mechanics (ported to vanilla CSS/JS/SVG, no image assets):**
- **Grain** — SVG `feTurbulence` noise, `mix-blend-mode:overlay`, always-on at low opacity.
- **Veins** — hand-authored branching SVG paths, dual-stroke (wide blurred glow + sharp core),
  `stroke-dashoffset` animation for an energy-flowing-through-cracks pulse.
- **Geode** (signature object, replaces the chrome tile) — `clip-path` irregular polygon +
  tsParticles violet dust confined inside via clip-path host, glow ring.
- **Droplets** — procedurally scattered glossy dark circles with specular highlight, decorative depth.

**Kit files:** `assets/bp-obsidian-veins.css` + `.js`. **Signature object:** `.ov-geode`
(was `.bp-chrome-tile`). ### Product Frames as Content (26 Sep 2026)
App-true UI screenshots rendered as marketing content. Tokens (extracted from the
live my-gym-os app): canvas #0A0E29, surface #141833, elevated #242842, border
#272C49, primary #0066FF, accent light #9CC0FF, success #21C45D, danger #DC2828,
amber #F59A0A, text #F1F5F9 / muted #94A3B8, in-app font Inter. Law: product
frames (`.pframe` on the hub OS family, `productFrame` social template) always
use the app's REAL palette and Inter — never the marketing palette — so every
frame doubles as honest product proof and social content. Marketing pages keep
Space Grotesk (display) + Plus Jakarta Sans (body).

### Daylight Glass (dashboard variant, 26 Sep 2026)
The in-app/dashboard aesthetic (used inside product mockups, future owner app UI):
glossy white-silver surfaces (linear-gradient #FBFCFE → #ECEEF4), soft depth
shadows instead of hard borders, black "spotlight" card reserved for the single
most important metric (money), green live-status, violet kept as the only brand
accent on light. Dark device hardware stays dark — a light screen glowing on the
obsidian canvas reads as "real product photo". Live on the Gym OS #showcase
laptop mockup (spotlight KPI = Collected today).

**Live on:** Hub hero + Gym OS landing (hero canvas + frontend showcase section with CSS
laptop/phone product mockups, warm tones fully purged). **Social template:** `assets/social-templates/obsidian-veins-post.html`
— same visual language as the site, so a screenshot of either reads as one consistent brand.

**Verification:** `npm run test:render` asserts geode/veins/droplets/grain/meteors/beam/icons
present + zero JS errors. Pixel check: hero violet-hue coverage 87%, zero warm-hue residue.

## v6 OBSIDIAN GLOW (26 Sep 2026, founder-selected direction #1)

Benchmark study (Linear, Raycast, Superlist, Vapi — measured) locked the law:
**calm near-black canvas, ONE saturated glow field, product UI carries the richness.**

- Canvas: `#08090D` with layered violet radial glow fields (primary `rgba(124,58,237,.26)` behind the headline; quiet secondary fields top-right + deep-violet left)
- NO texture imagery in the hero canvas; NO particle dust; grain overlay stays (0.05)
- The floating product dashboard (Daylight Glass) is the hero centerpiece — Linear-style product-first storytelling
- Glass panels: `rgba(255,255,255,.04)` surfaces, 1px `rgba(255,255,255,.08)` borders, backdrop blur
- Accent discipline: violet `#7C3AED`-family only for glow/edges; warm rim light reserved for the single primary CTA
- Motion: fade/slide entrances, gentle mock float, one beam border — restraint at rest
- Research record: docs/research/records/2026-09-26_design-language-benchmark.md

## v7 BLUE PIXEL (26 Sep 2026, founder logo drop — supersedes v4/v6 violet)

Founder supplied the real bp logo: lowercase "b" + "p" mark in royal blue
and navy, on a white badge, with a small blue/navy pixel-checker accent
(top right). Measured exact hex from the source PNG (foreground pixels,
background/badge excluded):
- **Royal blue `#1D4BC4`** — primary accent (was violet `#7C3AED`)
- **Navy `#0A1C40`** — deep/ink tone (was violet-deep `#3B1470`)

Violet (Chrome Violet v4, Obsidian Glow v6) is retired estate-wide. Method:
automated hue-shift script (colorsys) rotated every violet/purple/magenta
hex and rgba() (hue 232-305°) to the logo's measured hue (~222.5°),
preserving lightness/saturation/alpha — applied across
`assets/bp-design-system.css`, `assets/bp-obsidian-veins.css`,
`assets/bp-obsidian-veins.js`, `assets/bp-effects-kit.css`, and each
property's own `index.html`. Greys, blacks, whites, cyan status accents
and the emerald "live" dot were left untouched (out of the violet hue
range). `logo.png` at hub root replaced with the new mark
(`assets/img/bp-logo-mark.png` holds the source).

Because `bp-design-system.css` and `bp-obsidian-veins.css` are CDN-shared
from the hub, every property loading them inherits the new blue palette
automatically. Gym OS additionally had a local violet texture override
(`hero-veins-tall.jpg`) and inline violet hexes in its Daylight Glass
showcase — both fixed directly in that repo.

Canvas structure (v6 Obsidian Glow: calm near-black + one glow field +
product-UI-carries-richness) is unchanged — only the hue moved from
violet to blue. Verified live (measured pixel samples):
- Hub hero glow: RGB (15,29,69) — blue-dominant
- Gym OS hero glow: RGB (11,18,37) — blue-dominant
- Zero `#7C3AED`/`#A855F7`/`#C4B5FD` (old violet hexes) remaining in
  either live page's HTML/CSS/JS

Still needed (not yet reskinned this pass): Dentist OS, Builder OS
flagships (inherit CDN files automatically, but should be individually
verified); the 8 client gym sites (out of scope per earlier founder
directive to focus reskins on Beyond Pixells + OS flagships only).

## v7.1 GYM OS APP PARITY (26 Sep 2026)

The Gym OS landing showcase now recreates the real product app
(my-gym-os.base44.app) instead of a stylised mock: navy #0b1022 screen,
#111827 sidebar with the actual nav items (Dashboard active on #2563eb),
top bar with branch dropdown / search / 9+ badge / SS avatar, Dashboard
title + Overview/Staff Performance/Reports tabs, + Add Member (blue) /
Log Payment / Add Lead buttons, and the app's KPI set with Revenue as the
blue spotlight card. Landing tokens moved to the app palette: navy canvas
#0A0F1E, #111827 cards, slate strokes, #2563eb accent, #6b7280 muted.

Two-tier system confirmed: studio hub (beyond-pixells) = brand canvas
(bp logo blue #1D4BC4 on near-black obsidian); Gym OS landing = product
navy (#2563eb interactive accent), matching the app users actually get.

Ops note: fixed body scroll lock on Gym OS (bp-noise-canvas class on body +
overflow-x:hidden) found and fixed; smoke tests must assert scrollY.
