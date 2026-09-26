# 🧠 Beyond Pixells — AGENT BRAIN

> **OPERATING RULES (26 Sep 2026):** `AGENTS.md` (repo root) is law — research before
> material decisions, no invention, no shallow completion. `docs/00_MASTER_INDEX.md` is the
> master research/execution index. Every material decision needs a research record in
> `docs/research/records/` (format: 00_MASTER_INDEX §103) and two rechecks before COMPLETE.

> **READ THIS FIRST.** This is the master document for the entire Beyond Pixells
> project. Any agent (or human) who reads this file + the docs it links can
> understand and continue every part of the project. Last updated: 2026-09-26.

---

## 1. What this is

> **NEW AGENT?** Read `docs/HANDOVER.md` FIRST — the complete transfer document
> (vision, all links, current state, priorities), then come back here for machinery.

**Beyond Pixells** (spelling: always "Pixells", never "Pixels") is a modern product
studio by **Somil Sharma** (India) that builds **operating systems for local businesses**.
It sells: vertical SaaS products (the "OS family"), custom client rollouts,
and services. Business model: **services cashflow → products scale**.

| Thing | Truth |
|---|---|
| Positioning | "We build operating systems for local businesses." |
| Hero product | **Gym OS** — gym management for Indian gyms (live) |
| Product 2 | **Dentist OS** — dental clinics (live demo) |
| Product 3 | **Builder OS** — real estate (in development) |
| Ventures | Bloomwire (flowers), FORTREX FX (trading, pre-launch) |
| Contact | WhatsApp +91 77370 77479 (primary CTA everywhere) |

## 2. The estate (where everything lives)

### Flagship repos (GitHub: somilsharma2000, token already configured)
- **beyond-pixells** ← YOU ARE HERE. Brand hub + all playbooks + design system + research.
  Live: https://somilsharma2000.github.io/beyond-pixells/
- **gym-os** — Gym OS product landing + full docs (FEATURE_SPEC 32 modules, BACKEND_MAP,
  client-kit). Live: https://somilsharma2000.github.io/gym-os/
- **dentist-os-site** — Dentist OS product landing (research-backed rebuild, 26 Sep 2026).
  Live: https://somilsharma2000.github.io/dentist-os-site/
- **dentist-os** — the working SmileCraft demo clinic (public site + admin + portal).
  Live: https://somilsharma2000.github.io/dentist-os/
- **builder-os-site** — Builder OS product landing.
- 8 client system repos (`bettabodies-system`, `reds-gym-system`, `flex-n-tone-system`,
  `fight-factory-manchester-system`, `oxigen-fitness-digital`, `ironforge-website`,
  `iron-forge-website` ⚠ serves from `gh-pages` branch, not `main`!, `powerhouse-fitness`).
  Each: branded site + `portal/` + `dashboard/` + `gym-os-connect.js` (lead capture).

### Base44 apps (the backend estate — see gym-os/docs/BACKEND_MAP.md)
- **"Gym osssss"** (`6a85aadd01bc42f293723858`) — the published Gym OS platform at
  my-gym-os.base44.app. 45+ entities. This is where leads SHOULD land.
- **"Vesper"** (`6a76f719f88f2473ba879696`) — the lead-capture endpoint all client
  sites currently POST to (`captureGymLead`). Needs repointing to Gym osssss.
- **"BEYOND PIXELLS"** (`6a700b150c8d8b8e923580a1`) — private app where leads
  currently land. Unpublished.
- **Koda** = FORTREX backend. **Arlo** = FORTREX waitlist. **BloomWire** = flower store.

### Lead flow (how the money pipe works)
```
Client site form → gym-os-connect.js v2 (has consent + WhatsApp fallback)
  → Gym osssss captureGymLead / createLeadWithConsent  ✅ repointed 26 Sep 2026
Offline/failure → localStorage queue (gymos_lead_queue) + WhatsApp CTA
```
**Repoint details (26 Sep 2026):** all 6 connect-v2 sites now POST to
`https://base44.app/api/apps/6a85aadd01bc42f293723858/functions/captureGymLead`.
Iron Forge Hyderabad (main + gh-pages) and PowerHouse Hyderabad now call
`.../6a85aadd01bc42f293723858/functions/createLeadWithConsent` (app id swap only).
Vesper + BEYOND PIXELLS no longer receive gym leads. End-to-end verification
pends the Base44 credit reset (capture functions refuse calls with HTTP 402 until then).

## 3. The visual design language (v4.0 CHROME VIOLET — locked 26 Sep 2026)

Single source of truth: **`assets/bp-design-system.css`** + **`assets/bp-motion.js`** + **`assets/bp-effects-kit.css/.js`** (chrome tile, border beam, meteors, spotlight, 3D tilt — Magic UI patterns ported to vanilla). Apply via the `visual-effects-kit` skill.
Any site adds 2 lines and gets the whole system:

```html
<link rel="stylesheet" href="https://somilsharma2000.github.io/beyond-pixells/assets/bp-design-system.css">
<script src="https://somilsharma2000.github.io/beyond-pixells/assets/bp-motion.js"></script>
```

