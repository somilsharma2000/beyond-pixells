## Research Record

### 1. Topic
India Security, Privacy, Tax, and Legal Obligations for SaaS (Gym OS) Collecting Member Data & Accepting UPI Payments

### 2. Blueprint Section (42,43,59,60,97 + which)
Section 42 (Security & Compliance), Section 43 (Privacy & Data Protection), Section 59 (Payment Architecture & Tokenisation), Section 60 (Billing, Tax & GST Invoicing), Section 97 (Messaging & WhatsApp API Integration)

### 3. Subtopics
DPDP Act 2023 / DPDP Rules 2025-2026 enforcement, CERT-In 6-hour cybersecurity breach reporting, RBI payment aggregator rules & Card-on-File (CoF) tokenisation restrictions, NPCI UPI payment integration, PCI-DSS scope reduction, GST 18% rate under SAC 998315 / Rule 46 CBIC invoice compliance, Meta WhatsApp Business API opt-in consent management.

### 4. Research Classification (A/B/C/D/E)
Class A (Regulatory / Legal Compliance & Architecture Foundation)

### 5. Research Question
What are the mandatory legal, privacy, security, payment, and tax compliance requirements for Beyond Pixells' Gym OS SaaS platform operating in India as of September 2026, specifically regarding member personal data collection, UPI payment processing, GST invoicing, and WhatsApp messaging?

### 6. Why This Matters
Non-compliance with DPDP Act 2023 carries statutory financial penalties up to ₹250 Crore per violation; violating RBI payment tokenisation directives leads to payment gateway termination and RBI regulatory enforcement; improper GST collection or invoicing violates CGST Act Sec 122 resulting in tax penalties; sending non-compliant WhatsApp messages violates Meta policies leading to API suspension and DPDPA consent violation liability.

### 7. Date Researched
2026-09-26

### 8. Current-Market Context
As of September 2026, MeitY's Digital Personal Data Protection (DPDP) Rules 2025 are actively enforced across Indian commercial entities, establishing strict requirements for explicit consent notices, breach notifications, and Data Principal rights. In parallel, RBI's Card-on-File (CoF) tokenisation mandate strictly prohibits merchants from storing raw card data, and CERT-In mandates a 6-hour incident reporting window. In the Indian fitness SaaS sector, automated GST invoicing (18% GST under SAC 998315) and DPDP-compliant WhatsApp automation are essential operational requirements for studio owners.

### 9. Primary Sources (with URLs)
- Ministry of Electronics and Information Technology (MeitY) — Digital Personal Data Protection Act, 2023 & DPDP Rules 2025 Notification: https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2190655
- Reserve Bank of India (RBI) — Circular on Restriction on Storage of Actual Card Data & Payment Aggregator Guidelines: https://m.rbi.org.in/scripts/NotificationUser.aspx/NotificationUser.aspx?Id=13615
- Central Board of Indirect Taxes and Customs (CBIC) — GST Rate Schedule & Rule 46 Tax Invoice Mandates: https://www.cbic.gov.in
- Indian Computer Emergency Response Team (CERT-In) — Cyber Security Directions 2022 (Mandatory 6-Hour Incident Reporting & 180-Day Log Retention): https://www.cert-in.org.in
- National Payments Corporation of India (NPCI) — UPI Merchant Procedural Guidelines & UPI Autopay Mandates: https://www.npci.org.in

### 10. Secondary Sources (with URLs)
- EY India Tax & Regulatory Alert — DPDP Rules Architecture & Enforcement Framework: https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/alerts-hub/2025/11/digital-data-protection-act-rules-notified-by-meity.pdf
- Legal500 Analysis — DPDP Data Breach Notification Timelines & Obligations in India: https://www.legal500.com/intelligence/india/privacy/dpdp-data-breach-notification-in-india-timelines-requirements-and-key-compliance-considerations
- Scrut Automation — InfoSec & RBI Compliance for Fintech and SaaS in India: https://www.scrut.io/post/role-of-information-security-in-the-changing-indian-fintech-landscape
- PhonePe Business — Card Tokenisation & RBI Rules Complete Regulatory Guide: https://business.phonepe.com/articles/what-is-tokenisation-in-payments-a-complete-guide-with-rbi-rules

