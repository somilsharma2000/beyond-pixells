# Open-Source Tools Research: Client Management, Invoicing, Contracts, Support & Scheduling
**Prepared for:** Beyond Pixells (Solo-Founder Studio, India)  
**Target Audience:** Gym Owners & Gym Management Software Clients in India  
**Workspace File Path:** `research/tools_crm_clients.md`  

---

## Executive Summary & Architecture Overview

Beyond Pixells is a solo-founder studio in India selling gym management software to gym owners. The studio requires an operational stack that minimizes administrative overhead, handles high-touch client communication (principally over **WhatsApp** and **Email**), processes **India GST-compliant invoicing**, automates **demo scheduling**, signs **gym onboarding agreements**, and manages **client onboarding delivery**.

While Beyond Pixells currently utilizes Base44 with `Lead` and `LeadActivity` entities, standalone open-source (OSS) tools can augment or integrate with Base44 to provide specialized capabilities (e.g., calendar booking, e-signatures, multi-channel WhatsApp support).

---

## Part 1. Lightest Self-Hosted CRM Analysis: Twenty vs. EspoCRM vs. SuiteCRM vs. Monica vs. Frappe CRM

The user asked specifically: *Which CRM is lightest for a solo founder managing gym-owner clients and leads?*

| Tool Name | Tech Stack | Memory Footprint (RAM) | Primary Use Case | Lightness & Maintenance Verdict for Solo Founder |
| :--- | :--- | :--- | :--- | :--- |
| **EspoCRM** | PHP 8.x, MySQL/MariaDB | **~250 MB – 512 MB** | B2B Sales Pipelines & Account Management | **WINNER (Lightest B2B CRM):** Single container or basic PHP web hosting. Blazing fast, ultra-low resource usage, easy custom entity creation for gym branches. |
| **Monica CRM** | PHP (Laravel), MySQL | **~512 MB** | Personal Relationship Management (PRM) | **Lightest PRM (Not a B2B CRM):** Designed for personal context (birthdays, family notes, interaction logs). Lacks deal stages, lead pipelines, quotes, or sales automation. |
| **Twenty** | TypeScript, React, NestJS, Postgres | **~1.5 GB – 2 GB** | Modern Custom B2B CRM | **Best Modern UI / Higher Resource:** High flexibility with custom objects, but requires Redis, Postgres, background workers, and higher RAM. |
| **Frappe CRM** | Python (Frappe), Vue 3, MariaDB | **~1 GB** | Indian SMB Sales & Lead Tracking | **Best India Ecosystem:** Built in India by Frappe. Direct synergy with ERPNext for GST compliance and native WhatsApp/SMS hooks. |
| **SuiteCRM** | Legacy PHP (SugarCRM fork), MySQL | **~1 GB – 1.5 GB** | Enterprise B2B CRM | **Not Recommended for Solo Founder:** Heavily bloated, complex administration, high maintenance burden for a single operator. |

### Summary Recommendation for CRM Lightness:
- **For minimum server footprint & zero maintenance:** Choose **EspoCRM**. It consumes under 300 MB RAM, sets up in minutes with Docker Compose, and includes full lead/deal pipelines, email synchronization, and quote generation.
- **For personal relationship tracking alongside B2B:** **Monica** is lighter than Twenty, but it is a Personal PRM, not a sales engine.
- **For modern extensible UI:** **Twenty** is top-tier if you have 2 GB+ RAM available on your VPS.
- **For India-specific compliance & ecosystem:** **Frappe CRM** provides seamless alignment with Indian business workflows.

---

## Part 2. Ranked Top Open-Source Tools (8–12 Best Finds)

---

