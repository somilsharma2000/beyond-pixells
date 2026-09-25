# Beyond Pixells — Gym OS: Legal & Business Setup Checklist

> **IMPORTANT DISCLAIMER**: This document is a practical operational checklist and business reference guide prepared for **Beyond Pixells** for the commercial deployment of **Gym OS**. It does not constitute formal legal or tax advice. Laws such as the Digital Personal Data Protection Act (DPDP Act) 2023 and Goods and Services Tax (GST) regulations are subject to ongoing notification of rules, notifications, and judicial interpretations. **Always confirm final legal contracts and tax structures with a qualified Chartered Accountant (CA) and legal counsel specializing in Indian technology law.**

---

## 1. Must-Have Website & App Legal Pages

To comply with Indian e-commerce, consumer protection, and data privacy regulations, the Beyond Pixells / Gym OS platform must host four foundational legal documents accessible via footer links across all web pages and mobile app login screens.

```
       +-----------------------------------------------------------+
       |             Beyond Pixells Legal Documentation             |
       +-----------------------------------------------------------+
       |  1. Terms of Service (ToS)                                |
       |  2. Privacy Policy (DPDP Act 2023 Compliant)               |
       |  3. Refund & Cancellation Policy                          |
       |  4. Cookie Policy & Consent Banner                        |
       +-----------------------------------------------------------+
```

---

### A. Terms of Service (ToS) / Terms of Use
* **Purpose**: Governs the B2B contractual relationship between Beyond Pixells and client gyms, as well as individual staff/gym member access to the Gym OS web dashboard and mobile application.
* **Key Sections & Detailed Outline**:
  1. **Acceptance of Terms**: Statement that registering, accessing, or using Gym OS constitutes binding acceptance of the ToS.
  2. **Eligibility & Account Responsibility**: Requirements for gym owners to hold valid business registrations; responsibility of gym administrators for credential security and all activities occurring under staff login accounts.
  3. **SaaS License Grant**: Non-exclusive, non-transferable, revocable, limited license to access and use Gym OS hosted on cloud infrastructure for internal gym management operations.
  4. **Acceptable Use & Restrictions**: Explicit prohibition against reverse engineering, decompiling, automated web scraping, sending unsolicited promotional spam, or uploading illegal/infringing content.
  5. **Subscription & Billing Terms**: Payment cycles (monthly/annual), payment methods, automatic renewals, late payment fees, and service suspension clauses upon payment default.
  6. **Intellectual Property Rights**: Explicit affirmation that Beyond Pixells retains 100% ownership of Gym OS source code, UI/UX designs, algorithms, branding, and database schemas. Client gym retains 100% ownership of its raw business data and member lists.
  7. **Service Level Agreement (SLA) & Uptime**: Service availability commitments (e.g., 99.5% uptime target), scheduled maintenance windows (conducted during off-peak hours), and limits on liability for unannounced outages caused by upstream cloud providers.
  8. **Limitation of Liability & Indemnification**: Total financial liability of Beyond Pixells capped at total subscription fees paid by the client gym in the preceding 3 to 6 months. Client gym agrees to indemnify Beyond Pixells against third-party claims arising from gym member data disputes or failure to obtain proper member consent.
  9. **Account Suspension & Termination**: Right of Beyond Pixells to suspend or terminate accounts for material breach, non-payment, or illegal activity; protocol for data export during the notice period.
  10. **Governing Law & Dispute Resolution**: Governed by the laws of India; exclusive jurisdiction of courts in Beyond Pixells' home city (e.g., Bengaluru / Mumbai / Delhi) and mandatory bilateral arbitration under the Indian Arbitration and Conciliation Act, 1996.

---