### 11. Customer/User Evidence
Indian gym owners require automated membership renewals, instant UPI payment collection, and valid B2B GST tax invoices to claim Input Tax Credit (ITC). Gym members demand transparency regarding personal fitness/health data and express strong resistance to unsolicited promotional spam on WhatsApp.

### 12. Competitor Evidence
Legacy gym management software in India frequently suffers from non-compliance (storing raw payment details, lacking audit logs, emitting non-compliant bill receipts without SAC codes). Leading modern platforms (e.g., Zoho ecosystem, Razorpay integration partners) maintain strict PCI-DSS SAQ A isolation by using payment aggregator iFrames/SDKs and enforcing double opt-in consent for WhatsApp messaging.

### 13. Current Best Practices
- **DPDP Consent**: Present itemized, plain-language consent notices before collecting member PII, offering multi-lingual accessibility (Schedule 8 languages).
- **Payment Processing**: Outsource all card and payment handling to RBI-licensed Payment Aggregators (Razorpay, Cashfree, PhonePe) via PCI-DSS Level 1 compliant iFrames/SDKs; store zero card PAN or CVV data.
- **Security & Logging**: Maintain NTP-synchronized immutable system logs for 180 days (CERT-In mandate) and establish a 6-hour incident escalation path.
- **GST Invoicing**: Automatically apply 18% GST tagged with SAC 998315, generating CGST Rules 46 compliant invoices with B2B GSTIN validation.
- **WhatsApp Messaging**: Require explicit, recorded user opt-in before sending business-initiated messages, including an easy 'STOP' opt-out command.

### 14. Emerging Developments
MeitY is accelerating enforcement frameworks for Significant Data Fiduciaries (SDFs) and standardizing DPDP Board digital reporting workflows. RBI is refining additional factor authentication (AFA) rules for UPI Autopay recurring subscription debits.

### 15. Future Watch
Upcoming launch of the MeitY Data Protection Board online adjudication portal; potential expansion of mandatory CBIC e-invoicing (IRN generation) to lower revenue brackets for small and mid-sized SaaS platforms.

### 16. Key Findings
- **DPDP Act 2023 Compliance**: Beyond Pixells and client gyms act as Data Fiduciaries/Processors. Plain-language, itemized notice is mandatory before collecting personal data (name, phone, email, health/fitness goals). Breach intimation must be reported to the DP Board and affected members without delay, while technical security breaches must be reported to CERT-In within 6 hours.
- **UPI & RBI Payment Tokenisation**: RBI strictly prohibits SaaS applications and merchants from storing raw credit/debit card data (PAN, CVV, Expiry). Only card networks/issuing banks may tokenise. Gym OS can store UPI VPAs and payment status/transaction IDs, but must process payments through RBI-authorized Payment Aggregators to minimize PCI-DSS scope to SAQ A. UPI Autopay requires 24-hour pre-debit notifications under RBI mandates.
- **GST Rate & SAC Coding**: SaaS subscription fees attract 18% GST (9% CGST + 9% SGST for intra-state sales; 18% IGST for inter-state sales) under SAC 998315 ("Hosting and IT infrastructure provisioning services / Software as a Service"). Invoices must contain all Rule 46 CGST mandatory fields.
- **WhatsApp Business Consent**: Sending automated WhatsApp messages (reminders, payment links, fitness alerts) requires prior explicit opt-in consent per Meta Business Policy and DPDP Act Sec 4 & 6. Unsolicited messaging risks account suspension and DPDP regulatory fines.

### 17. Conflicting Evidence
None on fundamental legal requirements. Secondary sources note minor variations regarding recommended internal SLA response windows for DP Board notification (e.g., 48-72 hours vs immediate), but CERT-In's statutory 6-hour cybersecurity reporting directive is strictly enforced across all IT infrastructure.

### 18. Uncertainty
Potential future MeitY guidelines regarding small SaaS exemptions for appointing formal Data Protection Officers (DPOs) remain subject to finalized administrative orders.

### 19. Product Implications
Gym OS must feature a built-in Consent & Privacy Center, an automated GST-compliant invoicing module (SAC 998315), and native integration with RBI-authorized Payment Aggregators supporting UPI Intent & UPI Autopay.

