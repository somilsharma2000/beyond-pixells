---
title: Product Idea Database
summary: Seeded database of real product, service, and module ideas evidenced across Beyond Pixells research docs, radars, playbooks, and codebase repositories (blueprint §78).
---

# Product Idea Database

> **Blueprint Reference:** Blueprint §78 (Idea Database & Product Factory Pipeline).  
> **Source of Truth:** Real repository evidence from `docs/company/opportunity-radar.md`, `docs/company/trend-radar.md`, `docs/company/competitive-white-space.md`, `docs/FREE_TOOLS_STACK.md`, research records (`docs/research/records/`), and Base44 application schemas.

---

## 1. Product Factory Pipeline Framework

Every idea in the Beyond Pixells estate transitions through the **9-Stage Product Factory Pipeline**:

$$\text{Idea} \longrightarrow \text{Research} \longrightarrow \text{Validation} \longrightarrow \text{Prototype} \longrightarrow \text{MVP} \longrightarrow \text{Beta} \longrightarrow \text{Launch} \longrightarrow \text{Grow} \longrightarrow \text{Scale/Kill}$$

### Evidence & Validation Rules
- **No Invention Rule:** Ideas are strictly seeded from existing codebase evidence and documented research. No speculative market ideas are added without empirical backing.
- **Honesty Note on Market Evidence:** While Gym OS features and India SMB WhatsApp dynamics have extensive research coverage (records 004, 005, 006, 007, 008), secondary verticals such as **Builder OS**, **Dentist OS**, and standalone **WhatsApp automation** have thin or pending vertical-specific market research records. Per blueprint §9, these must not advance to further engineering until formal market validation records land.

---

## 2. Seeded Ideas Index

| Name | One-Line Pitch | Evidenced In | Status | Pipeline Stage |
|---|---|---|---|---|
| **Gym OS** | All-in-one gym operating system for Indian gym owners with WhatsApp automation and flat INR pricing. | `opportunity-radar.md`, `competitive-white-space.md`, `gym-os` repo, records 004/006/007 | `live` | **Scale/Kill** |
| **Dentist OS** | Dental clinic management OS for appointment scheduling, patient records, and WhatsApp reminders. | `opportunity-radar.md`, `dentist-os-site` repo, `dentist-os` demo repo | `prototype` | **Prototype** |
| **Builder OS** | Real estate OS for builders to manage buyer inquiries, site visits, and project inventory. | `opportunity-radar.md`, `builder-os-site` repo, `BUSINESS_PLAYBOOK.md` | `idea` | **Idea** |
| **Client-Site Lead Recovery Service** | Productized service to audit, capture, and recover lost leads across client gym/business websites. | `opportunity-radar.md`, 8 live client repos, `estate-guard.yml` | `validation` | **Validation** |
| **WhatsApp Automation Engine** | Standalone WhatsApp messaging and renewal automation engine for local service SMBs. | `opportunity-radar.md`, `trend-radar.md`, records 004/008, `assets/message-templates/` | `idea` | **Research** |
| **WhatsApp Member Renewal Module** | Automated WhatsApp membership renewal alerts with instant UPI payment links inside Gym OS. | `competitive-white-space.md`, records 004/005/008 | `live` | **Grow** |
| **Proactive Member Churn Alerts (`AtRiskRule`)** | Predictive retention system flagging members with declining attendance before membership drops. | `competitive-white-space.md`, Base44 `AtRiskRule` entity, records 003/007 | `prototype` | **Prototype** |
| **UPI AutoPay Subscription Engine** | Automated zero-friction recurring fee collection via NPCI UPI AutoPay mandates and dynamic QR codes. | `competitive-white-space.md`, `trend-radar.md`, record 005 | `validation` | **Validation** |
| **FORTREX FX Platform** | Algorithmic FX trading dashboard, signal processing backend, and waitlist management. | `opportunity-radar.md`, `BACKEND_MAP.md` (Base44 app Koda/Arlo), `HANDOVER.md` | `parked` | **Beta** |
| **Bloomwire Flower Platform** | Headless e-commerce storefront and order fulfillment platform for floral commerce. | `opportunity-radar.md`, `BACKEND_MAP.md` (Base44 app BloomWire), `FREE_TOOLS_STACK.md` | `parked` | **Prototype** |
| **Paperclip Agent Workforce HQ** | Self-hosted agent-company management dashboard for coordinating multi-agent sub-agent workflows. | `FREE_TOOLS_STACK.md` (Category 7 / Phase 5), `research/tools_automation.md` | `idea` | **Idea** |
| **ViewBoost / RepoLaunch Growth Tools** | Micro-SaaS tools for GitHub repo launch amplification and developer content engagement. | `opportunity-radar.md`, `HANDOVER.md` | `parked` | **Idea** |
| **Restaurant QR Menu & Ordering** | QR digital menus and online ordering for restaurants and takeaways. | `idea-db.md` §13, saasyaari.ai demand signal (26 Sep 2026) | `idea` | **Idea** |
| **AI Single-Page Website Builder** | AI-generated single-page websites for local businesses, from our own templates. | `idea-db.md` §14, saasyaari.ai demand signal | `idea` | **Idea** |
| **Digital V-Card & NFC** | Digital business cards with link/QR/NFC sharing for professionals. | `idea-db.md` §15, saasyaari.ai demand signal | `idea` | **Idea** |
| **AI Reviews & GMB Automation** | Review request automation, AI replies, and Google Business Profile management for local businesses. | `idea-db.md` §16, saasyaari.ai demand signal | `idea` | **Idea** |
| **QR Loyalty & Rewards** | Digital stamp cards and loyalty programs for repeat-visit businesses. | `idea-db.md` §17, saasyaari.ai demand signal | `idea` | **Idea** |
| **Gym Setup & Equipment Partner Channel** | Referral channel: gym setup companies and equipment manufacturers refer Gym OS to new gyms for a commission; we build everything digital. | `idea-db.md` §18, founder directive 27 Sep 2026 | `validation` | **Validation** |

