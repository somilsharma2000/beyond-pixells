# BEYOND PIXELLS — MASTER QA / UI-UX ENGINE

Permanent operating procedure for every change to this site (or any Beyond Pixells web property).
Paste this to any AI/engineer before work. It defines HOW we work, not just what we check.

## THE RULE

INSPECT → REPORT → PRIORITIZE → MODIFY → TEST → RECHECK

Never blind-redesign. Never change 40 things at once. Preserve what works.
Every change must earn its place with a UX, visual, performance, accessibility,
security, or business benefit.

## WORKFLOW (mandatory order)

1. **RECON** — read the actual files/pages before touching anything. Understand
   routes, components, forms, APIs, animation system, what already works.
2. **AUDIT** — run the passes below against reality, not assumptions.
3. **PRIORITIZE** — rank findings: broken > trust/conversion > a11y > performance > polish.
4. **MODIFY** — smallest safe diff that fixes the finding. One concern per change.
5. **VERIFY** — triple verification: (a) static validation (tags/JS parse),
   (b) live HTML check post-deploy, (c) real-browser render + interaction test.
6. **REGRESSION** — re-test what the change touched and its neighbors.
   Compare before/after. If it breaks something, revert the change, not the site.

## THE 10 PASSES

P01 PRODUCT — purpose of each section, one primary CTA, obvious landing→action path, no dead ends.
P02 UI — typography scale, color tokens only, spacing rhythm, radius/shadow consistency, hierarchy.
P03 UX — every click does something expected and gives feedback; forms validate; no silent failures.
P04 MOTION — purposeful, consistent timing (hover 150-250ms, reveals 400-700ms), reduced-motion respected.
P05 RESPONSIVE — 320 → 1920px. Mobile is designed, not shrunken: sticky CTA, tap targets ≥44px, nav behavior intentional.
P06 ACCESSIBILITY — keyboard-only journey, visible focus rings, contrast, alt text, labels, semantic HTML.
P07 PERFORMANCE — image weight (WebP/optimize, lazy-load below fold), no unused JS, animate transform/opacity only.
P08 SECURITY — no secrets in client code, API auth, input validation server-side, no trust in UI hiding.
P09 QA — every state: default/hover/focus/press/loading/success/error/empty/disabled + double-click + slow network + back button.
P10 POLISH — alignment, 1-2px inconsistencies, awkward line breaks, competing emphasis, dead weight.

## BRAND SYSTEM CONSTRAINTS (non-negotiable)

- Dark navy #0A0E27-family backgrounds, electric blue #0066FF accents, Inter everywhere.
- Logo: top-left, never distorted, never over low-contrast backgrounds. Not on every surface.
- No random colors, fonts, icon sets, or corner radii. No generic-SaaS look.
- Claims must be true or labeled demo. No fake urgency, no vaporware.
- Motion communicates state/hierarchy/continuity — delete anything that only "looks cool".

## FINDINGS LOG

| Date | Finding | Pass | Fix | Verified |
|------|---------|------|-----|----------|
| 2026-10-01 | Favicon was 194KB logo.png fetched for every tab | P07 | favicon-32.png (1KB) + apple-touch-icon | live check |
| 2026-10-01 | Nav/footer logo 194KB rendered at 34px | P07 | logo-nav.png (4KB) | live check |
| 2026-10-01 | No custom 404 page | P01 | branded 404.html | live check |
| 2026-10-01 | No visible focus rings for links/buttons (keyboard users) | P06 | :focus-visible outline | live check |
| 2026-10-01 | Form showed "✓ Received" even if storage failed | P03/P09 | honest dual-state messaging | live check |

Known-good (verified this pass): no dead anchors, all legal pages exist, single H1,
OG tags + JSON-LD present, robots.txt + sitemap.xml live, form is double-click
protected with loading state + dual-API fallback chain, reduced-motion covered,
mobile has designed sticky CTA bar, nav hides links below 640px intentionally.