### 20. UX Implications
Member sign-up and onboarding flows must feature an explicit, un-checked consent checkbox linked to Privacy Policy details, a dedicated WhatsApp communication opt-in toggle, and a billing profile section for gym owners to enter GSTIN details for B2B invoices.

### 21. Engineering Implications
Data schemas must strictly exclude raw credit card PAN/CVV fields. Member PII must be encrypted at rest (AES-256) and in transit (TLS 1.3). Application logs must be retained for 180 days with NTP time synchronization to satisfy CERT-In requirements. Payment webhooks must process UPI transaction states asynchronously.

### 22. AI Implications
AI features (such as fitness recommendation models or member retention forecasting) must process anonymized or pseudonymized data only, strictly adhering to DPDP purpose limitation constraints. Explicit consent must be obtained if AI features process member health/fitness attributes.

### 23. Automation Implications
Automate 24-hour pre-debit notifications for UPI Autopay recurring memberships; automate GST invoice generation upon payment gateway webhook confirmation; automate log archiving pipelines to satisfy 180-day retention rules.

### 24. Security Implications
Implement Role-Based Access Control (RBAC), end-to-end TLS 1.3 encryption, automated vulnerability scanning, and an Incident Response Plan capable of detecting and reporting security incidents within CERT-In's mandatory 6-hour window.

### 25. Privacy Implications
Adhere to data minimisation principles (collecting only necessary member details), support Data Principal rights (access, correction, erasure/"right to be forgotten"), and publish accessible privacy notices in clear language.

### 26. Legal/Compliance Implications
Draft Terms of Service, Privacy Policy, and Data Processing Agreements (DPA) tailored for Indian law; ensure full compliance with DPDP Act 2023, Information Technology Act 2000 (Sec 43A), RBI Payment Aggregator Guidelines, and CGST Act 2017.

### 27. Cost Implications
Operational costs include Payment Aggregator processing fees (typically 1.5%–2% for cards, nominal/tiered for UPI), Meta WhatsApp API conversation charges, and cloud storage overhead for secure 180-day log retention.

### 28. Scalability Implications
Utilizing third-party RBI-authorized Payment Aggregators and platform native infrastructure isolates Gym OS from payment compliance overhead, permitting seamless scaling across thousands of Indian gym locations.

### 29. Metrics/KPIs
- 100% consent capture rate on all new member registrations.
- 0 raw payment card data storage incidents.
- 100% GST invoice calculation and emission compliance.
- < 6-hour response capability for CERT-In incident reporting.
- < 0.1% WhatsApp message opt-out or abuse complaint rate.

### 30. Options Considered
- **Option A**: Direct credit/debit card handling and raw payment storage (REJECTED — illegal under RBI tokenisation directives, prohibitive PCI-DSS Level 1 compliance cost).
- **Option B**: Manual billing and cash-only tracking without structured consent management (REJECTED — non-scalable, high GST violation risk, vulnerable to DPDP penalties).
- **Option C**: Integrated RBI-authorized Payment Aggregator (Razorpay/Cashfree/PhonePe) + DPDP-compliant consent module + Automated GST (SAC 998315) invoicing + WhatsApp API with explicit opt-in (RECOMMENDED).

### 31. Decision
AWAITING IMPLEMENTATION

### 32. Why This Decision
This is a research record; technical and product implementation decisions will be finalized following lead architect and legal counsel review. Option C represents the only compliant, secure, and scalable architecture under Indian law as of September 2026.

### 33. Tradeoffs
Delegating payment processing to third-party aggregators incurs a modest transaction fee (1.5%–2%) but eliminates significant PCI-DSS compliance costs and legal liability. Enforcing explicit WhatsApp opt-in adds a minor step during onboarding but prevents Meta API suspensions and DPDPA fines.

### 34. Risks
- Statutory fines up to ₹250 Crore under DPDP Act 2023 for failure to report data breaches or processing data without valid consent.
- Payment gateway suspension or RBI enforcement for storing card PAN/CVV data.
- Meta WhatsApp API account suspension for sending unsolicited promotional messages.

### 35. Open Questions
- Will MeitY issue specific threshold relaxations for early-stage SaaS startups regarding formal DPO appointments?
- Will CBIC lower mandatory e-invoicing thresholds below ₹5 Crore turnover in upcoming fiscal notifications?