---

## 3. Seeded Idea Specifications

### 1. Gym OS (Flagship Vertical SaaS)
- **One-Line Pitch:** Operating system for Indian gym owners with WhatsApp-native automation and flat monthly pricing.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `docs/company/competitive-white-space.md`, `docs/research/records/004`, `006`, `007`, `gym-os` repo.
- **Status:** `live`
- **Pipeline Stage:** **Scale/Kill** (Live in production; pricing confirmation ₹999/₹1,999 pending founder sign-off).

### 2. Dentist OS
- **One-Line Pitch:** Dental clinic management OS for appointment scheduling, patient communications, and WhatsApp treatment follow-ups.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `dentist-os-site` repo, `dentist-os` demo repo.
- **Status:** `prototype`
- **Pipeline Stage:** **Prototype** (Demo clinic live at `somilsharma2000.github.io/dentist-os/`; dentist-specific market research record pending).

### 3. Builder OS
- **One-Line Pitch:** Operating system for real estate builders to manage buyer inquiries, site visits, and project inventory.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `builder-os-site` repo, `docs/BUSINESS_PLAYBOOK.md`.
- **Status:** `idea`
- **Pipeline Stage:** **Idea** (Landing page stub exists; vertical-specific market research required per blueprint §9 prior to engineering).

### 4. Client-Site Lead Recovery Service
- **One-Line Pitch:** Productized agency service to audit, capture, and recover lost leads on local business client websites.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, 8 live client repos, `.github/workflows/estate-guard.yml`.
- **Status:** `validation`
- **Pipeline Stage:** **Validation** (Capability exists across 8 client sites; offer packaging pending).