- **Tokens**: canvas `#06060D`, surfaces `#10101E/#13131F`, violet chrome gradient
  `#8B5CF6→#6D28D9→#3B1470`, gold accent `#FF9500/#FFB86B` (rim light + CTAs),
  Space Grotesk + Plus Jakarta Sans, easing `cubic-bezier(.16,1,.3,1)`.
  Signature object: the glossy chrome tile (violet body, gold rim, top gloss, glow).
- **Motion library**: `bp-fadeUp` (scroll reveal, auto-applied), `bp-scaleIn`,
  `bp-glowPulse` (CTAs), `bp-gradientShift`, `bp-numSlide` (count-up stats),
  `bp-marquee`. All respect `prefers-reduced-motion`.
- **Rules**: one accent family per page, no rainbow, no fake data, honest labels.
  Full spec: `docs/DESIGN_LANGUAGE.md` + `docs/research/design_language.md`.
- **Per-product flavors**: all products share Chrome Violet v4 (unified language);
  personality differs via copy and dashboard content, not palette.

## 4. Marketing system

- **Hooks** (from psychology research): loss aversion ("fees walking out the door"),
  payback framing ("retain 2 members and it's free"), WhatsApp-native ("zero new apps"),
  risk reversal ("register transferred in 24h or you pay nothing"),
  FOMO ("the gym across the street auto-renews on WhatsApp").
- **Objections to kill on every page**: untechnical staff, register/Excel habit,
  cheap software, data safety, member adoption.
- **Social content**: generated FROM the design system —
  `assets/social-templates/` (stat-drop.html, hook-card.html are 1080×1920
  screen-record templates). Full system: `docs/SOCIAL_SYSTEM.md`.
- **Message design pack (26 Sep 2026)**: brand-consistent automation copy + email skeleton —
  `assets/message-templates/gym-os-whatsapp.md` (7 message types),
  `assets/message-templates/dentist-os-whatsapp.md` (6 types),
  `assets/message-templates/email-dark-base.html` (dark-premium transactional skeleton).
  Full research: `docs/research/message_design_pack.md`.
- **Design system v2.0 (26 Sep 2026)**: spotlight cards, hero choreography, nav frost,
  noise canvas, magnetic/tilt engines — opt-in utilities documented in
  `docs/DESIGN_LANGUAGE.md` (v2.0 section); applied to hub, Gym OS landing,
  Dentist OS landing. Client-system rollout queued.
- **SEO/GEO**: robots.txt + sitemap.xml + llms.txt + JSON-LD on the flagships;
  canonical + OG + schema on every site. Full guide: `docs/SEO_GEO.md`.

## 5. The playbooks (docs/)

| Doc | What's inside |
|---|---|
| `BRAND_PLAYBOOK.md` | Positioning, naming rules, voice, visual system, message hierarchy |
| `BUSINESS_PLAYBOOK.md` | The model, pricing architecture, vertical launch playbook, survival rules, metrics, legal checklist |
| `DESIGN_LANGUAGE.md` | The complete UI/UX spec: tokens, motion, components, per-product flavors, a11y |
| `SEO_GEO.md` | Head templates, JSON-LD blocks, GEO checklist for AI engines |
| `SOCIAL_SYSTEM.md` | 10 content formats, production pipeline, posting cadence |
| `research/` | 15 research reports behind every decision (competitors, psychology, legal, survival, brand, dentist market, design, SEO/GEO, social) |

## 6. Open items (honest state, do not claim done)

1. ~~Vesper → Gym osssss repoint~~ — DONE 26 Sep 2026 (all 8 gym client sites repointed;
   verify end-to-end once integration credits reset; then migrate old BEYOND PIXELLS leads).
2. **Base44 integration credits exhausted** — capture API fails until reset/upgrade.
3. **Gym OS pricing** — ₹999/₹1,999 are research-recommended, Somil hasn't confirmed.
4. **Safe Browsing review** — sponsored sites normalized; needs Search Console review request.
5. **Custom domains** — everything still on github.io/base44.app subdomains.
6. **Legal** — playbooks are checklists, not reviewed by a CA/lawyer yet.
7. ~~Dentist OS landing rebuild~~ — DONE 26 Sep 2026, live at https://somilsharma2000.github.io/dentist-os-site/ (pricing tiers on it are research-recommended, founder confirmation pending).

## 7. How to work on this project (rules for agents)

1. Read this file + the relevant playbook before touching anything.
2. Never break the design language — use the tokens, not new colors.
3. Never invent proof, prices, testimonials or stats. Honest labels only.
4. Push to `main` (EXCEPT `iron-forge-website`: push to `gh-pages` too/instead).
5. Verify live after every deploy (curl the URL, grep for your change).
6. When you add a new finding or decision, update the docs in THIS repo.
7. "Beyond Pixells" spelling is sacred. Audit for "Beyond Pixels" typos.
8. All lead-capture client sites must keep: consent capture + offline fallback.