### B. Privacy Policy (DPDP Act 2023 Compliant)
* **Purpose**: Transparent disclosure of personal data processing practices for web visitors, gym owners, staff, and gym members whose personal data is processed via Gym OS.
* **Key Sections & Detailed Outline**:
  1. **Scope & Identity of Data Fiduciary / Processor**: Clarifies Beyond Pixells' dual role — **Data Fiduciary** for direct website visitors and gym client accounts, and **Data Processor** acting on behalf of client gyms for gym member personal data.
  2. **Categories of Personal Data Collected**:
     * *Gym Client Data*: Business name, owner/staff names, GSTIN, phone numbers, billing email, payment credentials.
     * *Gym Member Data*: Full names, phone numbers, email addresses, emergency contact details, date of birth / age, gender, attendance logs, workout/fitness metrics, payment/subscription history, biometric identification tags (if connected to access control turnstiles).
  3. **Specific Purpose of Processing (Purpose Limitation)**:
     * Authentication and membership access control.
     * Billing, invoice generation, automated payment reminder SMS/WhatsApp alerts.
     * Fitness tracking, personal trainer assignment, and gym operational analytics.
     * Compliance with statutory legal obligations (tax records, fraud prevention).
  4. **Legal Basis for Processing**: Explicit, affirmative consent under Section 6 of the DPDP Act 2023, or necessity for performance of contract.
  5. **Rights of Data Principals (Gym Members & Users)**: Detailed guidelines on how individuals can exercise rights under Sections 11–14 of the DPDP Act (Right to access personal data, Right to correction/erasure, Right of grievance redressal, Right to nominate).
  6. **Data Retention & Destruction Policy**: Retention limited strictly to the timeframe required to fulfill operational purposes or legal/tax requirements (e.g., retaining financial transaction logs for 7 years under GST laws); automated permanent purging upon consent revocation or account termination.
  7. **Third-Party Disclosures & Sub-Processors**: Listing of integrated vendor categories (Cloud Infrastructure: AWS / DigitalOcean; Payment Gateways: Razorpay / Stripe; Messaging APIs: WhatsApp Business API / Twilio; Analytics: Google Analytics).
  8. **Security Safeguards**: Encryption standards (TLS 1.3 in transit, AES-256 at rest), role-based access controls (RBAC), multi-factor authentication (MFA), regular vulnerability scans.
  9. **Data Breach Notification Procedure**: Notice protocol to affected Data Principals and the Data Protection Board of India without undue delay in compliance with Section 8(6) of the DPDP Act.
  10. **Grievance Officer Contact Details**: Name, designation, email address, physical postal address, and statutory turnaround time (e.g., acknowledging within 24–48 hours and resolving within 7–15 business days) as mandated by Section 8(9) and Section 13 of the DPDP Act.

---

### C. Refund & Cancellation Policy
* **Purpose**: Clear commercial rules regarding software subscription cancellations, setup fees, onboarding, and failed payment reversals.
* **Key Sections & Detailed Outline**:
  1. **SaaS Subscription Cancellation**: Policy allowing gyms to cancel recurring monthly/annual subscriptions anytime via account settings or written email notice 30 days prior to the next billing date.
  2. **Non-Refundability of Setup & Onboarding Fees**: Explicit declaration that one-time setup fees, data migration charges, custom WhatsApp template setup, or biometric turnstile integration fees are **strictly non-refundable** once implementation work has commenced.
  3. **Subscription Refund Framework**:
     * *Monthly Plans*: No pro-rata refunds for partial monthly usage upon cancellation midway through a billing cycle.
     * *Annual Plans*: If cancelled within 14 days of initial activation, partial refund available minus setup costs and standard one-month usage fee. No refunds after 14 days.
  4. **Failed / Double Payment Reversals**: Turnaround time (5–7 business days) for automatic refund processing via original payment method (Razorpay / UPI / Credit Card) in cases of duplicate charges or failed checkout transactions.
  5. **Consumer Protection Compliance**: Alignment with Consumer Protection (E-Commerce) Rules, 2020 regarding mandatory customer support contact and ticket tracking for payment disputes.

---