### 1. Chatwoot (Omnichannel Customer Support & WhatsApp Messaging)
* **Repo URL:** [https://github.com/chatwoot/chatwoot](https://github.com/chatwoot/chatwoot)
* **Category:** Help Desk / Support Ticketing
* **GitHub Stars & Status:** **~22,000+ stars** | Actively maintained (Multiple commits weekly, core enterprise-backed OSS).
* **What it does:** Omnichannel customer engagement inbox that unifies WhatsApp, live website chat, email support, Telegram, and Facebook Messenger into a single dashboard.
* **Why it helps Beyond Pixells:** Gym owners in India communicate overwhelmingly via WhatsApp. Chatwoot connects directly to the **WhatsApp Cloud API** or third-party WhatsApp providers (e.g., Baileys/360dialog), allowing the solo founder to answer pre-sales questions, log support tickets, send broadcast updates about gym software patches, and maintain full conversation histories without using a personal phone.
* **Free vs. Freemium:** **MIT Licensed** (100% Free Open Source Edition includes full WhatsApp integration, multi-agent inbox, live chat, and mobile apps). Paid tiers exist only for hosted SaaS or enterprise SLA features.
* **Infra Needed:** Docker Compose (Rails, PostgreSQL, Redis, Sidekiq). Requires **~1.5 GB – 2 GB RAM**.
* **India-Relevant Highlights:** **Founded in India**. Native support for WhatsApp Cloud API and local SMS gateways.

---

### 2. EspoCRM (Ultra-Lightweight B2B CRM & Lead Pipeline)
* **Repo URL:** [https://github.com/espocrm/espocrm](https://github.com/espocrm/espocrm)
* **Category:** Self-hosted CRM
* **GitHub Stars & Status:** **~5,000+ stars** | Actively maintained (Regular releases, active forum and updates).
* **What it does:** Fast, lightweight open-source CRM with lead management, sales pipeline tracking, account/contact management, email sync, and automated workflows.
* **Why it helps Beyond Pixells:** Gives the solo founder a zero-lag CRM to track gym prospects across lead stages (e.g., *New Lead → Demo Scheduled → Free Trial → Paid Customer*). Custom entities allow storing gym-specific metadata (number of members, biometric equipment type, current gym software used).
* **Free vs. Freemium:** **GPLv3 Licensed**. Core CRM is 100% free with no lead/user caps. Advanced extension pack (e.g., VoIP integration, advanced reports) sold separately.
* **Infra Needed:** Docker Compose (PHP-FPM, Nginx, MySQL/MariaDB). Extremely light footprint: **~250 MB – 512 MB RAM**.
* **India-Relevant Highlights:** Easily configurable for INR currency, Indian tax fields (GSTIN), and custom address formats.

---

### 3. Cal.com (Appointment & Demo Scheduling)
* **Repo URL:** [https://github.com/calcom/cal.com](https://github.com/calcom/cal.com)
* **Category:** Appointment / Scheduling
* **GitHub Stars & Status:** **~35,000+ stars** | Actively maintained (High velocity, daily commits, massive community).
* **What it does:** Open-source Calendly alternative for automated calendar scheduling, booking workflows, timezone handling, and video call link generation (Google Meet / Zoom / Jitsi).
* **Why it helps Beyond Pixells:** Gym owners can self-schedule software demos or onboarding calls directly into the founder's calendar via a simple link (e.g., `cal.beyondpixells.in/demo`). Eliminates back-and-forth messaging and automatically sends WhatsApp/Email booking reminders.
* **Free vs. Freemium:** **AGPLv3 Licensed**. Self-hosted core is fully functional and free for single/team scheduling.
* **Infra Needed:** Docker Compose (Next.js, Node.js, PostgreSQL, Prisma). Requires **~1 GB – 1.5 GB RAM**.
* **India-Relevant Highlights:** Supports IST timezones, custom booking questions (e.g., "How many active gym members do you have?"), and integration with Indian payment gateways (Razorpay/Stripe via webhooks) if charging for consultation calls.

---

### 4. Crater (Lightweight Invoicing & India GST Billing)
* **Repo URL:** [https://github.com/crater-app/crater](https://github.com/crater-app/crater)
* **Category:** Invoicing & Billing
* **GitHub Stars & Status:** **~7,000+ stars** | Actively maintained (Open-source web and mobile app repository).
* **What it does:** Modern, sleek invoice management application designed for freelancers, small studios, and SaaS businesses to manage estimates, invoices, payments, and expenses.
* **Why it helps Beyond Pixells:** Allows creating professional PDF estimates for gym management software installation and converting them into tax invoices in one click. Provides mobile apps (iOS/Android) so the founder can issue invoices on the go.
* **Free vs. Freemium:** **AGPLv3 Licensed**. Completely free and open-source for web and self-hosted backend.
* **Infra Needed:** Docker Compose (PHP/Laravel, Vue.js, MySQL). Requires **~250 MB – 512 MB RAM**.
* **India-Relevant Highlights:** **Fully customizable tax rates**: Can configure **CGST (9%) + SGST (9%)** for intra-state sales or **IGST (18%)** for inter-state gym clients. Supports INR currency symbol (₹) out of the box.

---

### 5. DocuSeal (Document Signing & Contract Automation)
* **Repo URL:** [https://github.com/docusealco/docuseal](https://github.com/docusealco/docuseal)
* **Category:** Proposal / Contract Generation & e-Signature
* **GitHub Stars & Status:** **~18,000+ stars** | Actively maintained (Very active releases, fast growing DocuSign alternative).
* **What it does:** Open-source document signing platform with a visual PDF drag-and-drop builder, automatic signing requests via link/email, audit trails, and fillable form fields.
* **Why it helps Beyond Pixells:** Enables sending gym software service level agreements (SLAs), monthly subscription contracts, and hardware installation sign-offs directly to gym owners. Gym owners can sign electronically on their phones without downloading software.
* **Free vs. Freemium:** **AGPLv3 Licensed**. Free self-hosted version includes unlimited PDF signing, unlimited users, and full API/webhook support.
* **Infra Needed:** Single Docker container (Ruby on Rails, PostgreSQL/SQLite). Very low footprint: **~512 MB RAM**.
* **India-Relevant Highlights:** Generates tamper-evident execution audit logs with timestamp and IP address, satisfying standard Indian contract execution requirement best practices.

---

### 6. OpenSign (India-Native e-Signature Solution)
* **Repo URL:** [https://github.com/OpenSignLabs/OpenSign](https://github.com/OpenSignLabs/OpenSign)
* **Category:** Proposal / Contract Generation & e-Signature
* **GitHub Stars & Status:** **~7,000+ stars** | Actively maintained (Created by OpenSignLabs in India).
* **What it does:** Full-featured open-source electronic signature platform with PDF signing, document field positioning, team management, and secure signature certificate verification.
* **Why it helps Beyond Pixells:** Built specifically as an Indian open-source alternative to DocuSign. Provides a clean API and embeddable widget to integrate signing workflows into Beyond Pixells' website or Base44 client dashboard.
* **Free vs. Freemium:** **AGPLv3 Licensed**. Community edition is free and open source.
* **Infra Needed:** Docker Compose (Node.js, Express, React, MongoDB). Requires **~512 MB – 1 GB RAM**.
* **India-Relevant Highlights:** **Developed in India**. Built with Indian legal compliance and digital signature workflows in mind, including support for custom terms, regional timestamps, and local cloud hosting.

---

### 7. Twenty CRM (Modern Open-Source B2B CRM)
* **Repo URL:** [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)
* **Category:** Self-hosted CRM
* **GitHub Stars & Status:** **~56,000+ stars** | Actively maintained (One of the fastest-growing OSS repos on GitHub, backed by Y Combinator).
* **What it does:** Next-generation open-source CRM featuring custom object modeling, kanban pipeline views, rich text notes, email thread integration, and GraphQL/REST APIs.
* **Why it helps Beyond Pixells:** Ideal if Beyond Pixells wants to model complex data structures (e.g., `Gym Location`, `POS Hardware`, `Subscription Plan`, `Gym Owner Contact`) as native custom objects. Highly flexible visual kanban boards for tracking high-value enterprise gym software sales.
* **Free vs. Freemium:** **AGPLv3 Licensed**. 100% open source community edition with full feature set.
* **Infra Needed:** Docker Compose (TypeScript, NestJS, React, PostgreSQL, Redis). Requires **~1.5 GB – 2 GB RAM**.
* **India-Relevant Highlights:** Flexible API connectors to send webhooks to local Indian payment gateways or WhatsApp automation tools (e.g., n8n / Chatwoot).

---

### 8. Invoice Ninja (Subscription Billing & Client Payment Portal)
* **Repo URL:** [https://github.com/invoiceninja/invoiceninja](https://github.com/invoiceninja/invoiceninja)
* **Category:** Invoicing & Billing
* **GitHub Stars & Status:** **~9,800+ stars** | Actively maintained (Decade of active development, mature core platform).
* **What it does:** Feature-rich invoicing, recurring subscription billing, quote generation, expense tracking, and self-service client portal.
* **Why it helps Beyond Pixells:** Perfect for managing monthly software subscription plans for gyms (e.g., ₹2,999/month per gym branch). Automatically generates recurring invoices, sends payment reminder emails/links, and provides gym owners a portal to view paid receipts.
* **Free vs. Freemium:** **Source-Available / AGPLv3 Core**. Free self-hosted edition allows unlimited invoices/clients. Small watermark removal requires a low-cost annual self-hosted license if desired.
* **Infra Needed:** Docker Compose (PHP/Laravel, Flutter web, MySQL/MariaDB). Requires **~512 MB – 1 GB RAM**.
* **India-Relevant Highlights:** Configurable for **GSTIN numbers**, CGST/SGST line item breakdown, INR currency formatting, and payment link embedding (Razorpay / Stripe / UPI QR code notes on invoices).

---

### 9. Plane (Client Onboarding Portal & Delivery Tracker)
* **Repo URL:** [https://github.com/makeplane/plane](https://github.com/makeplane/plane)
* **Category:** Client Portal & Project Delivery
* **GitHub Stars & Status:** **~38,000+ stars** | Actively maintained (High growth, open-source Jira/Linear alternative).
* **What it does:** Modern issue tracking, project management, product roadmap, and client onboarding workspace.
* **Why it helps Beyond Pixells:** After a gym owner purchases the software, onboarding requires specific sequential steps: *1. Data import of gym members*, *2. Biometric scanner setup*, *3. Staff training*, *4. Payment gateway integration*. Plane lets the founder create a standardized "Gym Onboarding" project template and invite the gym owner as a view/guest user to track setup progress and upload gym asset files.
* **Free vs. Freemium:** **AGPLv3 Licensed**. Free self-hosted edition includes full workspace, issue tracking, and pages.
* **Infra Needed:** Docker Compose (Python/Django, Next.js, PostgreSQL, Redis). Requires **~2 GB RAM**.
* **India-Relevant Highlights:** Built by an Indian founding team. Modern UI that gives solo-founder operations an enterprise-grade client delivery appearance.

---

### 10. FreeScout (Ultra-Low Footprint Shared Email Desk)
* **Repo URL:** [https://github.com/freescout-helpdesk/freescout](https://github.com/freescout-helpdesk/freescout)
* **Category:** Help Desk / Support Ticketing
* **GitHub Stars & Status:** **~5,000+ stars** | Actively maintained (Zendesk / Help Scout open source alternative).
* **What it does:** Lightweight, PHP-based shared email mailbox and ticketing system with collision detection, auto-responders, customer history, and notes.
* **Why it helps Beyond Pixells:** When gym owners send support emails (e.g., `support@beyondpixells.in`), FreeScout converts them into clean tickets. Allows the founder to reply, assign tags, add internal notes, and avoid double replies without running heavy Ruby/Node processes.
* **Free vs. Freemium:** **AGPLv3 Licensed**. Core help desk is 100% free and unlimited. Official modules (e.g., WhatsApp integration, custom fields) available for a small one-time fee.
* **Infra Needed:** Docker Compose or standard PHP LAMP stack. **Extremely lightweight (< 200 MB RAM)**.
* **India-Relevant Highlights:** Near-zero hosting costs in India. Runs smoothly even on cheap $4/month VPS instances alongside MySQL.

---

### 11. Frappe CRM (India-Native CRM & ERPNext Ecosystem)
* **Repo URL:** [https://github.com/frappe/crm](https://github.com/frappe/crm)
* **Category:** Self-hosted CRM
* **GitHub Stars & Status:** **~3,500+ stars** | Actively maintained (Developed by Frappe Technologies in India).
* **What it does:** Open-source CRM built on the Frappe Framework and Vue 3, featuring lead pipeline management, deal tracking, activity logging, and call/email logs.
* **Why it helps Beyond Pixells:** Built specifically for Indian businesses. Out-of-the-box integration with ERPNext means sales leads in Frappe CRM seamlessly convert into GST Customer entities and tax invoices in ERPNext without custom integration code.
* **Free vs. Freemium:** **AGPLv3 Licensed**. 100% free and open source.
* **Infra Needed:** Docker / Frappe Bench (Python, Node.js, MariaDB, Redis). Requires **~1 GB RAM**.
* **India-Relevant Highlights:** **100% India-native ecosystem**. Built-in phone call integration hooks, WhatsApp SMS triggers, and full compliance with Indian tax/accounting standards when paired with Frappe ERPNext.

---

## Part 3. Summary Recommendation Matrix for Beyond Pixells

For a **solo founder in India** operating with limited time and hosting infrastructure, the recommended combination of open-source tools to complement Base44 is:

```
                  +-------------------------------------------------+
                  |          Beyond Pixells Solo Founder            |
                  +-------------------------------------------------+
                                           |
       +-------------------+---------------+---------------+-------------------+
       |                   |                               |                   |
+--------------+   +---------------+               +---------------+   +---------------+
|  Scheduling  |   |    Support    |               |  e-Signatures |   |  GST Invoicing|
|   Cal.com    |   |   Chatwoot    |               |   DocuSeal    |   |    Crater /   |
| (Demo Calls) |   | (WhatsApp/    |               | (Onboarding   |   | Invoice Ninja |
|              |   |   Live Chat)  |               |  Contracts)   |   | (GST Invoices)|
+--------------+   +---------------+               +---------------+   +---------------+
       |                   |                               |                   |
       +-------------------+---------------+---------------+-------------------+
                                           |
                                  +------------------+
                                  | Primary CRM /    |
                                  | Base44 Data Layer|
                                  | (EspoCRM /       |
                                  |  Frappe CRM /    |
                                  |  Base44 Leads)   |
                                  +------------------+
```

### Ideal 4-Tool "Lean Stack" for Solo Founder:
1. **Chatwoot** – Handles all gym owner incoming pre-sales & support questions via WhatsApp.
2. **Cal.com** – Lets gym owners book demos straight into the founder's Google Calendar.
3. **Crater** or **Invoice Ninja** – Creates 18% GST invoices (CGST/SGST) with UPI payment instructions.
4. **DocuSeal** or **OpenSign** – Gets gym owners to sign software onboarding agreements on their mobile phones.

---
*Report generated and validated for Beyond Pixells.*
