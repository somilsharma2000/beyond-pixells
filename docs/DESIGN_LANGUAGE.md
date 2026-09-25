# Beyond Pixells — Visual Design Language (v1.0)

> The complete spec lives in `research/design_language.md` (tokens, keyframes,
> component states, a11y). This is the operating summary.
> **Working assets:** `assets/bp-design-system.css` + `assets/bp-motion.js` —
> 2 lines and any site inherits the whole system.

## Add to any site (2 lines)

```html
<link rel="stylesheet" href="https://somilsharma2000.github.io/beyond-pixells/assets/bp-design-system.css">
<script src="https://somilsharma2000.github.io/beyond-pixells/assets/bp-motion.js"></script>
```

Motion philosophy: **purposeful, weightless, precise** — motion guides intent,
never decorates.

## Tokens (exact)
- Canvas `#08090C` · surfaces `#12141A` `#1A1D26` `#222632` · borders `rgba(255,255,255,.07)`/`#2A2F3D`
- Signature gradient `#FF3B30 → #FF7A00` (135deg) · status cyan `#00F2FE` · success `#00E676`
- Type: Space Grotesk (display, -0.03em) + Plus Jakarta Sans (body)
- Easing: out-expo `cubic-bezier(.16,1,.3,1)`, spring `cubic-bezier(.34,1.56,.64,1)`
- Radius: 8/12/16/24px · Shadows: ambient glow `0 0 30px rgba(255,59,48,.12)`

## Motion library (named)
| Name | Use | Duration |
|---|---|---|
| `bp-fadeUp` | scroll reveals (auto-applied by bp-motion.js to standard cards) | 600ms out-expo |
| `bp-scaleIn` | modals, metric pops | 350ms spring |
| `bp-glowPulse` | primary CTA ambient glow (`.bp-glow`) | 2.6s loop |
| `bp-gradientShift` | gradient text/borders (`.bp-grad-text`) | 6s |
| `bp-numSlide` + countUp | numeric stats animate on view | 1.1s |
| `bp-marquee` | tickers (`.bp-marquee`) | 28s linear |
| `.bp-lift` | card hover: -4px + glow | 300ms |

## Per-product flavors (same DNA, different energy)
- **Gym OS**: full kinetic energy — crimson/amber, live telemetry mockups, fire emoji accents
- **Dentist OS**: calm trust — deeper spacing, cyan/green clinical accents, soft glows
- **Builder OS**: architectural precision — tighter grid, amber accents, blueprint motifs

## Hard rules
- One accent family per page. No rainbow. No light-theme default.
- `prefers-reduced-motion` fully honored (all animation → 0.01ms).
- Focus visible: 2px cyan outline. Contrast: body text ≥ 4.5:1 on canvas.
- Never animate anything that costs scroll performance (only transform/opacity).