### D. Cookie Policy & Consent Banner
* **Purpose**: Inform users about tracking technologies used on the Gym OS web portal and marketing site, providing granular opt-in controls.
* **Key Sections & Detailed Outline**:
  1. **Definition of Cookies**: Technical description of first-party and third-party session and persistent cookies.
  2. **Categorization of Cookies**:
     * *Strictly Necessary / Essential*: Session management, security tokens, CSRF protection (cannot be disabled).
     * *Functional / Preferences*: Remembering gym dashboard settings, theme choices, language preferences.
     * *Analytical / Performance*: Monitoring site performance, page response latency, crash reporting (Google Analytics / PostHog).
     * *Marketing / Retargeting*: Meta Pixel and Google Ads tracking for Beyond Pixells agency marketing services.
  3. **Cookie Consent Banner UI/UX Requirements**:
     * Explicit opt-in banner displayed on first visit before loading non-essential cookies.
     * Clear choices: `"Accept All"`, `"Reject Non-Essential"`, and `"Manage Cookie Preferences"`.
     * Direct link to full Cookie Policy and instructions for revoking consent through browser settings.

---

## 2. DPDP Act 2023 Practical Compliance Checklist for Small SaaS Startups

The **Digital Personal Data Protection Act, 2023 (DPDP Act)** received Presidential assent on August 11, 2023, establishing India's unified data privacy regime. For a SaaS startup like Beyond Pixells operating Gym OS, compliance requires understanding legal roles and establishing concrete technical and operational controls.

```
+---------------------------------------------------------------------------------+
|                       DPDP Act 2023 Role Architecture                           |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  [ Gym Member / Individual ] -------- (Data Principal)                          |
|             |                                                                   |
|             v (Enrolls & Provides Consent)                                      |
|  [ Client Gym / Fitness Club ] ------ (Data Fiduciary - Sec 2(i))               |
|             |                                                                   |
|             v (Engages via Written Contract - Sec 8(2))                         |
|  [ Beyond Pixells / Gym OS ] -------- (Data Processor - Sec 2(k))                |
|                                       *Also Data Fiduciary for Gym Owner Data   |
+---------------------------------------------------------------------------------+
```

### A. Core Roles & Legal Definitions
1. **Data Principal (Section 2(j))**: The individual to whom the personal data relates (e.g., gym members, gym trainers, website visitors).
2. **Data Fiduciary (Section 2(i))**: Any person who alone or in conjunction with others determines the purpose and means of processing personal data.
   * *Client Gym*: Acts as the **Data Fiduciary** for its members' personal data because it decides to collect member info for gym memberships.
   * *Beyond Pixells*: Acts as a **Data Fiduciary** for client gym owners' B2B account data, staff credentials, and direct website lead generation.
3. **Data Processor (Section 2(k))**: Any person who processes personal data on behalf of a Data Fiduciary.
   * *Beyond Pixells / Gym OS*: Acts as the **Data Processor** for client gyms, processing member names, phone numbers, attendance logs, and payment records strictly according to the gym's contractual instructions.

---

### B. Practical Compliance Checklist for Gym OS

