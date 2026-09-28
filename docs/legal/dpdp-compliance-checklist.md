# Beyond Pixells — Gym OS: DPDP Act 2023 & Rules Compliance Checklist

> **LEGAL NOTICE & DISCLAIMER**: This checklist is an operational legal compliance reference prepared for **Beyond Pixells** for the commercial operation of **Gym OS SaaS**. It synthesizes statutory mandates under the Digital Personal Data Protection (DPDP) Act, 2023, the DPDP Rules (notified 13 November 2025), CERT-In Cyber Security Directions (2022), RBI Payment Guidelines, and CBIC GST Regulations. Final contract execution and tax filing configurations require formal sign-off from qualified legal counsel and a Chartered Accountant (`needs CA/legal confirmation`).

---

## 1. Executive Summary & Legal Architecture

In the operation of **Gym OS**, Beyond Pixells handles personal data in two distinct capacities:
1. **Data Fiduciary (Sec 2(i))**: For direct website visitors, leads, and B2B gym client account details (owner contact, billing information, GSTIN).
2. **Data Processor (Sec 2(k))**: For gym member personal data (names, phone numbers, attendance logs, payment records, workout profiles) collected and managed by client gyms on the Gym OS platform. The client gym acts as the **Data Fiduciary**.

Under **Section 8(2) of the DPDP Act 2023**, a Data Fiduciary may engage a Data Processor only under a **valid, written contract (Data Processing Agreement / DPA)**.

```
+---------------------------------------------------------------------------------+
|                       DPDP Act 2023 Role Architecture                           |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  [ Gym Member / Individual ] -------- (Data Principal - Sec 2(j))               |
|             |                                                                   |
|             v (Enrolls & Provides Consent - Sec 6)                              |
|  [ Client Gym / Fitness Club ] ------ (Data Fiduciary - Sec 2(i))               |
|             |                                                                   |
|             v (Engages via Written Contract / DPA - Sec 8(2))                   |
|  [ Beyond Pixells / Gym OS ] -------- (Data Processor - Sec 2(k))                |
|                                       *Also Data Fiduciary for Gym Owner Data   |
+---------------------------------------------------------------------------------+
```

---

## 2. Regulatory Timeline & Key Milestones

| Milestone / Event | Effective Date / Statutory Timeline | Operational Context for Beyond Pixells |
| :--- | :--- | :--- |
| **DPDP Act Assent** | 11 August 2023 | Statutory framework enacted by Parliament. |
| **DPDP Rules Notification** | **13 November 2025** (G.S.R. 843(E) / 846(E)) | Operating procedures, breach notification flows, and Data Processor obligations notified by MeitY. Active in 2026. |
| **Written DPA Mandate (Sec 8(2))** | Active / Enforced (2026) | Every onboarded gym tenant must execute a written DPA before member data ingestion. |
| **Consent Manager Framework Registration** | **13 November 2026** (Rule 4) | MeitY portal opens for registration of interoperable Consent Managers. |
| **Full Implementation Phase** | May 2027 | Complete operational compliance across all Data Principal rights and Consent Manager integration. |

---

## 3. Primary & Secondary Research Sources

