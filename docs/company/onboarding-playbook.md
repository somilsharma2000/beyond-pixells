---
title: Gym Client Onboarding SOP (Rollout Playbook)
summary: Standard operating procedure for onboarding gym clients and rolling out branded landing sites using client_site_factory.py, GitHub Pages, gym-os-connect.js repointing, Estate Guard monitoring, and live verification.
---

# Gym Client Onboarding SOP (Rollout Playbook)

> **Blueprint Reference:** Blueprint §37 (Client Onboarding & Delivery Framework)  
> **Gap Addressed:** Gap #15 — "Delivery SOP not written after 8 rollouts" (documented in `docs/research/RESEARCH_GAPS.md` and `docs/research/MASTER_RESEARCH_COVERAGE_MATRIX.md`).  
> **Operating Constraint:** Based strictly on existing repository tooling and verified deployment practices. Never invent missing steps. Unsystematized administrative steps are explicitly marked.

---

## 1. Client Site Rollout Architecture (`client_site_factory.py`)

A client site rollout generates a standalone, branded gym landing page repository from the canonical template (`oxigen-fitness-digital`) and a single client JSON file.

### CLI Factory Execution
The automated factory script lives at `tools/client-sites/client_site_factory.py`.

```bash
# Usage: python3 tools/client-sites/client_site_factory.py <client.json> <target_dir>
python3 tools/client-sites/client_site_factory.py tools/client-sites/clients/<client_slug>.json ../<client-repo-name>
```

### Input Data (`<client_slug>.json`)
Every client site requires a structured JSON file placed in `tools/client-sites/clients/`. The JSON contains two primary blocks:
1. **Template Replacements (`client`)**: Top-level keys injected directly into `index.html` via string substitution.
2. **Configuration Block (`client["config"]`)**: Structured JS object written to `site.config.js`.

#### Canonical Template Replacements (`index.html`)
The factory reads `index.html` from `oxigen-fitness-digital` and replaces template anchor strings with values from the client JSON:
- `metaDescription` → `<meta name="description" content="..." />`
- `title` → `<title>...</title>`
- `siteUrl` → `<link rel="canonical" href="..." />` & `og:url`
- `ogTitle` & `ogDescription` → OpenGraph meta tags
- `jsonld` → `<script type="application/ld+json">` (Structured HealthClub JSON-LD)
- `brandMark`, `brandNameUpper`, `brandName` → Header/footer logos and ARIA labels
- `locationLabel` → Top badge (e.g. `JAIPUR · MEMBER-LED TRAINING`)
- `heroH1`, `heroDescription`, `heroPrimaryCta`, `heroMicroCopy`, `heroCardQuote`, `heroCardNote`
- `aboutEyebrow`, `aboutH2`, `aboutP`, `stat1`, `stat2`, `stat3`
- `programsEyebrow`, `programsH2`, `programsP`, `programCards[]` (name & desc for 3 cards)
- `timetableEyebrow`, `timetableH2`, `timetableP`
- `trainersP`, `membershipP`, `facilitiesP`, `equipmentLines[]`
- `recoveryKicker`, `recoveryTitle`, `recoveryP`
- `fourthPanelKicker`, `fourthPanelTitle`, `fourthPanelP`
- `trialH2`, `trialP`, `footerTagline`, `address`, `phoneDisplay`
- `window.GymOSConfig` → `gymName` and `isDemo` flag initialization

**Factory Safeguard:** The script executes `assert 'Oxigen' not in s` to guarantee zero leftover references to the canonical template brand before writing `index.html`.

#### Client Config File (`site.config.js`)
The factory invokes `build_config(client)` to write `site.config.js`, creating `window.<configVar>`:
- `brandName`, `publicSlug`, `locationLabel`, `tagline`, `description`
- **Contact:** `whatsapp`, `whatsappName`, `whatsappPreFill`, `instagram`, `email`, `address`, `phone`, `mapsUrl`
- **Social Proof:** `googleRating`, `googleReviewCount`
- **Trial Pass:** `upiId`, `trialPass` object
- **Pricing:** `plans[]` array (`kicker`, `name`, `price`, `period`, `popular`, `desc`, `features[]`)
- **Coaches:** `trainers[]` array (`role`, `name`, `bio`, `tags[]`)
- **Timetable:** `classes[]` array (`category`, `name`, `time`, `desc`)