| Section | DPDP Legal Requirement | Practical Action Item for Beyond Pixells / Gym OS | Status / Verification |
| :--- | :--- | :--- | :--- |
| **Sec 5** | **Itemized Notice** | Design pre-consent notice modals in Gym OS web/mobile UI stating exact data categories collected and purpose (e.g., attendance tracking, billing). Must support English + 22 Eighth Schedule languages (or clear option). | [ ] Implemented in UI |
| **Sec 6** | **Free & Explicit Consent** | Replace pre-checked boxes with affirmative opt-in toggles. Log timestamp, IP, user ID, and consent version in an immutable consent ledger database table. | [ ] Implemented in Database |
| **Sec 6(4)** | **Ease of Withdrawal** | Provide a 1-click `"Revoke Consent"` or `"Manage Privacy"` option in member app settings, matching the ease of initial consent. | [ ] Feature Active |
| **Sec 8(2)** | **Data Processor Contract** | Execute a binding **Data Processing Agreement (DPA)** / Addendum with every client gym prior to onboarding (included in MSA). | [ ] Template Finalized |
| **Sec 8(5)** | **Security Safeguards** | Implement SSL/TLS 1.3 transport security, AES-256 database storage encryption, role-based access control (RBAC), database connection firewall rules, and MFA for admin panels. | [ ] Security Validated |
| **Sec 8(6)** | **Data Breach Notice** | Establish an Incident Response Plan (IRP) to notify affected client gyms, Data Principals, and the Data Protection Board of India (DPBI) immediately upon detecting a data breach. | [ ] IRP Drafted |
| **Sec 8(7)** | **Data Erasure & Purging** | Automated cron jobs to soft-delete then permanently purge member data 30 days post-subscription termination or upon verified withdrawal of consent. | [ ] Purge Cron Active |
| **Sec 8(9) & 13** | **Grievance Redressal** | Appoint a designated **Grievance Officer** / Data Protection Contact; publish contact name, email, and address on website with SLA to resolve complaints within 15 days. | [ ] Officer Designated |
| **Sec 9** | **Child Data Protection** | **CRITICAL FOR GYMS**: If gym members are under 18 (minors/teenagers), build verifiable parental consent workflows (OTP to parent/guardian). Disable tracking/profiling for minor accounts. | [ ] Minor Logic Built |
| **Sec 11-14**| **Data Principal Rights** | Build admin features enabling gym admins or members to export data (CSV/JSON download) and request data correction or deletion. | [ ] Export Tool Ready |

---

### C. Major Statutory Penalties (Schedule under DPDP Act 2023)
* **Failure to take reasonable security safeguards to prevent personal data breaches**: Up to **₹250 Crore**.
* **Failure to notify data breach to Board and affected Data Principals**: Up to **₹200 Crore**.
* **Non-compliance with obligations regarding children's data (Sec 9)**: Up to **₹200 Crore**.
* **Non-compliance with general obligations as Data Fiduciary**: Up to **₹50 Crore**.

---

## 3. GST Basics for Indian SaaS & Agency Operations

Goods and Services Tax (GST) compliance is compulsory for SaaS platforms and digital agencies operating in India.

```
+---------------------------------------------------------------------------------+
|                      GST Operational Tax Flow (18%)                             |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   Intra-State Sale (Same State) -------> 9% CGST + 9% SGST                      |
|   Inter-State Sale (Other Indian State) -> 18% IGST                             |
|   Export of Services (Outside India) --> 0% IGST (Under LUT Form GST RFD-11)    |
|                                                                                 |
|   Input Tax Credit (ITC) Deductions:                                           |
|   AWS / Server Hosting (18%) + Meta/Google Ad Spend (18%) + Gateway Fees (18%)   |
|   Net Tax Paid to Govt = Output GST Liability - Eligible ITC                    |
+---------------------------------------------------------------------------------+
```

### A. Applicable GST Rates & Classification Codes (SAC / HSN)
* **Standard SaaS Rate**: **18% GST** applied to all software subscriptions, setup fees, maintenance, and cloud hosting services.
* **SAC Codes (Services Accounting Code)**:
  * **SAC 998315**: *Hosting and IT infrastructure provisioning services / Software as a Service (SaaS)* (Primary code for Gym OS subscriptions).
  * **SAC 998314**: *Information technology infrastructure and network management services*.
  * **SAC 998434**: *Online Information and Database Access or Retrieval (OIDAR) services* (applicable for automated cloud database tools).
  * **SAC 998361**: *Advertising services / Digital marketing services* (for Beyond Pixells agency lead generation services).

---

### B. GST Registration Thresholds & Mandatory Rules
1. **Aggregate Turnover Threshold**: Normal threshold in India for service providers is **₹20 Lakhs per financial year** (₹10 Lakhs for special category North-Eastern states).
2. **MANDATORY Inter-State Registration (Section 24 of CGST Act)**:
   * **CRITICAL LEGAL RULE**: If Beyond Pixells supplies SaaS subscriptions to a gym located in **another state** (e.g., registered entity in Karnataka selling to a gym in Maharashtra), **inter-state supply rules apply under Section 24(i)**, requiring GST registration **regardless of turnover** (even if annual turnover is under ₹20 Lakhs).
   * Voluntary registration is strongly recommended from Day 1 to claim Input Tax Credit (ITC) and execute formal enterprise contracts.