### 5. WhatsApp Automation Engine for Indian SMBs
- **One-Line Pitch:** Standalone WhatsApp messaging, renewal alert, and conversational engagement engine for local service businesses in India.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `docs/company/trend-radar.md`, `docs/research/records/004`, `008`, `assets/message-templates/`.
- **Status:** `idea`
- **Pipeline Stage:** **Research** (Message design pack completed; standalone API wrapper evaluation active).

### 6. WhatsApp Member Renewal Module
- **One-Line Pitch:** Automated WhatsApp membership renewal alerts with instant UPI payment links and check-in confirmation inside Gym OS.
- **Where It's Evidenced:** `docs/company/competitive-white-space.md`, `docs/research/records/004`, `005`, `008`.
- **Status:** `live`
- **Pipeline Stage:** **Grow** (Deployed on client sites and Gym OS platform).

### 7. Proactive Member Churn Alerts (`AtRiskRule`)
- **One-Line Pitch:** Predictive retention engine that flags gym members with declining attendance prior to membership expiration.
- **Where It's Evidenced:** `docs/company/competitive-white-space.md`, Base44 `AtRiskRule` entity schema, `docs/research/records/003`, `007`.
- **Status:** `prototype`
- **Pipeline Stage:** **Prototype** (Base44 entity schema defined; automation rule trigger pending credit reset).

### 8. UPI AutoPay Recurring Subscription Engine
- **One-Line Pitch:** Automated zero-friction recurring subscription collection via NPCI UPI AutoPay mandates and dynamic QR codes.
- **Where It's Evidenced:** `docs/company/competitive-white-space.md`, `docs/company/trend-radar.md`, `docs/research/records/005`.
- **Status:** `validation`
- **Pipeline Stage:** **Validation** (NPCI technical specs researched; Razorpay recurring integration pending).

### 9. FORTREX FX Platform
- **One-Line Pitch:** Algorithmic FX trading dashboard, signal processing backend, and waitlist management platform.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `docs/BACKEND_MAP.md` (Base44 Koda/Arlo apps), `docs/HANDOVER.md`.
- **Status:** `parked`
- **Pipeline Stage:** **Beta** (Deploy branch parked during Safe Browsing cleanup; backend repos intact).

### 10. Bloomwire Flower Platform
- **One-Line Pitch:** Headless e-commerce storefront and order fulfillment platform for floral commerce.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `docs/BACKEND_MAP.md` (Base44 BloomWire app `6a60a3672c56780712cba8d5`), `docs/FREE_TOOLS_STACK.md` Phase 5.
- **Status:** `parked`
- **Pipeline Stage:** **Prototype** (Base44 app intact; storefront parked).

### 11. Paperclip Agent Workforce HQ
- **One-Line Pitch:** Self-hosted agent-company management dashboard for coordinating multi-agent sub-agent workflows.
- **Where It's Evidenced:** `docs/FREE_TOOLS_STACK.md` (Category 7 / Phase 5), `docs/research/tools_automation.md`.
- **Status:** `idea`
- **Pipeline Stage:** **Idea** (Blueprint item for Phase 5 after revenue scale).

### 12. ViewBoost / RepoLaunch Growth Tools
- **One-Line Pitch:** Micro-SaaS tools for GitHub repo launch amplification and developer content engagement.
- **Where It's Evidenced:** `docs/company/opportunity-radar.md`, `docs/HANDOVER.md`.
- **Status:** `parked`
- **Pipeline Stage:** **Idea** (Exploratory repos intact; unvalidated).

---

## Seeded Ideas — Local-Business Micro-SaaS Set (added 26 Sep 2026)

> Source: competitive scan of saasyaari.ai (white-label SaaS reseller, India).
> Demand signal: they bundle these 5 tools and sell white-label access to
> agencies via IG ads. Their model = rent-the-tech-and-resell. Our model =
> build-and-own on Base44, either as OS-family modules or standalone micro-SaaS.
> Decision on which/how comes when picked up from `idea` stage. Per the factory
> law, each needs its own market research record before any engineering.

