# Beyond Pixells Estate — Social OS Security Review (Phase 2: TEST / VERIFY)

**Audit Target:** `somilsharma2000/gym-os-v3` (12 newest commits on `main`: `522e66d` through `eb886f0`)  
**Scope:** Wave C1–C3 Social OS, Connect Center, Publishing Adapters, Automations Transparency, State Machines, & Migrations 0012–0014.  
**Mode:** Phase 2 TEST / VERIFY — Strict Read-Only Codebase Security Audit  
**Report Path:** `/app/conversations/6a8f71c8a808ae791d3f021c/social-os-security-review.md`  

---

## 1. Executive Summary & Scope Verdicts

| # | Scope Item | Verdict | Key Finding / Evidence Summary |
|---|------------|---------|--------------------------------|
| **1** | **Integration Secret Storage** | **SAFE WITH LOW RISK** | Secrets (API keys, access tokens) are encrypted at rest using AES-256-GCM (`src/core/secure-config.ts:29`) with keys derived via `scrypt`. GET endpoints mask secrets via `maskConfig()` (`src/core/secure-config.ts:68`). *Low Risk:* `src/app/dashboard/engines/page.tsx:130` passes raw integration objects (with `v1:` ciphertext envelopes & non-secret fields) in RSC props without `maskConfig()`. |
| **2** | **Publishing Adapters** | **SAFE** | `src/domain/social-publish.ts` surfaces provider errors verbatim (`detail: data.error?.message`), never appends secrets/tokens to error messages, and contains zero `console.log` statements (tokens never logged during the two-step Instagram flow). |
| **3** | **Outbound Calls** | **EXPLOITABLE VULNERABILITY** | All outbound calls use HTTPS. However, `src/core/providers.ts` (`testProviderConnection`) passes access tokens as **URL query parameters** (`?access_token=...`) for WhatsApp (line 147), Instagram (line 165), Facebook (line 180), and Google Business (line 195). Access tokens in URLs leak into HTTP access logs, proxy logs, CDN logs, and browser history. |
| **4** | **New Endpoints & Auth** | **SAFE** | All 9 new API routes (`automations/runs`, `campaigns`, `content`, `social/accounts`, `invoices/void`, `memberships`, `referrals`) call `authenticateRequest` + `requirePermission`. Content approval is strictly owner-gated (`src/domain/social.ts:110`), and state transitions require owner approval prior to scheduling or publishing. |
| **5** | **public/site-event** | **MODERATE PROTECTION** | `POST /api/v1/public/site-event` (`src/app/api/v1/public/site-event/route.ts`) is rate-limited per IP (30 req/min), validates input with Zod, strips PII (device class & referrer hostname only), and uses atomic daily counter upserts (`hits = hits + 1`) to prevent DB row bloat. Lacks bot challenge/honeypot. |
| **6** | **Consent Gates** | **PARTIALLY SAFE / HIGH RISK** | `runSafetyChecks()` (`src/domain/social.ts:85`) hard-blocks `review -> approved` transitions if member content consent or media consent is unverified/ungranted. *High Risk:* Safety checks are **only** evaluated at approval time; if member consent is revoked while content is in `approved` or `scheduled` state, `transitionContent(..., "published")` (`src/domain/social.ts:137`) publishes the item without re-evaluating consent. |
| **7** | **DB Migrations 0012–0014** | **SAFE (ADDITIVE-ONLY)** | Migrations 0012, 0013, and 0014 are strictly additive (`CREATE TABLE IF NOT EXISTS`, `ALTER TABLE ADD COLUMN IF NOT EXISTS`). Zero destructive operations (`DROP`, `TRUNCATE`). RLS is not enabled on Postgres tables (tenant isolation enforced in app layer via `auth.tenantDb` / Drizzle queries, matching Phase 1 baseline). |

---

## 2. Identified Security Findings & Risks

### Finding R-01: EXPLOITABLE — Credentials Exposure via URL Query Parameters in Provider Connection Testing
- **Severity:** HIGH / EXPLOITABLE
- **Category:** Credentials & Outbound Calls (Scope Item 3)
- **File & Line Evidence:**
  - `src/core/providers.ts:147` — `https://graph.facebook.com/v21.0/.../display_phone_number,verified_name&access_token=${encodeURIComponent(config.access_token)}`
  - `src/core/providers.ts:165` — `https://graph.facebook.com/v21.0/.../username,followers_count&access_token=${encodeURIComponent(config.access_token)}`
  - `src/core/providers.ts:180` — `https://graph.facebook.com/v21.0/.../name,access_token&access_token=${encodeURIComponent(config.access_token)}`
  - `src/core/providers.ts:195` — `https://mybusiness.googleapis.com/v4/.../locations/.../access_token=${encodeURIComponent(config.access_token)}`
