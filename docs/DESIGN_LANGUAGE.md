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
(was `.bp-chrome-tile`). ### Daylight Glass (dashboard variant, 26 Sep 2026)
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