---

### C. Invoicing Requirements (Rule 46 of CGST Rules)
Every tax invoice generated by Gym OS / Beyond Pixells must display:
1. Heading titled **"Tax Invoice"**.
2. Serialized sequential invoice number (max 16 characters, unique per financial year) and date of issue.
3. Supplier Details: Name, registered office address, State Name, and **GSTIN** of Beyond Pixells.
4. Recipient Details:
   * *B2B (Registered Gyms)*: Gym Legal Name, Address, State Name, and Recipient **GSTIN**.
   * *B2C (Unregistered Gyms / Members)*: Customer Name, Billing Address, State Name, and Place of Supply.
5. HSN/SAC Code: Minimum **4-digit SAC code (998315)** for turnover up to ₹5 Crore; **6-digit SAC code** for turnover exceeding ₹5 Crore.
6. Financial Breakdown: Taxable value, applied GST rate (18%), split of CGST (9%) + SGST (9%) for intra-state OR IGST (18%) for inter-state, and total payable amount.
7. Place of Supply: State code of the recipient's registered location.
8. Digital Signature / QR Code certification.

---

### D. E-Invoicing Thresholds
* **E-Invoicing under GST**: Mandatory generation of Invoice Reference Number (IRN) and QR Code via the government Invoice Registration Portal (IRP) for B2B transactions if aggregate turnover exceeds **₹5 Crore** in any preceding financial year since 2017-18. *(Small SaaS startups under ₹5Cr generate standard tax invoices but must prepare system architecture for future scale).*

---

### E. Input Tax Credit (ITC) & Reverse Charge Mechanism (RCM)
* **Claiming ITC**: Beyond Pixells can set off output GST collected from client gyms against GST paid on business purchases:
  * AWS / DigitalOcean / Cloudflare bills (18% GST).
  * Razorpay / Stripe transaction convenience fees (18% GST).
  * Meta Ads / Google Workspace subscription fees (18% GST).
  * Laptops, office equipment, and software dev licenses (18%–28% GST).
* **Reverse Charge Mechanism (RCM) on Imported Services**: If paying foreign vendors (e.g., OpenAI API, US-based servers, international software tools) where the vendor does not collect Indian GST, Beyond Pixells must pay 18% IGST under RCM and subsequently claim equivalent ITC credit in GSTR-3B filings.

---

## 4. Recommended Commercial Model & Pricing Strategy

To maximize recurring revenue, offset customer acquisition costs (CAC), and avoid churn, Beyond Pixells should implement a hybrid **Upfront Setup Fee + Tiered Recurring Subscription + Optional Agency Services** model.

```
+---------------------------------------------------------------------------------+
|                       Gym OS Revenue Model Matrix                               |
+---------------------------------------------------------------------------------+
|  1. ONE-TIME SETUP FEE  : ₹10,000 - ₹25,000 (Onboarding, Migration, Hardware)   |
|  2. RECURRING SAAS TIERS :                                                      |
|     - Starter Tier      : ₹2,499 / month (Up to 300 active members)             |
|     - Growth / Pro Tier  : ₹4,999 / month (Up to 1,000 members + Marketing)      |
|     - Enterprise Tier   : ₹9,999 / month (Unlimited members + Multi-branch)     |
|  3. AGENCY ADD-ONS      : ₹15,000 - ₹35,000 / month (Performance Lead Gen Ads)   |
+---------------------------------------------------------------------------------+
```

### A. Pricing Structure Breakdown