- **Abuse Path / Impact:** When a Super Admin tests provider credentials via `POST /api/v1/admin/integrations/[provider]/test` or `PUT /api/v1/admin/integrations/[provider]?test=true`, `testProviderConnection()` initiates an HTTP GET request to Meta Graph API or Google Business API with `access_token` embedded directly in the request URL string. Access tokens in URLs are captured by outbound network proxies, enterprise firewalls, reverse proxy access logs, server diagnostics, and error reporting systems. An attacker with access to proxy/network logs can steal permanent Meta access tokens and Google OAuth tokens.
- **Recommended Remediation:**
  1. For Google Business API: Send `Authorization: Bearer ${config.access_token}` header (matching `social-publish.ts:131`).
  2. For Meta Graph API (WhatsApp, Instagram, Facebook): Send `Authorization: Bearer ${config.access_token}` header or supply `access_token` in request headers / POST body.

---

### Finding R-02: HIGH RISK — Post-Approval Consent Revocation Bypass in Content Pipeline
- **Severity:** HIGH
- **Category:** Safety Gates & State Machine (Scope Item 6)
- **File & Line Evidence:**
  - `src/domain/social.ts:110–135` — `runSafetyChecks()` is executed **only** when `to === "approved"`.
  - `src/domain/social.ts:137–167` — `to === "published"` calls `publishContentItem()` directly without invoking `runSafetyChecks()` or re-querying `mediaAssets.consentState`.
- **Abuse Path / Impact:**
  1. A manager drafts a post featuring a member (`consentSubjectMemberId` set) or a media asset (`mediaAssetId` set).
  2. Member grants consent; owner approves the content (`idea -> draft -> review -> approved`).
  3. Content moves to `scheduled`.
  4. Before the scheduled publish date, the member revokes consent (e.g. member leaves gym; `media_assets.consent_state` set to `'revoked'`).
  5. When the scheduled publishing worker or API executes `transitionContent(..., "published")`, the system does **not** re-verify consent.
  6. **Outcome:** Unconsented member content is published to Instagram/Facebook/Google in violation of privacy policies (and spec §36–37 hard-gate requirement).
- **Recommended Remediation:** Re-run `runSafetyChecks()` inside `transitionContent()` when `to === "published"` prior to calling `publishContentItem()`.

---

### Finding R-03: MEDIUM RISK — Unmasked Integration Envelopes & Config Passed to Client Components in Engines Console
- **Severity:** MEDIUM
- **Category:** Secret Storage & Component Props (Scope Item 1)
- **File & Line Evidence:**
  - `src/app/dashboard/engines/page.tsx:105` — `const integrationRows = await db.select().from(integrations).where(eq(integrations.tenantId, user.tenantId));`
  - `src/app/dashboard/engines/page.tsx:130` — `<EnginesConsoleClient ... initialIntegrations={integrationRows} />`
  - Contrast with `src/app/dashboard/super-admin/page.tsx:55` — `config: row ? maskConfig(spec.id, row.config) : {}`
- **Abuse Path / Impact:** Managers and Owners can access `/dashboard/engines`. In `EnginesPage`, `integrationRows` is queried directly from the `integrations` table and passed without calling `maskConfig()`. The raw JSON object is serialized into the Next.js React Server Component (RSC) payload sent to the client browser. While secret values inside `SECRET_FIELDS` are stored as `v1:` ciphertext strings, raw ciphertext envelopes, IVs, tags, and non-secret configuration parameters are delivered in browser response payloads to non-owner manager accounts.
- **Recommended Remediation:** Apply `maskConfig(spec.id, row.config)` to `integrationRows` in `src/app/dashboard/engines/page.tsx` before passing `initialIntegrations` to `EnginesConsoleClient`.

---

### Finding R-04: LOW RISK — Potential Owner Role Rejection for Multi-Role Users in Content Approval Path
- **Severity:** LOW
- **Category:** Role-Based Access Control (Scope Item 4)
- **File & Line Evidence:**
  - `src/app/api/v1/content/[id]/route.ts:22` — `const primaryRole = auth.userContext.roles[0]?.role ?? "member";`
  - `src/domain/social.ts:110` — `if (to === "approved" && actor.role !== "owner" && actor.role !== "super_admin") return { error: "FORBIDDEN" };`
- **Impact Analysis:** If a user holds multiple roles (e.g. `[{ role: "manager" }, { role: "owner" }]`), `auth.userContext.roles[0]?.role` evaluates to `"manager"`. When attempting to approve content, `transitionContent` checks `actor.role !== "owner"` and rejects the approval request with `403 FORBIDDEN`. This fails safe (does not grant unauthorized approval), but blocks legitimate owners with secondary roles from approving posts.
- **Recommended Remediation:** Pass the full `roles` array or highest-privileged role to `transitionContent`, or check `auth.userContext.roles.some(r => r.role.toLowerCase() === "owner")`.