### 13. Restaurant QR Menu & Ordering
- **One-Line Pitch:** QR digital menus with online ordering and order management for Indian restaurants and takeaways.
- **Why It's on the Radar:** SaaS Yaari's bundle proves agency-facing demand; Indian F&B digitization is broad and shallow-served.
- **Possible Shape:** Standalone vertical play (Restaurant OS) or sell as a productized setup service to F&B clients via the agency arm.
- **Status:** `idea` | **Pipeline Stage:** **Idea** — needs market research (competitors: Petpooja, POSist, DotPez-type QR menu tools) before any build.

### 14. AI Single-Page Website Builder
- **One-Line Pitch:** AI-generated one-page sites for local businesses from our own template system (we already ship 8 client sites).
- **Why It's on the Radar:** We have the deepest existing capability here — template + brand kit + lead capture already built; the AI generation layer is the only new piece.
- **Possible Shape:** Productized "site in 48 hours" offer, or an AI-assist inside the client-site factory.
- **Status:** `idea` | **Pipeline Stage:** **Idea** — research record required (pricing model, AI copy cost, support load).

### 15. Digital V-Card & NFC
- **One-Line Pitch:** Digital visiting cards with link/QR/NFC sharing for Indian professionals and SMBs.
- **Why It's on the Radar:** Low-complexity commodity product with clear one-time/setup revenue; good cheap entry product for the services-cashflow model.
- **Possible Shape:** Micro-SaaS or a ₹X setup SKU sold alongside client sites.
- **Status:** `idea` | **Pipeline Stage:** **Idea** — verify margin and differentiation (extremely crowded commodity space).

### 16. AI Reviews & GMB Automation
- **One-Line Pitch:** Automated review requests, AI replies, and Google Business Profile management for local businesses.
- **Why It's on the Radar:** Directly relevant to our existing verticals (gyms, dentists, builders all need reviews); pairs with the WhatsApp automation engine (idea §5).
- **Possible Shape:** Gym OS / Dentist OS module first, standalone agency service second.
- **Status:** `idea` | **Pipeline Stage:** **Idea** — needs Google Business Profile API + WhatsApp opt-in research (ties to records 001, 008).

### 17. QR Loyalty & Rewards
- **One-Line Pitch:** Digital stamp cards and loyalty rewards for repeat-visit businesses.
- **Why It's on the Radar:** Gym OS already has loyalty_points/loyalty_tier fields in its entity model — this is partially specced inside our flagship; a generalized version could serve salons, cafes, boutiques.
- **Possible Shape:** Gym OS module first (finish what exists), then evaluate standalone.
- **Status:** `idea` | **Pipeline Stage:** **Idea** — research record required.

> Standing note (law): do NOT buy/rent SaaS Yaari's white-label. Owning the code
> is the brand architecture (endorsed hybrid, OS family) and a DPDP necessity
> (processor contracts, Sec 8(2)); renting tech we can build in weeks would add
> an unkillable dependency for commodity features.

### 18. Gym Setup & Equipment Partner Channel
- **One-Line Pitch:** Gym setup companies and equipment manufacturers earn a commission for referring Gym OS to the gyms they build out; Beyond Pixells builds everything digital the gym needs (website, member portal, WhatsApp automation, QR check-in, UPI billing, lead CRM).
- **Why It's on the Radar:** Founder directive 27 Sep 2026 — actively pursuing this channel. Setup companies are present at the exact moment a gym is born (before it needs software), making them a natural distribution partner.
- **Possible Shape:** Commission per closed deal (structure being proposed — see partner one-pager in `content/brochures/`); partner obligations are intros only; we handle demo, build, and support.
- **Status:** `validation` | **Pipeline Stage:** **Validation** (partner one-pager drafted; commission structure proposed pending founder approval; first real partner conversations will validate).
- **Depends On:** Gym OS (§1) — the product being referred.
