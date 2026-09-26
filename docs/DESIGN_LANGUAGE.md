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