---

## 3. Scope Item Verifications & Safe Implementations

### Scope 1: Integration Secret Storage (fe8a1a4 / 7ef3348 Connect Center)
- **Vault Cryptography (`src/core/secure-config.ts`):**
  - Master key derivation (Lines 13–27): `crypto.scryptSync(secret, "gymos-v3-integrations", 32)` using `INTEGRATIONS_ENC_KEY` or `SESSION_SECRET`.
  - AES-256-GCM encryption (Lines 29–36): Produces `v1:<iv_b64>:<tag_b64>:<ciphertext_b64>` envelopes.
  - Decryption roundtrip validation (Lines 38–51): Validates auth tag and envelope format.
  - Provider Secret Mapping (Lines 58–66): Secret fields explicitly cataloged for `razorpay`, `whatsapp`, `instagram`, `facebook`, `google_business`, `llm`, and `sendgrid`.
- **API Masking & Storage Protection (`src/app/api/v1/admin/integrations/[provider]/route.ts`):**
  - Save path (Lines 76–88): incoming values matching `SECRET_FIELDS` are encrypted with `encryptSecret()` before writing to `v3.integrations.config`.
  - Masking read path (`src/app/api/v1/admin/integrations/route.ts:55`): All GET calls pass stored config through `maskConfig()`, replacing plaintext secrets with `"[encrypted: verified]"`.
  - Social Accounts listing (`src/domain/social.ts:139`): `SocialOS.listAccounts` selects account metadata and explicitly omits `tokenEnvelope`.
  - Audit logs (`src/app/api/v1/admin/integrations/[provider]/route.ts:124`): `AuditEngine.writeAuditEvent` records `configKeys` only; secret values are never logged in diffs.

---

### Scope 2: Publishing Adapters (`src/domain/social-publish.ts`)
- **Verbatim Error Propagation:**
  - Facebook feed adapter (Line 58): Returns `data.error?.message` verbatim on Graph API failures.
  - Instagram adapter (Lines 97, 110): Returns container creation and publication error messages verbatim from Meta Graph responses.
  - Google Business adapter (Line 137): Returns Google API `data.error?.message` verbatim.
- **Zero Token Leakage in Error Output:**
  - Standard error return paths wrap provider response messages without interpolating `config.access_token`.
- **Zero Token Logging in Instagram Two-Step Flow:**
  - `publishInstagram()` (Lines 76–116) contains zero `console.log` or file logging statements. Access tokens remain in-memory inside `URLSearchParams` instances during Graph API HTTP calls.

---

### Scope 3: Outbound Calls
- **HTTPS Enforcement:**
  - All outbound API base URLs in `src/domain/social-publish.ts` and `src/core/providers.ts` use `https://` (`https://graph.facebook.com/v21.0`, `https://mybusiness.googleapis.com/v4`, `https://api.razorpay.com/v1`, `https://api.sendgrid.com/v3`).
- **Publishing Adapters Secret Transport (`src/domain/social-publish.ts`):**
  - Facebook feed publishing (Line 54): POST request with `application/x-www-form-urlencoded` body.
  - Instagram publishing (Lines 91, 104): POST requests with `application/x-www-form-urlencoded` body.
  - Google Business publishing (Line 127): `Authorization: Bearer ${config.access_token}` HTTP header.
- **Finding Note:** As flagged in Finding R-01, test connection calls in `src/core/providers.ts` pass access tokens in URL query strings.

---

### Scope 4: New Endpoints & Authorization
Every new endpoint introduced in commits `522e66d` through `eb886f0` calls `authenticateRequest()` and `requirePermission()`:
1. `GET /api/v1/automations/runs` (`src/app/api/v1/automations/runs/route.ts:13,16`) — `read/automations`
2. `GET /api/v1/campaigns` (`src/app/api/v1/campaigns/route.ts:23,24`) — `read/content`
3. `POST /api/v1/campaigns` (`src/app/api/v1/campaigns/route.ts:32,34`) — `create/content`
4. `PATCH /api/v1/campaigns/[id]` (`src/app/api/v1/campaigns/[id]/route.ts:18,20`) — `manage/content`
5. `GET /api/v1/content` (`src/app/api/v1/content/route.ts:22,24`) — `read/content`
6. `POST /api/v1/content` (`src/app/api/v1/content/route.ts:31,33`) — `create/content`
7. `PATCH /api/v1/content/[id]` (`src/app/api/v1/content/[id]/route.ts:16,18`) — `manage/content`
8. `GET /api/v1/social/accounts` (`src/app/api/v1/social/accounts/route.ts:11,14`) — `manage/content`
9. `POST /api/v1/invoices/[id]/void` (`src/app/api/v1/invoices/[id]/void/route.ts:22,25`) — `update/invoices`
10. `PATCH /api/v1/memberships/[id]` (`src/app/api/v1/memberships/[id]/route.ts:30,33`) — `update/memberships`
11. `PATCH /api/v1/referrals/[id]` (`src/app/api/v1/referrals/[id]/route.ts:21,24`) — `update/crm`