#### Asset File Copying
The factory copies and performs token substitutions (`OXIGEN_SITE_CONFIG` → `configVar`, `Oxigen Fitness` → `brandName`, `OXIGEN FITNESS` → `brandNameUpper`) across four template files into `<target_dir>`:
- `styles.css`
- `script.js`
- `config.example.js`
- `OWNER_CONTENT_CHECKLIST.md`

---

## 2. Manual Rollout Workflow Around the Factory

While the landing site files are compiled automatically by `client_site_factory.py`, six manual steps are required around code generation:

### Step 2.1: Data Collection & Owner Checklist
1. Create `tools/client-sites/clients/<client_slug>.json` using published information from the club.
2. Adhere strictly to the **No-Invention Law** (`AGENTS.md`): never invent trainers, pricing, reviews, or testimonials. If data is missing (e.g. no coaches listed), leave array empty to trigger honest template fallback cards.
3. Issue `OWNER_CONTENT_CHECKLIST.md` to the gym owner to collect real UPI IDs, exact plan prices, and trainer bios.

### Step 2.2: GitHub Repository Creation
1. Create a new GitHub repository under account `somilsharma2000` named `<client_slug>-system` or `<client_slug>-website`.
2. Initialize with a `main` branch.

### Step 2.3: GitHub Pages Enablement
1. Navigate to Repository Settings → Pages.
2. Set Build and Deployment source to **Deploy from a branch**.
3. Select Branch: **`main`**, Folder: **`/ (root)`**.
4. **CRITICAL EXCEPTION — Iron Forge Hyderabad (`iron-forge-website`):** This repository MUST be pushed to and served from the **`gh-pages`** branch. Pushing only to `main` will break the live site.

### Step 2.4: `gym-os-connect.js` Integration & Compliance
1. Verify `index.html` includes `<script src="https://somilsharma2000.github.io/gym-os/gym-os-connect.js"></script>`.
2. Confirm lead capture forms carry the attribute `data-gymos-lead="true"`.
3. Verify the form includes an unchecked, explicit DPDP-aligned consent checkbox:
   `<input type="checkbox" id="consent" required />`
4. Confirm `gym-os-connect.js` routes form submissions to the active Gym OS backend:
   - **Standard Endpoint:** `https://base44.app/api/apps/6a85aadd01bc42f293723858/functions/captureGymLead`
   - **Consent Endpoint (Iron Forge Hyd & PowerHouse Hyd):** `https://base44.app/api/apps/6a85aadd01bc42f293723858/functions/createLeadWithConsent`
5. Verify fallback handling: network failure or API 402 triggers local queue storing in `localStorage.getItem('gymos_lead_queue')` and redirects lead to WhatsApp.

### Step 2.5: Estate Guard Monitoring Registration
Add the new client site entry to `.github/workflows/estate-guard.yml` in the `beyond-pixells` repository:
```bash
[<Client Name>]="https://somilsharma2000.github.io/<client-repo>/"
```
This registers the site in daily 07:30 IST automated health audits checking for HTTP 200, `gym-os-connect.js`, `data-gymos-lead` form, and required consent checkboxes.

### Step 2.6: Live Production Verification
1. `curl -sL https://somilsharma2000.github.io/<client-repo>/ | grep "<Brand Name>"`
2. Verify lead form submission triggers modal success / fallback behavior.
3. Upon client sign-off, set `<script>window.GymOSConfig = { gymName: '...', isDemo: false };</script>` in `index.html` to remove the demo banner.

---

## 3. Agent Execution Checklist

Agents executing a gym client onboarding rollout must complete this checklist in order:

