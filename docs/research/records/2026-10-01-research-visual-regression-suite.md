# §103 Research record — Automated visual regression suite (Pass 25_REGRESSION)

**Date:** 2026-10-01 · **Status:** IMPLEMENTED + live-verified · **Layer:** 3 (Visual Regression), Pass 25_REGRESSION

## Problem
The 40-layer audit law mandates visual BEFORE/AFTER comparison (desktop + tablet + 390px)
after any UI or code pass. No automated mechanism existed — every check was manual
screenshot review, which scales to zero and is skipped under time pressure.

## Research notes (alternatives considered)
- **Playwright + pixelmatch** — chosen: both already in the repo toolchain, $0, deterministic
  full-page captures, per-pixel thresholding.
- Percy / Chromatic — SaaS visual regression: monthly cost + external data flow, overkill
  for a 24-page static estate. Rejected (cost layer 34).
- BackstopJS — heavier config surface; same core mechanism we built in 150 lines. Rejected.

## Implementation (beyond-pixells repo)
- `tools/visual-regression/sites.mjs` — 8 estate pages × 3 viewports (1440, 834, 390 mobile).
- `capture.mjs` — baseline capture (run only after a verified-good deploy; commit baselines).
- `compare.mjs` — live vs baseline pixel-diff; >0.5% changed pixels = FAIL; size change = FAIL;
  diff images saved to diffs/ as run evidence.
- `.github/workflows/visual-regression.yml` — daily 09:10 IST, opens/closes
  `visual-regression` label issues, diffs uploaded as artifacts.

## Verification (honest)
- Positive control: compare vs fresh baselines → 24/24 PASS (max drift 0.022%).
- Negative control: desktop vs tablet baseline → size-change FAIL detected immediately.
- Baseline size: 13.5MB PNG (full-page, lossless, required for honest pixel diff).

## Pass B recheck (what else this affects)
- Baselines are PUBLIC (repo serves Pages): screenshots of public pages only, no PII. Accepted.
- Recapture rule: baselines are the last VERIFIED-GOOD state; recapture only after
  deliberate design change passes review, else the suite guards a broken state.
- Blog/gallery images are remote — if an image host changes, expect a flagged diff;
  investigate before recapturing (the suite is doing its job).
- Does NOT cover product apps (gym-os-v3) — they need authenticated-route testing; queued.
