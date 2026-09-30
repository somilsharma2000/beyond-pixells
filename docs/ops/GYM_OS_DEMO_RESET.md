# Gym OS Demo Reset — cleanup steps (client-demo hygiene)

**Why this exists:** the flagship Gym OS app (https://gym-os-v3.vercel.app,
repo `somilsharma2000/gym-os-v3`, private) has public demo gyms. Every time
anyone tests in them (QA leads, junk members, duplicate class sessions), the
demo fills with noise that a client would see. The app has a built-in reset.

**Never clean by hand or by SQL.** The built-in reset is the only supported
path: it wipes ONLY synthetic demo tenants (`is_demo = true`) and reseeds the
clean dataset from `scripts/seed.ts`. Real tenants are never touched.

## When to run

- Before any client demo (always — takes ~1-2 min)
- After you or anyone has tested inside the demo gyms
- If the daily functional smoke reports "demo junk marker visible"

## Steps (UI — recommended)

1. Open https://gym-os-v3.vercel.app/login
2. Log in as the demo owner (documented in gym-os-v3 `docs/ADMIN_GUIDE.md`):
   - Email: `oxigen.owner@demo.gymos.local`
   - Password: `Demo@1234`
3. In the sidebar, open **Super Admin → Connect Center**
   (owner-only; any tenant owner sees it, server-side gated).
4. Click **Reset demo** and confirm. Cold database can take up to a few
   minutes — the route allows 5 minutes server-side.
5. Success looks like: "Demo data reset — N leads, N members, N class
   sessions reseeded."

## Steps (API — same thing, scriptable)

```bash
curl -c c.txt -X POST https://gym-os-v3.vercel.app/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"oxigen.owner@demo.gymos.local","password":"Demo@1234"}'
curl -b c.txt -X POST https://gym-os-v3.vercel.app/api/v1/admin/reset-demo
```

## Verify it worked (30 seconds)

- Login → Dashboard renders with members/leads data (not empty, not junk)
- Lead names are realistic (e.g. "Priya Verma"), none say
  Test / Conv Guest / Trial Guest
- 390px wide (phone) shows no horizontal pan

The daily **Gym OS Functional Smoke** workflow
(`.github/workflows/gym-os-smoke.yml`, 08:40 IST) checks all of this
automatically and opens a `gym-os-alert` issue if the demo degrades.

## Safety rules

- The reset deletes only `is_demo = true` tenants. Production tenants are
  never in scope (enforced server-side, both in the route and the seed).
- Real customer data lives in non-demo tenants; never run ad-hoc SQL deletes
  against the production database.
- If the reset button is missing or errors, check that you're logged in as
  an OWNER of a demo gym — the route refuses everyone else.

**Last live reset + verification:** 30 Sep 2026 — junk purged, clean dataset
reseeded (36 leads / 122 members across 2 demo gyms), phone-width clean,
zero JS errors.