### 36. Implementation Requirements
- **Data Model**: Include `consent_given` (boolean), `consent_timestamp` (datetime), `whatsapp_opt_in` (boolean), and `gstin` (string) in member and gym entity schemas. Prohibit card PAN/CVV attributes.
- **Payment Gateway**: Integrate RBI-authorized Payment Aggregator SDK/iFrame for UPI Intent and UPI Autopay recurring mandates.
- **Tax Engine**: Implement automated 18% GST calculation (9% CGST + 9% SGST or 18% IGST) tagged with SAC 998315.
- **Consent UI**: Add an un-checked explicit consent checkbox and Privacy Policy link to member onboarding flows.

### 37. Test Requirements
- Unit and integration tests for UPI payment webhook callback processing.
- Automated static code analysis and database audit to verify zero raw card data storage.
- Invoice calculation test suite verifying 18% GST and SAC 998315 formatting against CGST Rule 46.
- WhatsApp message dispatcher test confirming non-sending to opted-out members.

### 38. Verification Requirements
- Perform external Vulnerability Assessment and Penetration Testing (VAPT).
- Audit log retention configuration verification (NTP time synchronization and 180-day storage lifecycle).
- Data Privacy Impact Assessment (DPIA) review against DPDP Act 2023 requirements.

### 39. Recheck #1
DONE 2026-09-26 (lead agent) — see Recheck block at end of file

### 40. Recheck #2
DONE 2026-09-26 (Pass B recheck worker)

### 41. Last Verified
2026-09-26

### 42. Next Review Date
2026-10-10

### 43. Research Owner
Lead agent via research worker

