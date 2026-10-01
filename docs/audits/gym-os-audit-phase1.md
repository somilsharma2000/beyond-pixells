# Gym OS Phase 1 Audit — INSPECT → UNDERSTAND → MAP
**Auditor:** Beyond Pixells audit engine · **Date:** 2 Oct 2026 · **Scope:** somilsharma2000/gym-os-app + somilsharma2000/gym-os-v3 @ latest main · **Mode:** read-only, no changes made

## Executive Summary

Both codebases are in dramatically better shape than the marketing-site side of the estate: strict TypeScript, zero TODO/FIXME debt, real test suites (11 + 29 files), zod-validated APIs, prototype-pollution guards, CORS allowlists, HMAC-verified webhooks, scrypt password hashing, and a full MFA suite. The single structural weakness is that multi-tenant isolation is enforced **only at the application layer** (a `TenantScopedDb` wrapper), not by Postgres RLS — every query must opt into the wrapper, and one raw query bypasses the whole model. Secondary findings: a plaintext env-stored super-admin password in gym-os-app, and dependency drift between the two repos.

---

## 1. Route Map

### gym-os-app (marketing site + ops console host — gym-os-app.vercel.app)
| Area | Route | Purpose |
|---|---|---|
| Marketing | `/` | Landing page |
| Marketing | `/pricing` | Pricing (docs state final authority; audit confirms exists) |
| Marketing | `/compare` | Comparison page |
| Content | `/blog`, `/blog/[slug]` | Blog index + posts |
| Auth | `/login` | Ops console login |
| Legal | `/privacy`, `/terms`, `/refund` | Policy pages |
| SPA | `public/dashboard/` | Hash-routed ops console SPA, entry `/dashboard#/login` (served statically, talks to `api/ops/[fn]`) |

### gym-os-v3 (product — gym-os-v3.vercel.app)
| Area | Routes |
|---|---|
| Public | `/`, `/features`, `/pricing`, `/solutions`, `/integrations`, `/demo`, `/signup`, `/contact`, `/security`, `/privacy`, `/terms`, `/refund` |
| Dashboard (auth) | `/dashboard` (overview), `/members`, `/members/[id]`, `/leads`, `/leads/[id]`, `/classes`, `/classes/[id]`, `/checkin`, `/renewals`, `/engines`, `/intelligence`, `/settings`, `/super-admin`, `/support` |
| Member portal | `/portal`, `/portal/classes`, `/portal/support` |
| Auth | `/login` |

## 2. API Architecture

**gym-os-app — 12 routes.** Auth trio (`login`/`logout`/`me`) + `password-reset`, `checkin`, `content`, `cron/outbox` (CRON_SECRET-gated), `dashboard/summary`, `growth/brief`, `integrations`, `payments`, and the `ops/[fn]` proxy — a single POST endpoint dispatching to ops functions with prototype-pollution blocklist (`__proto__`/`constructor`/`prototype`), origin allowlist, DB-backed rate limiting, and opportunistic heartbeat (`src/app/api/ops/[fn]/route.ts`).

**gym-os-v3 — 56 routes under `/api/v1`, versioned and grouped:**
- **auth:** login, logout, session + complete MFA suite (enroll, verify, disable, backup-codes, login/mfa)
- **tenant CRUD:** members, leads (+ trial-pass + QR generation), classes, bookings, follow-ups, automations (+ follow-up-sweep, renewal-reminders), memberships/sell, attendance (check-in/out)
- **member self-service:** `me/*` (profile, attendance, bookings, entitlements, invoices, qr-token)
- **admin:** integrations (+ per-provider + test), outbox deliver, platform-settings, reset-demo
- **platform:** ai/draft, intelligence (overview/whatif), ops-center, outbox (+ dry-run), permissions/simulate, support tickets/feedback, contact, public/site-event
- **webhooks:** razorpay (HMAC `x-razorpay-signature` verified against stored `webhook_secret`, idempotent), whatsapp

**Auth mechanism:** session-cookie via `authenticateRequest()` → returns `{ user, userContext, tenantDb }`; permission checks via `requirePermission(userContext, action, resource)` (`src/core/api.ts`). Passwords hashed with node scrypt (`src/core/password.ts`). No third-party auth lib — hand-rolled but well-built.

**Tenant isolation (v3):** `TenantScopedDb` class (`src/core/tenant-db.ts`) — constructor rejects empty tenantId, every `findMany`/`findFirst`/etc. wraps conditions with `eq(table.tenantId, this.tenantId)`. gym-os-app states the same model: "every business table carries tenant_id and every repository query is tenant-scoped from the session. Enforced by tests/tenancy.test.ts" (`src/core/db/schema.ts:10`).

## 3. Dependency Graph

| | gym-os-app | gym-os-v3 | Note |
|---|---|---|---|
| next | ^16.3.6 | ^16.3.8 | minor drift |
| react | ^19.3.0 | ^19.0.0 | app is NEWER than product — inconsistent pinning |
| drizzle-orm | ^0.45.3 | ^0.45.3 | aligned |
| postgres | 3.4.4 | ^3.4.5 | fine |
| zod | 3.23.8 | 3.24.2 | minor drift |
| qrcode | — | ^1.5.4 | QR check-in lives in v3 only |
| total | 7 deps | 11 deps | both lean |