### Primary Sources (with URLs)
- **MeitY** — Digital Personal Data Protection Act, 2023 & DPDP Rules Notification (13 Nov 2025): [https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2190655](https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2190655)
- **CERT-In** — Cyber Security Directions 2022 (Mandatory 6-Hour Incident Reporting & 180-Day Log Retention): [https://www.cert-in.org.in](https://www.cert-in.org.in)
- **RBI** — Master Direction on Payment Aggregators & Card-on-File Tokenisation: [https://m.rbi.org.in/scripts/NotificationUser.aspx/NotificationUser.aspx?Id=13615](https://m.rbi.org.in/scripts/NotificationUser.aspx/NotificationUser.aspx?Id=13615)
- **CBIC** — CGST Rules 2017, Rule 46 Tax Invoice Mandates: [https://www.cbic.gov.in](https://www.cbic.gov.in)
- **NPCI** — UPI AutoPay Procedural Guidelines & E-Mandate Framework: [https://www.npci.org.in/product/autopay](https://www.npci.org.in/product/autopay)

### Secondary Sources (with URLs)
- **EY India Tax & Regulatory Alert** — DPDP Rules Architecture & Enforcement Framework: [https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/alerts-hub/2025/11/digital-data-protection-act-rules-notified-by-meity.pdf](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/alerts-hub/2025/11/digital-data-protection-act-rules-notified-by-meity.pdf)
- **Legal500 Analysis** — DPDP Data Breach Notification Timelines & Obligations in India: [https://www.legal500.com/intelligence/india/privacy/dpdp-data-breach-notification-in-india-timelines-requirements-and-key-compliance-considerations](https://www.legal500.com/intelligence/india/privacy/dpdp-data-breach-notification-in-india-timelines-requirements-and-key-compliance-considerations)
- **ClearTax India** — HSN/SAC Code Classification for SaaS & IT Services: [https://cleartax.in/s/gst-invoice-rules](https://cleartax.in/s/gst-invoice-rules)

---

## 4. Operational DPDP Compliance Checklist for Data Processor Role

### Category A: Section 8(2) Written Data Processing Agreement (DPA) Requirements
To fulfill Section 8(2), Beyond Pixells must ensure that every client gym signs a written DPA before gaining production access to Gym OS.

- [ ] **A.1 Documented Processing Instructions**: The DPA must restrict Beyond Pixells from processing member data for any purpose other than providing Gym OS SaaS services as instructed by the gym.
- [ ] **A.2 Security Safeguards Standard**: Explicit commitment to maintain technical and organizational safeguards (TLS 1.3 in transit, AES-256 at rest, RLS database separation).
- [ ] **A.3 Sub-Processor Approval Protocol**: Prior written authorization mechanism for engaging sub-processors (cloud hosts, WhatsApp BSPs, payment aggregators).
- [ ] **A.4 Data Breach Immediate Notification**: Statutory duty for Beyond Pixells to notify the gym immediately upon discovering a personal data breach.
- [ ] **A.5 Assistance with Data Principal Rights**: Technical capability to help gyms respond to member requests for access, correction, or erasure (DPDP Sec 11–14).
- [ ] **A.6 Return & Deletion Obligations**: Mandate to securely export and permanently purge gym member data within 30 days of contract termination.
- [ ] **A.7 Audit & Compliance Verification**: Right of client gym to request annual compliance certificates or summary security audit reports (`needs CA/legal confirmation`).

---

### Category B: Notice & Consent Obligations (Lead Capture & Onboarding)
Under DPDP Sections 5 & 6, consent must be free, specific, informed, unconditional, and unambiguous with clear notice.

- [ ] **B.1 Website Lead Capture (`captureWebsiteLead` Endpoint)**:
  - **Implementation Status**: Production code implemented in `gym-os-app/src/domains/ops/website-lead.ts`.
  - **Consent Enforcement**: Endpoint rejects submissions where `body.consent !== true` with message `"Consent is required to contact you (DPDP)"`.
  - **Honeypot Protection**: Hidden `company` field silently drops bot traffic without leaking endpoint presence.
  - **Rate Limiting & Deduplication**: Phone-number based deduplication prevents spam or duplicate lead records.
  - **Immutable Consent Proof**: Stored in DB notes as `Consent: yes (DPDP Sec 6, purpose: contact about Gym OS demo)`.
- [ ] **B.2 Gym Member Onboarding Notice (Sec 5)**:
  - Itemized notice displayed to members upon joining a gym via Gym OS link/app.
  - Itemizes categories collected (Name, Mobile, Attendance, Subscription, Emergency Contact) and specific purpose.
  - Supports plain English and clear option for Schedule 8 languages.
- [ ] **B.3 WhatsApp Communication Opt-in**:
  - Separate, explicit opt-in checkbox for receiving automated renewal reminders and check-in alerts on WhatsApp (Meta Business Policy + DPDP Sec 4/6).
- [ ] **B.4 Ease of Consent Withdrawal (Sec 6(4))**:
  - Gym OS member portal must provide a 1-click `"Revoke Consent"` or `"Manage Data"` option.
- [ ] **B.5 Protection of Minor Data (Sec 9)**:
  - If a gym enrolls members under 18 years, Gym OS must enforce verifiable parental consent (OTP verification to parent/guardian mobile number) and disable tracking/profiling for minor accounts (`needs CA/legal confirmation`).

---

### Category C: Dual Incident & Data Breach Reporting Flow

Indian law mandates a dual-track breach notification architecture depending on the nature of the event:

```
+---------------------------------------------------------------------------------+
|                        Dual Incident & Breach Reporting Flow                    |
+---------------------------------------------------------------------------------+
|                                                                                 |
|                        [ Security Incident / Cyber Event ]                      |
|                                       |                                         |
|                   +-------------------+-------------------+                     |
|                   |                                       |                     |
|                   v                                       v                     |
|    [ Technical IT Security Event ]         [ Personal Data Breach Detected ]    |
|   (Unauthorised access, DDoS, server)      (Leaked PII, compromised DB)         |
|                   |                                       |                     |
|                   v                                       v                     |
|       CERT-In Notification                    Data Processor (Beyond Pixells)   |
|     (Mandatory within 6 Hours)               Notifies Data Fiduciary (Gym)      |
|    (CERT-In Directions 2022)                     (IMMEDIATELY)                      |
|                                                           |                     |
|                                                           v                     |
|                                               Data Fiduciary (Gym) Intimates    |
|                                             DPBI + Affected Data Principals     |
|                                              (Without Delay / <72 Hours)        |
+---------------------------------------------------------------------------------+
```

- [ ] **C.1 Technical Incident Reporting (CERT-In Mandate)**:
  - **Authority**: Indian Computer Emergency Response Team (CERT-In).
  - **Timeline**: **Within 6 hours** of detection for IT security incidents, server intrusions, system breaches, or ransomware attacks.
  - **Log Retention**: System and firewall logs maintained for **180 days** with NTP time synchronization.
- [ ] **C.2 Personal Data Breach Reporting (DPDP Act Sec 8(6) & Rule 7)**:
  - **Processor Obligation**: Beyond Pixells notifies client gym **immediately** upon discovering compromised member PII.
  - **Fiduciary Obligation**: Client gym intimates the **Data Protection Board of India (DPBI)** and affected gym members without delay (recommended SLA <72 hours).
  - **Notice Content**: Nature of breach, volume of records affected, potential impact, immediate mitigation measures taken, and Grievance Officer details.

---

### Category D: Data Localization & Hosting Infrastructure

- [ ] **D.1 Primary Data Localization**:
  - Primary production databases, backups, and cloud application servers hosted within Indian geographical boundaries (e.g., AWS `ap-south-1` Mumbai region or MeitY-empanelled cloud infrastructure).
- [ ] **D.2 Cross-Border Transfer Compliance (Sec 16)**:
  - Cross-border transfers permitted only to jurisdictions not blacklisted by the Central Government. Foreign sub-processors (e.g., US AI services) must process anonymized/pseudonymized data or operate under strict contractual safeguards (`needs CA/legal confirmation`).

---

### Category E: Data Retention, Archiving & Purging

- [ ] **E.1 Statutory Retention Rules**:
  - **Tax & GST Records**: Financial transaction logs, GST invoices, and payment tokens retained for **7 years** under CGST Act Rule 46.
  - **System Access Logs**: Retained for **180 days** under CERT-In Directions 2022.
- [ ] **E.2 Data Erasure Workflows (Sec 8(7))**:
  - Upon member consent revocation or 30 days post gym subscription termination, member personal data soft-deleted, queued, and permanently purged via automated background cleanup cron jobs.

---

### Category F: Grievance Redressal Mechanism

- [ ] **F.1 Grievance Officer Appointment (Sec 8(9) & Sec 13)**:
  - Beyond Pixells must publish designated Grievance Officer details on website footers and within the Gym OS dashboard.
- [ ] **F.2 Statutory Service Level Agreement (SLA)**:
  - Acknowledge incoming data privacy complaints within **24–48 hours**.
  - Resolve and issue final response within **15 business days**.
  - **Placeholder**: `[GRIEVANCE_OFFICER_NAME]`, Email: `privacy@beyondpixells.com`, Address: `[OFFICE_ADDRESS]` (`needs founder confirmation`).

---

### Category G: Subcontractor (Sub-Processor) Disclosure Framework

Under DPDP Section 8(2), engagement of sub-processors requires authorization from the Data Fiduciary. Beyond Pixells maintains the following sub-processor matrix:

| Sub-Processor | Role / Function | Data Transferred | Location |
| :--- | :--- | :--- | :--- |
| **AWS / Base44 Cloud** | Hosting, database, storage | Encrypted Member PII, Tenant DB | India (`ap-south-1`) |
| **Meta WhatsApp Business API / BSP** | Automated messaging & reminders | Mobile Number, First Name, Renewal Alert | India / Global |
| **Razorpay / Cashfree / PhonePe** | UPI AutoPay & Payment Gateway | Amount, VPA, Phone Number, Invoice ID | India |
| **Sentry / PostHog (Self-hosted/Cloud)**| Error tracking & system analytics | Anonymized technical logs, browser user-agent | India / Global |

---

## 5. Implementation Verification in Existing Codebase

1. **Website Lead Endpoint (`captureWebsiteLead`)**:
   - Located at `gym-os-app/src/domains/ops/website-lead.ts`.
   - Enforces DPDP Sec 6 consent check (`body.consent === true`).
   - Implements honeypot spam protection (`company` field check).
   - Includes rate-limiting via phone deduplication in tenant inbox (`Beyond Pixells HQ`).
2. **Tenant Data Isolation**:
   - Multi-tenant architecture enforced via database-level `tenant_id` scopes and RLS policies (`002-multi-tenant-architecture.md`).
3. **Security & Trust Section**:
   - B2B customer onboarding materials cite written DPA availability and DPDP Act Sec 8(2) compliance.

---

## 6. GST Invoicing & SAC Code Alignment (`needs CA/legal confirmation`)

Research records reveal minor SAC classification variations across literature for cloud software:
- **SAC 998439**: *Other on-line content services n.e.c. / OIDAR services* (Standard for cloud SaaS subscriptions).
- **SAC 997331**: *Licensing services for the right to use computer software*.
- **SAC 998314**: *Information technology design and development services* (Applicable for one-time onboarding/setup fees).
- **SAC 998315**: *Hosting and IT infrastructure provisioning services*.

### Recommended Tax Strategy (`needs CA/legal confirmation`):
1. **One-Time Onboarding / Setup Fee** (e.g., ₹20,000): Invoiced under **SAC 998314** at **18% GST**.
2. **Recurring Subscription** (e.g., ₹4,000/mo): Invoiced under **SAC 998439** or **SAC 997331** at **18% GST**.
3. **CGST/SGST vs IGST**: Intra-state supplies billed as 9% CGST + 9% SGST; Inter-state supplies billed as 18% IGST. Rule 46 requires displaying 16 mandatory fields on all B2B invoices.

---

## 7. Open Questions & Founder Action Items

1. **Grievance Officer Details**: Confirm legal name, contact email (`privacy@beyondpixells.com`), and physical registered office address.
2. **Entity Legal Name**: Confirm formal registered entity name (e.g., `Beyond Pixells Private Limited` vs Sole Proprietorship) for legal contracts.
3. **Sub-Processor Vendor Finalization**: Confirm specific WhatsApp Business Solution Provider (Meta Direct API vs Gupshup/Interakt) for Schedule 1 of the DPA.
4. **CA Tax Review**: Obtain formal CA sign-off on SAC code selection (SAC 998439 vs 997331 vs 998314) and GSTR-1 automated filing setup.