## Recheck #1 — lead agent, 2026-09-26
PASSED (format + evidence spot-check). 43 fields present; 9 source URLs (MeitY/DPDP, RBI/NPCI/official GST sources verified as primary-type).
CONFLICT FLAGGED: this record classifies SaaS GST under SAC 998315; record 005 found SAC 997331/998314. SAC classification for SaaS is genuinely contested across sources. Resolution: CA review required before any invoice is issued — FOUNDER ACTION (counsel review, gap #2).
Note: CERT-In 6-hour breach reporting and DPDP duties captured correctly. This record RESEARCHED; implementation (consent flows, retention policy) NOT started.


## Pass B Recheck (2026-09-26)

### 1. Verified DPDP Act & Rules 2026 Legal Status
- **DPDP Rules Notification**: The Digital Personal Data Protection Rules, 2025 were officially notified in the Gazette of India on 13 November 2025 (G.S.R. 843(E) / G.S.R. 846(E)). As of September 2026, the operational rules are actively enforced across Indian commercial entities.
- **Phased Enforcement & Deadlines**: Core operational obligations (itemized consent notices, Data Fiduciary-Processor contracts under Sec 8(2), and personal data breach intimations under Rule 7) are active in 2026. Registration for the Consent Manager framework (Rule 4) opens on 13 November 2026, with full compliance phased through May 2027.
- **Data Protection Board (DPBI)**: The Data Protection Board of India is functional and handling digital breach complaints and adjudication workflows.
- **Sources**: Gazette of India Notification G.S.R. 843(E) / G.S.R. 846(E) (Nov 13, 2025); MeitY Press Information Bureau Releases; EY / Legal500 Compliance Framework Analyses (2025-2026).

### 2. Pass B Edge-Case Findings for Gym OS SaaS
- **Client Gyms as Data Fiduciaries vs Beyond Pixells as Processor (DPDP Act Sec 8(2))**: Client gyms determine the purpose and means of processing member personal data (making them **Data Fiduciaries**). Beyond Pixells processes data on behalf of client gyms (making it a **Data Processor**). Under Sec 8(2), a mandatory written Data Processing Agreement (DPA) must govern this processing. Statutory fine exposure under the DPDP Act rests directly on the Data Fiduciary, but the DPA must enforce security safeguards, incident reporting, and data deletion duties on Beyond Pixells.
- **Dual Breach Notification Obligations**:
  - *CERT-In (Cybersecurity)*: Mandatory **6-hour** reporting window from time of detection for system logs / IT infrastructure incidents (CERT-In Directions 2022).
  - *DPDP Act / DPDP Rules 2025 (Rule 7)*: Data Processor (Beyond Pixells) must notify the Data Fiduciary (Gym) immediately upon detecting a personal data breach. The Data Fiduciary must intimate the DPBI and affected Data Principals (gym members) within **72 hours** detailing breach nature, impact, and mitigation steps.
- **Data Retention for Ex-Members & Statutory Tax Overrides (Sec 8(7) vs CGST Act Sec 36)**:
  - *DPDP Sec 8(7)* mandates data erasure when a member exits / withdraws consent or purpose ceases, *except* where retention is required by applicable law.
  - *CGST Act 2017 Sec 36* mandates retention of tax invoices, accounting records, and payment logs for **72 months (6 years)** from due date of annual return.
  - *Resolution*: Gym OS must immediately purge or anonymize ex-member health/fitness metrics (BCA, body fat, attendance logs), while isolating financial transaction and GST invoice records into encrypted cold storage retained for 72 months strictly for tax compliance audit.
- **Health-Adjacent Personal Data Handling**:
  - *Unified Standard*: DPDP Act 2023 does *not* create a separate statutory sub-category for "sensitive personal data" or health data (unlike GDPR or legacy SPDI Rules 2011). All digital personal data is governed under one uniform standard.
  - *Purpose Limitation*: Processing member body metrics (Bioelectrical Impedance Analysis / BCA, body fat %, weight, health conditions) requires explicit, itemized purpose-specific consent notices under Sec 6. Processing health data outside disclosed purposes violates DPDP Sec 6.
- **WhatsApp Marketing & TRAI DLT 2026 Status**:
  - *DPDP Consent*: Automated marketing/promotional WhatsApp messages require explicit, affirmative prior opt-in with timestamped audit logs (DPDP Sec 4 & 6).
  - *TRAI DLT Framework*: Messages must utilize registered headers and DLT-approved templates under TRAI regulations. An automated 'STOP' opt-out handler must immediately update consent records and suppression lists across SaaS and WhatsApp API webhooks.

### 3. Unverified Items
- **Early-Stage SME DPO Exemption**: UNVERIFIED. Specific statutory threshold exemptions for early-stage SaaS startups regarding formal Data Protection Officer (DPO) appointment or DPIA requirements remain pending further administrative notifications.
- **CBIC E-Invoicing Threshold Lowering**: UNVERIFIED. Proposed CBIC lowering of mandatory e-invoicing (IRN) thresholds below ₹5 Crore turnover remains unconfirmed for FY2026-27.

### 4. What the Founder Must Ask the Lawyer (Max 6 Items)
1. **DPA Architecture & Penalty Indemnity**: How should the DPA between client gyms (Data Fiduciaries) and Beyond Pixells (Data Processor) be structured to enforce DPDP Sec 8(2) compliance while capping Beyond Pixells' contractual liability and indemnifying against gym-originated consent failures?
2. **Data Retention vs Tax Override Protocol**: Does our proposed retention policy—purging ex-member BCA/health metrics immediately while locking GST invoices in cold storage for 72 months—fully satisfy both DPDP Act Sec 8(7) and CGST Act Sec 36?
3. **GST SAC Classification Resolution**: Should Gym OS subscription revenue be invoiced under SAC 998315 ("Hosting and IT infrastructure provisioning / SaaS") or SAC 998314 / 997331 (resolving the conflict between Record 001 and Record 005)?
4. **WhatsApp & Consent Audit Evidence**: Does an un-checked consent toggle on member onboarding combined with timestamped DB logging satisfy both DPDP Sec 6 consent standards and TRAI / Meta Business API opt-in rules in an audit?
5. **AI Code IP Assignment & Defense**: What specific human-in-the-loop review clauses must be included in MSA/SOW contracts to ensure Beyond Pixells' AI-assisted code deliverables retain full copyright protection under Indian Copyright Act 1957 (Sec 2(d)(vi)) and international standards?
6. **Breach Notification Escalation Protocol**: What exact timeline and notification template should Beyond Pixells execute to alert client gyms of a security incident without triggering premature false alarm liabilities or violating DPDP Rule 7 / CERT-In 6-hour windows?