No deprecated packages spotted. Both use hand-rolled crypto instead of jose/bcrypt (acceptable — scrypt + safeEqual are sound primitives). Nothing duplicated that shouldn't be; the two apps share no code (each has its own schema, auth, and rate-limit implementations — a conscious split, but it doubles security-sensitive surface).

## 4. Env + Config (names only, no values)

**gym-os-app:** DATABASE_URL, CRON_SECRET, LEAD_WEBHOOK_SECRET, LEAD_WEBHOOK_URL, SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD, NEXT_PUBLIC_API_BASE, NEXT_PUBLIC_BASE_PATH, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_SITE_URL.
**gym-os-v3:** DATABASE_URL, NEON_DATABASE_URL, SESSION_SECRET, INTEGRATIONS_ENC_KEY, NEXT_PUBLIC_SITE_URL.
Both commit only `.env.example` — no real env files in git (verified). Secrets classification: all non-NEXT_PUBLIC vars are server secrets.

## 5. Data Layer

- **gym-os-app:** single schema, 50 tables (`src/core/db/schema.ts`), all business tables carry `tenant_id` (FK → tenants).
- **gym-os-v3:** 26 schema modules (`src/db/schema/*`): access, ai, analytics, audit, auth, automations, billing, core, equipment, events_outbox, finance, followups, integrations, inventory, marketing, members, notifications, ops-center, policies, saas, scheduling, staff, support, tenants, trials. Outbox pattern (`events_outbox`) for reliable side-effects; audit table present.

## 6. Security Posture

- **Hardcoded secrets scan:** one regex hit in v3 = a Razorpay *placeholder string* in `src/core/providers.ts:34` (`rzp_live_...` docs text). No real committed secrets found. PASS.
- **Committed .env:** none. PASS.
- **Webhook auth:** razorpay verifies HMAC-SHA256 signature + idempotency; rejects unconfigured webhook secret. PASS.
- **Prototype pollution guard + CORS allowlist + DB rate limiting** on ops proxy. PASS.
- **Super-admin login (gym-os-app):** `src/domains/ops/login.ts:33-43` — compares submitted password directly against `process.env.SUPER_ADMIN_PASSWORD` (constant-time `safeEqual`, but the env holds a *plaintext* master credential). If env leaks or password is weak, attacker gets full HQ access (role `super_admin`, gym_id `ALL`). **FINDING.**
- **App-layer tenancy only (v3):** no Postgres RLS / `set_config`/`current_setting` usage found anywhere in `src/db` — isolation depends 100% on every code path using `TenantScopedDb`. **FINDING (structural).**

## 7. Health Signals

| Signal | gym-os-app | gym-os-v3 |
|---|---|---|
| TODO/FIXME/HACK | 0 | 0 |
| Test files | 11 (incl. tenancy.test.ts) | 29 (incl. state_machine, mfa, razorpay_checkout, ratelimit_shared, site_event, schema) |
| TS strict | true | true |
| Framework | Next 16 + React 19 | Next 16 + React 19 |
| Docs | ARCHITECTURE.md, docs/, release-readiness/ | README, docs/, ops/ |

Both repos have test infrastructure (vitest) and actually use it. No static build-blockers spotted.

## 8. Top 10 Findings (ranked)

1. **[v3] Tenant isolation is app-layer only, no DB RLS** — one raw/unwrapped query exposes cross-tenant data. *Why it matters: single-bug blast radius = full multi-tenant breach.* Effort: M (add Postgres RLS policies keyed on `app.tenant_id`, set per-request).
2. **[app] Plaintext super-admin credential in env** (`SUPER_ADMIN_PASSWORD`, compared directly). *Master key for the whole HQ console.* Effort: S (bootstrap to scrypt-hashed row on first login, then remove env comparison).
3. **[both] Dependency drift** (react ^19.3.0 vs ^19.0.0, next .6 vs .8, zod .23.8 vs .24.2). Effort: S (align pins).
4. **[v3] NEON_DATABASE_URL alongside DATABASE_URL** — two database env names; risk of split-brain config where one code path uses the wrong DB. Effort: S (verify usage + document).
5. **[app] Ops console SPA is a separately-evolved hash-routed app** — two frontends (app pages + SPA) with separate auth paths (cookie + bearer). Surface area doubles; consolidate long-term. Effort: L.
6. **[v3] Hand-rolled auth rather than audited lib** — well-executed (scrypt, MFA, safeEqual, rate limits, tests) but unreviewed by third parties. Effort: M (security review or port to lib).
7. **[app] `dashboard/summary` + `growth/brief` unverified this pass** — auth posture not yet read line-by-line; queue for Phase 2 TEST. Effort: S (read + verify).
8. **[v3] `public/site-event` endpoint** — check for anonymous-write validation/scrubbing like the Base44 pipeline got (honeypot/rate limit). Phase 2 item. Effort: S.
9. **[both] No CI observed** (no .github/workflows found in either repo listing) — tests exist but nothing enforces them on push. Effort: S (GitHub Actions: lint + vitest).
10. **[v3] `dbg.mjs` at repo root** — debug script in production branch; audit and remove if stale. Effort: S.

## Verified claims vs inference
- Verified: all route lists, env names, isolation mechanism, password hashing, webhook HMAC, test counts, tsconfig, committed files.
- Inference: risk narratives in Findings 1-2 (based on the verified mechanisms); Phase 2 TEST should prove exploit paths before remediation.