**Content Publish Owner Gate:**
`SocialOS.transitionContent()` (`src/domain/social.ts:110`) enforces `if (to === "approved" && actor.role !== "owner" && actor.role !== "super_admin") return { error: "FORBIDDEN" }`. `CONTENT_TRANSITIONS` state machine requires content to pass through `approved` before transitioning to `scheduled` or `published`.

---

### Scope 5: public/site-event Security Posture
- **Endpoint:** `POST /api/v1/public/site-event` (`src/app/api/v1/public/site-event/route.ts`)
- **Current Protections:**
  1. **Rate Limiting (Line 41):** `checkRateLimitShared('site-event:${ip}', 30, 60 * 1000)` enforces a strict limit of 30 page view events per minute per IP address. Exceeding requests receive HTTP `429 RATE_LIMIT_EXCEEDED`.
  2. **Input Validation (Line 46):** Zod schema validates `path` (1–200 characters) and `referrer` (max 300 characters).
  3. **Privacy Preservation (Lines 20, 27):** User-Agent strings are mapped to coarse device classes (`mobile`/`tablet`/`desktop`) and discarded. Referrer URLs are parsed to retain hostnames only (`new URL(referrer).hostname`), stripping all query parameters and potential PII.
  4. **Aggregated Counter Architecture (Line 54):** SQL query upserts hits into `v3.site_page_views` on `(day, path, referrer_host, device)` compound key. Increments `hits = hits + 1` atomically. Prevents table row inflation or storage exhaustion attacks.
- **Protection Rating:** **MODERATE**. Highly resilient against storage denial-of-service and PII exposure; analytics numbers remain vulnerable to automated bot inflation up to 30 hits/min per IP due to absence of bot challenge/honeypot tokens.

---

### Scope 6: Content Pipeline Consent Hard-Gate
- **Approval Gate Enforcement (`src/domain/social.ts:85–135`):**
  - When transitioning content to `approved`, `SocialOS.transitionContent()` calls `runSafetyChecks()`.
  - Checks if `mediaAssetId` has `consentState !== 'granted'`, or if `consentSubjectMemberId` is set with `consentVerified === false`.
  - If ungranted or unverified, safety checks return blocking issues (`CONSENT_NOT_GRANTED` / `MEMBER_CONTENT_UNCONSENTED`).
  - `transitionContent()` saves issues to `content_items.safety_check_result` and halts state transition with `{ error: "SAFETY_BLOCKED" }`.
- **Finding Note:** As flagged in Finding R-02, safety checks are not re-evaluated if consent status changes between approval and execution of `to === "published"`.

---

### Scope 7: DB Migrations 0012–0014
- **Migration 0012 (`0012_automation_transparency.sql`):** Creates `v3.automation_runs` table and adds `last_success_at`, `last_failure_at`, `last_failure_reason` columns to `v3.integrations`.
- **Migration 0013 (`0013_social_os.sql`):** Creates `v3.social_accounts`, `v3.content_items`, `v3.media_assets`, and `v3.campaigns` tables with tenant indexes.
- **Migration 0014 (`0014_content_media_url.sql`):** Adds `media_url` column to `v3.content_items`.
- **Safety Verification:** All DDL statements are wrapped in PL/pgSQL `DO $$` blocks with `IF NOT EXISTS` checks. Non-destructive, additive-only migration design.
- **RLS Status:** Row-Level Security is not enabled on Postgres tables (tenant boundaries enforced application-side via Drizzle ORM queries, e.g. `auth.tenantDb` / `eq(tenantId)`).

---

## 4. Final Recommendations

1. **Fix Access Tokens in Outbound Test URLs (Finding R-01):**
   Update `src/core/providers.ts` (`testProviderConnection`) to send `Authorization: Bearer <token>` in HTTP headers rather than appending `?access_token=` in URL query parameters.
2. **Enforce Publish-Time Consent Re-Verification (Finding R-02):**
   Update `SocialOS.transitionContent()` in `src/domain/social.ts` to re-run `runSafetyChecks()` when `to === "published"` to catch post-approval consent revocations.
3. **Mask Integration Config in Engines Console Props (Finding R-03):**
   In `src/app/dashboard/engines/page.tsx`, map `integrationRows` through `maskConfig()` before rendering `<EnginesConsoleClient initialIntegrations={...} />`.
