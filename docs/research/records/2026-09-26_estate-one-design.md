Topic: Estate-wide interaction + design unification (v7.2)
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: brand + frontend (blueprint §63, §25, §103)
Question: which effects should exist, and how do all pages share ONE design?
Method: audited all 4 flagships (hover effects, palettes, asset wiring),
traced the cursor glow to .bp-spotlight-card radial pseudo-elements
wired by bp-motion.js initSpotlightCards; surveyed remaining legacy
designs (Dentist OS violet/crimson/amber; Builder OS gold/violet/grid).
Decision (founder): remove cursor-follow glow entirely; keep effects
but smooth/normal/user-friendly; ONE design across all pages.
Implementation: spotlight removed from shared kit (css+js+effects kit),
tilt 8->3deg, hover shadows softened; Dentist OS + Builder OS converted
to the unified navy/#0066FF system and wired to the shared assets;
gym-os + hub aligned to app-true tokens. Base44 Gym OS delinked from all
public pages per founder edit. Smoke tests now assert scrollY + absence
of spotlight glow (regression guards for both the 26 Sep scroll-lock
incident and the glow).
Verification: live on all 4 pages — canvas rgb(10,14,41), 0 JS errors,
scroll works, no warm residue, no base44 text, glow absent.
Lesson (MACHINE): one kit change (shared assets) propagates estate-wide;
keep per-page inline token blocks in sync with the kit.
Security: none. Privacy: none. Legal: none.