#### 1. One-Time Setup & Onboarding Fee (₹10,000 – ₹25,000 + 18% GST)
* **Scope**:
  * Initial gym workspace setup, domain setup, staff account creation.
  * Data migration from legacy software or raw Excel spreadsheets (member profiles, pending dues, expiry dates).
  * Custom WhatsApp Business API template approvals (Meta compliance) for automated membership renewals.
  * Integration with hardware access devices (e.g., LAN/Wi-Fi biometric turnstile integration for automated door unlock on member check-in).
  * On-site or remote staff training sessions (2 sessions for gym receptionists/trainers).
* **Commercial Purpose**: Covers immediate human resource setup costs, deters low-intent tire-kickers, and ensures gym commitment during the onboarding phase.

#### 2. Tiered Monthly / Annual SaaS Subscriptions

| Plan Tier | Price (Monthly) | Price (Annual Upfront - 20% Off) | Member Limit | Key Included Features |
| :--- | :--- | :--- | :--- | :--- |
| **Starter Tier** | **₹2,499 / mo** + GST | **₹23,990 / yr** + GST | Up to 300 members | Member directory, basic check-in attendance, manual payment recording, SMS expiry alerts, 2 staff accounts. |
| **Growth Pro** | **₹4,999 / mo** + GST | **₹47,990 / yr** + GST | Up to 1,000 members | **Automated WhatsApp renewal reminders**, payment gateway checkout links, workout/diet plan builder, lead CRM, 5 staff accounts. |
| **Enterprise** | **₹9,999 / mo** + GST | **₹95,990 / yr** + GST | Unlimited members | Multi-branch management dashboard, biometric turnstile API sync, custom branded member app, dedicated support, unlimited staff. |

#### 3. Beyond Pixells Marketing Agency Retainer (Add-On)
* **Monthly Retainer**: **₹15,000 – ₹35,000 / month** + GST (+ actual Meta/Google ad spend paid directly by gym).
* **Deliverables**: Hyper-local Facebook/Instagram ad campaigns targeting fitness enthusiasts within 5 km radius, lead qualification landing pages, automated instant lead distribution to Gym OS CRM dashboard, staff sales follow-up training.

---

## 5. B2B Client Contract Structure (Gym Service Agreement)

Every client gym onboarding onto Gym OS must execute a formal **B2B Master Services Agreement (MSA)** incorporating a **Data Processing Agreement (DPA)** and **Service Level Agreement (SLA)**.

### Master Services Agreement (MSA) Key Clauses Outline

```
+---------------------------------------------------------------------------------+
|                       Gym OS B2B Contract Architecture                          |
+---------------------------------------------------------------------------------+
|  Section 1  : Preamble & Definitions                                            |
|  Section 2  : Scope of SaaS License & Onboarding Services                      |
|  Section 3  : Commercial Terms, Billing, Late Interest & GST                   |
|  Section 4  : Data Protection & DPDP Act Compliance (Data Processing Addendum) |
|  Section 5  : Intellectual Property & Data Ownership                           |
|  Section 6  : Service Level Agreement (SLA) & Uptime Commitment                |
|  Section 7  : Warranties, Limitation of Liability & Indemnification            |
|  Section 8  : Term, Termination & Post-Termination Data Export                  |
|  Section 9  : Confidentiality & Non-Solicitation                                |
|  Section 10 : Governing Law, Dispute Resolution & Jurisdiction                  |
+---------------------------------------------------------------------------------+
```

#### Detailed Clause Breakdown

1. **Preamble & Definitions**: Identifies Beyond Pixells ("Service Provider") and Legal Name of Gym Entity ("Client"). Defines "Active Member", "Customer Data", "SaaS Platform", and "Confidential Information".
2. **Scope of Services**: Grant of non-exclusive SaaS access to Gym OS. Onboarding deliverables specified in attached Statement of Work (SOW).
3. **Commercial Terms & Payment Mechanics**:
   * Client agrees to pay one-time Setup Fee upfront prior to deployment.
   * Subscription fees invoiced monthly/annually in advance, due within 7 days of invoice date.
   * All prices exclusive of 18% GST.
   * Late payments accrue interest at **1.5% per month** (18% per annum). Beyond Pixells reserves the right to suspend platform access if invoices remain unpaid past 15 calendar days from due date.