### Phase 1: Data Gathering & Factory Build
- [ ] **1.1** Collect client data (published sources only) into `tools/client-sites/clients/<client_slug>.json`.
- [ ] **1.2** Verify zero fake data/trainers/reviews exist in the JSON (`AGENTS.md` compliance).
- [ ] **1.3** Run factory script: `python3 tools/client-sites/client_site_factory.py tools/client-sites/clients/<client_slug>.json ../<client_repo>`.
- [ ] **1.4** Verify build terminal output (`BUILT <Brand Name> -> ...`) and check that assertion `assert 'Oxigen' not in s` passed.

### Phase 2: Repository & GitHub Pages Setup
- [ ] **2.1** Create GitHub repo `somilsharma2000/<client_repo>`.
- [ ] **2.2** Push compiled site code to `main` branch.
- [ ] **2.3** If repo is `iron-forge-website`, push site code to `gh-pages` branch as well.
- [ ] **2.4** Enable GitHub Pages in repository settings (Source: `main` / root, or `gh-pages` for `iron-forge-website`).

### Phase 3: Lead Connect & Legal Verification
- [ ] **3.1** Confirm `gym-os-connect.js` script tag exists in `index.html`.
- [ ] **3.2** Confirm lead form has `data-gymos-lead` attribute.
- [ ] **3.3** Confirm explicit, required consent checkbox is present (`<input type="checkbox" required>`).
- [ ] **3.4** Confirm API POST target is set to app `6a85aadd01bc42f293723858` (`captureGymLead` or `createLeadWithConsent`).

### Phase 4: Monitoring & Production Handover
- [ ] **4.1** Add site URL to `.github/workflows/estate-guard.yml` in `beyond-pixells`.
- [ ] **4.2** Curl live GitHub Pages URL to confirm HTTP 200 and correct brand string render.
- [ ] **4.3** Send `OWNER_CONTENT_CHECKLIST.md` to gym owner.
- [ ] **4.4** Set `isDemo: false` in `index.html` after owner confirms site details.

---

## 4. Known Rollout Blockers & Mitigations

### Blocker 1: Base44 Integration Credits Exhausted (HTTP 402)
- **Symptom:** Submitting the lead form returns HTTP 402 Payment Required from `captureGymLead` endpoint (`https://base44.app/api/apps/6a85aadd01bc42f293723858/...`).
- **Root Cause:** Platform integration credit quota is exhausted for the month.
- **Mitigation:** `gym-os-connect.js` traps non-200/201 responses, saves lead payloads in `localStorage` under key `gymos_lead_queue`, and displays a direct WhatsApp fallback modal so leads are not lost.
- **Resolution:** Awaits platform credit reset/upgrade. In the interim, leads route via WhatsApp.

### Blocker 2: Google Safe Browsing Flag on `github.io`
- **Symptom:** Browsers display a red "Deceptive site ahead" warning when visiting `somilsharma2000.github.io` subdomains.
- **Root Cause:** Flagged due to legacy/parked test repos (`sponsored-macbook`, `sponsored-gt650`, `fortrex-*`).
- **Mitigation:** Pages disabled on legacy test repos; sponsored sites normalized; review requests submitted in Google Search Console.
- **Long-term Resolution:** Migrate client sites from `github.io` subdomains to custom branded domains (`.com` / `.in`).

---

## 5. Unsystematized Administrative Steps

The following business and operational steps are **not yet systematized — VPS phase 2**:
- **Invoicing & GST Tax Receipts:** Manual billing by founder (GST 18% SAC classification pending CA review per research record `001`).
- **Contract & Agreement Signing:** Manual client signing (service level agreements and DPDP data processing addendums unreviewed by legal counsel).
- **Automated Recurring Billing:** UPI AutoPay e-mandates and recurring card charge collection (pending Razorpay/Cashfree integration in Phase 2).
- **Staff Account Creation:** Manual admin provisioning inside Gym OS platform (`6a85aadd01bc42f293723858`).

*When executing rollouts, agents must focus strictly on technical site deployment and lead-pipeline verification, deferring the above tasks to the founder.*
