# Research Record — Frontend Visual Effects Libraries & Techniques
**Date:** 2026-09-26 · **Status:** RESEARCHED (Pass A) · **Blueprint §:** 103 record format
**Trigger:** Founder directive: install visual/UI/UX/frontend repos & skills, crack the reference-image mechanism, rebuild the hub.

## Findings
- **Magic UI** (magicui.design, 22k+ stars): 150+ open-source animated components (React/Tailwind/Motion) used by YC-backed startups for landing pages — shimmer, meteors, border beams, aurora backgrounds, sparkles, glowing borders.
- **Aceternity UI / shadcn / HyperUI**: same effect family; all copy-paste component patterns, not runtime dependencies.
- **GSAP / Lenis**: scroll-driven animation & smooth scrolling (heavier; not needed for single-page static estate sites yet).
- **Glossy 3D "chrome object" mechanism** (cracked from founder reference photos): (1) violet body gradient #8B5CF6→#6D28D9→#3B1470 with light from top-left, (2) gold rim light #FF9500 on lower-right edge via inset shadow, (3) specular white bloom blurred near top, (4) diagonal gloss sweep animation, (5) violet scatter glow + soft contact shadow beneath. Glass = backdrop-blur + low-opacity fill + top inner white line.
- **Key lesson (26 Sep incident):** hover-gated effects read as a dull near-black page at rest (~80% near-black pixels). Effects MUST be visible at rest; hover only intensifies.

## Decision
Our estate is static HTML (GitHub Pages) — React component libraries cannot be installed as-is. **Port the effect patterns to vanilla CSS/JS** and vendor them as a first-party kit: `assets/bp-effects-kit.css` + `assets/bp-effects-kit.js` (border beam, meteors, spotlight, 3D tilt, chrome tile) + agent skill `.agents/skills/visual-effects-kit` for reuse across sites.

## Verification
- Local headless render: chrome tile gloss + gold rim confirmed in pixels; 7 meteors spawn; beam card renders.
- Metrics after fix: hero vivid% 86, avg brightness 0.25 (was 0.10), near-black share ~30% (was ~80%).
- Live URLs return 200. **Pass B recheck pending.**
