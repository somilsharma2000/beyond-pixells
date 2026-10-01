# PRODUCT ENGINE — the 70-layer transformation law (installed 1 Oct 2026)

> Master operating system for product work. Subsumes QA-ENGINE module passes:
> QA-ENGINE (modules 00–26) = the HOW for web estate work.
> PRODUCT-ENGINE (layers 1–70) = the full lifecycle: DISCOVER → RESEARCH →
> UNDERSTAND → DEFINE → AUDIT → PRIORITIZE → DESIGN → BUILD → TEST → PACKAGE →
> POSITION → LAUNCH → OPERATE → MEASURE → IMPROVE → RECHECK.
> One product at a time (Law 6). Current focus: GYM OS (flagship).

## PRODUCT DEFINITION (layer 2 — Gym OS)
- **Name/Category:** Gym OS — vertical SaaS, gym management operating system.
- **Customer:** Indian single/multi-branch gym owner (buyer = owner; users = front-desk staff, trainers, members via portal).
- **Problem:** renewals quietly lapse; leads untracked; billing/attendance manual. A website gets people in the door; nothing runs the business after.
- **Alternatives:** registers, Excel, WhatsApp groups, generic gym CRMs (Playbook etc.), do-nothing.
- **Promise:** "We build operating systems for local businesses" — Gym OS runs billing, QR check-in, lead CRM, WhatsApp reminders, renewals automatically.
- **Revenue model:** one-time setup (branded website, data transfer, training) + flat monthly fee, GST invoice included.
- **Scope:** member mgmt, QR check-in, lead CRM, renewals pipeline, classes, payments, multi-branch dashboard, trial passes, demo sandbox.
- **Non-goals (today):** payroll/HR, accounting, diet delivery ops, international localization beyond EN-IN.
- **Maturity:** live product + working demo sandbox; paying-customer pipeline blocked on integrations credits, not product.

## FINDINGS REGISTER (FOUND format — top items)
### F-01 · Join Waitlist contradicts live product
- FOUND: gym-os-v3.vercel.app nav shows "Join Waitlist" next to "Live Demo".
- WHY: signals vaporware; violates the no-vaporware brand law; kills conversion when the product demonstrably works.
- SEVERITY: P1 (trust/conversion blocker).
- ROOT CAUSE: waitlist CTA predates working demo.
- FIX: replace waitlist CTA with demo/WhatsApp demo CTA. BLOCKED for this agent: no push access to gym-os-v3 repo (token scoped to beyond-pixells/dentist-os-site/builder-os-site). Founder or parallel agent must action.
- REMAINING: owner decision.

### F-02 · Handover pricing note stale
- FOUND: HANDOVER said "₹999/₹1,999 unconfirmed"; live site publishes 3-tier (₹15k+₹3.5k/mo etc.), structure founder-adopted Sept 2026.
- SEVERITY: P2 (documentation lies about reality).
- FIX: handover updated (this commit). Evidence: live /pricing page.

### F-03 · Lead backend hardening — CLOSED 2 Oct 2026 (VERIFIED LIVE)
- captureLeadV2 + trackEvent staged; deploy = 5 minutes after Base44 credits reset. P0 revenue path.

### F-04 · Dentist OS email links to dead dentistos.in
- P2. Domain purchase/point needed before dentist flows ship.

### F-05 · Live product functional + security smoke — PASS (1 Oct 2026, layers 8/34, read-only)
- FOUND: API auth (POST /api/v1/auth/login) returns owner session; cookie is HttpOnly + Secure + SameSite=Lax, 7-day expiry.
- VERIFIED ENDPOINTS (200, real demo data): members (19.7KB), leads (6.3KB), classes (3.6KB).
- SECURITY: no-auth → 401; fake session cookie → 401; cross-tenant injection (?tenantId=ten_other_gym) returned ONLY own-tenant data — server derives tenancy from session, ignores client input. Tenant isolation CONFIRMED.
- REMAINING: checkins/payments/dashboard API paths unnamed (404 on guesses — UI works per browser QA earlier); verify exact routes via UI pass when browser budget allows. Demo junk root-cause documented by parallel agent (see commit cb07fa5).

## LAUNCH GATES (cannot launch while open)
1. DONE 2 Oct 2026 — lead pipe live and verified (see docs/ops/UNBLOCK-RUNBOOK.md).
2. F-01 waitlist CTA removed (product repo, founder/parallel agent).
3. Brand palette law settled (v9 vs original) — affects all future output.
4. gymos.in domain pointed at Vercel + NEXT_PUBLIC_SITE_URL set.

## CADENCE
Each engine cycle: named pass → FOUND-format entries here → smallest safe fix → live verify → log in QA-ENGINE findings table.