4. **Data Protection & DPDP Compliance (DPA Clause)**:
   * *Roles*: Parties acknowledge Client is Data Fiduciary and Beyond Pixells is Data Processor under DPDP Act 2023.
   * *Client Warranties*: Client warrants that it has provided statutory notice and obtained valid, verifiable consent from all gym members (including parental consent under Sec 9 for members under 18) before uploading personal data into Gym OS.
   * *Processor Obligations*: Beyond Pixells agrees to process member data solely on Client's written instructions; implement technical/organizational security safeguards (Sec 8(5)); notify Client within 24 hours of suspected data breach; and purge data upon contract termination.
   * *Non-Exploitation*: Beyond Pixells strictly prohibited from selling, renting, cross-marketing, or monetizing gym member contact lists to third parties.
5. **Intellectual Property Rights**:
   * Beyond Pixells retains exclusive ownership of Gym OS underlying code, source files, trade secrets, trademarks, software updates, and custom features.
   * Client retains exclusive ownership of raw member data, sales logs, and customer leads.
6. **Service Level Agreement (SLA) & Technical Support**:
   * Service Uptime target: **99.5% per calendar month** (excluding scheduled maintenance between 1:00 AM – 5:00 AM IST).
   * Support SLAs: Critical platform outages acknowledged within 2 hours; standard support tickets resolved within 24 business hours.
7. **Limitation of Liability & Indemnity**:
   * **Liability Cap**: Maximum cumulative aggregate liability of Beyond Pixells for any claims arising under or related to the agreement shall be capped at the **total amount of SaaS subscription fees paid by Client to Beyond Pixells in the three (3) months preceding the incident**.
   * Exclusion of indirect, incidental, punitive, or consequential damages.
   * **Indemnification**: Client agrees to defend and indemnify Beyond Pixells against any legal proceedings, fines, penalties, or member claims resulting from Client's breach of data privacy laws, lack of valid member consent, or illegal business practices.
8. **Term & Termination Protocol**:
   * Initial term of 12 months, auto-renewing for successive 12-month periods unless notice of non-renewal is provided 30 days prior.
   * Either party may terminate for cause upon 15 days written notice if a material breach remains uncured.
   * **Post-Termination Data Transition**: Upon contract termination, Beyond Pixells will provide a **30-day grace period** during which Client can export all gym member data in standard CSV/JSON format. After 60 days, Beyond Pixells will securely erase and purge all Client member records from active databases.
9. **Governing Law & Jurisdiction**: Contract governed by laws of India. Disputes subject to mandatory sole arbitrator appointment under the Indian Arbitration and Conciliation Act, 1996, with seat and venue in Beyond Pixells' home city (e.g., Bengaluru/Mumbai/Delhi) and exclusive jurisdiction in local courts.

---

## 6. Practical Master Execution Checklist Before Public Launch

```
+---------------------------------------------------------------------------------+
|                       Pre-Launch Execution Roadmap                              |
+---------------------------------------------------------------------------------+
|  [ ] STEP 1: Tax & Business Setup (GSTIN Registration & HSN 998315 Setup)       |
|  [ ] STEP 2: Execute Legal Policies on Web/App Footers (ToS, Privacy, Refund)    |
|  [ ] STEP 3: DPDP Consent Modals & Immutable Consent Logging DB Tables           |
|  [ ] STEP 4: Minor Consent Workflow (Sec 9 Parental Verification for <18)       |
|  [ ] STEP 5: Appoint Grievance Officer & Publish SLA Details on Site             |
|  [ ] STEP 6: Finalize Client B2B MSA Agreement & Data Processing Addendum        |
|  [ ] STEP 7: Security Audit (TLS 1.3, AES-256 Storage, MFA Admin Enforcement)   |
|  [ ] STEP 8: Stripe/Razorpay Tax Integration & Rule 46 Compliant Invoices        |
+---------------------------------------------------------------------------------+
```

---
*End of Checklist File — Prepared for Beyond Pixells (Gym OS)*
