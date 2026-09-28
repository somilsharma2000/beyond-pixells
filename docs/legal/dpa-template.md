# DATA PROCESSING AGREEMENT (DPA)

**Under Section 8(2) of the Digital Personal Data Protection Act, 2023**

---

**THIS DATA PROCESSING AGREEMENT ("DPA")** is entered into as of **[EFFECTIVE_DATE]** ("Effective Date"), by and between:

**1. DATA FIDUCIARY (CLIENT):**
* **Legal Entity Name**: [CLIENT_LEGAL_NAME]
* **Trade / Gym Name**: [CLIENT_GYM_NAME]
* **Registration / PAN / GSTIN**: [CLIENT_GSTIN_OR_PAN]
* **Registered Address**: [CLIENT_REGISTERED_ADDRESS]
* **Represented By**: [CLIENT_AUTHORIZED_SIGNATORY_NAME], [CLIENT_AUTHORIZED_SIGNATORY_TITLE]
*(hereinafter referred to as the **"Data Fiduciary"** or **"Client"**)*

**AND**

**2. DATA PROCESSOR (PROVIDER):**
* **Legal Entity Name**: [PROCESSOR_LEGAL_NAME] *(e.g., Beyond Pixells Private Limited / Beyond Pixells)*
* **Registration / PAN / GSTIN**: [PROCESSOR_GSTIN_OR_PAN]
* **Registered Address**: [PROCESSOR_REGISTERED_ADDRESS]
* **Represented By**: [PROCESSOR_AUTHORIZED_SIGNATORY_NAME], [PROCESSOR_AUTHORIZED_SIGNATORY_TITLE]
*(hereinafter referred to as the **"Data Processor"** or **"Beyond Pixells"**)*

*(Data Fiduciary and Data Processor are individually referred to as a **"Party"** and collectively as the **"Parties"**)*

---

## RECITALS & BACKGROUND

A. The Data Fiduciary operates a fitness facility/gym and has entered into a Master Services Agreement ("MSA") or SaaS Subscription Terms with Beyond Pixells for the provision of **Gym OS** software services (including member CRM, attendance tracking, billing, and WhatsApp messaging automations).

B. In providing Gym OS, Beyond Pixells processes digital Personal Data of gym members, trainers, and staff on behalf of, and strictly according to the documented instructions of, the Data Fiduciary.

C. Section 8(2) of the **Digital Personal Data Protection Act, 2023 ("DPDP Act")** mandates that a Data Fiduciary may engage, appoint, or involve a Data Processor to process personal data on its behalf only under a valid, binding written contract.

D. The Parties enter into this DPA to ensure compliance with the DPDP Act 2023, the DPDP Rules 2025 (notified 13 November 2025), and applicable Indian cybersecurity and data protection regulations (`needs CA/legal confirmation`).

---

## OPERATIVE PROVISIONS

### 1. DEFINITIONS AND INTERPRETATION

1.1. **"Applicable Data Protection Law"** means the Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023), the DPDP Rules, 2025 (G.S.R. 843(E) / 846(E)), the Information Technology Act, 2000, CERT-In Cyber Security Directions 2022, and any statutory modifications or notifications issued thereunder.

1.2. **"Data Principal"** shall have the meaning assigned in Section 2(j) of the DPDP Act 2023, referring to the individual (gym member, visitor, trainer, or employee) to whom the Personal Data relates.

1.3. **"Data Fiduciary"** shall have the meaning assigned in Section 2(i) of the DPDP Act 2023, referring to the Client gym which determines the purpose and means of processing Personal Data.

1.4. **"Data Processor"** shall have the meaning assigned in Section 2(k) of the DPDP Act 2023, referring to Beyond Pixells, which processes Personal Data on behalf of the Data Fiduciary.

1.5. **"Personal Data"** shall have the meaning assigned in Section 2(t) of the DPDP Act 2023, referring to any data about an individual who is identifiable by or in relation to such data processed via Gym OS.

1.6. **"Personal Data Breach"** shall have the meaning assigned in Section 2(u) of the DPDP Act 2023, referring to any unauthorized processing of personal data or accidental disclosure, acquisition, sharing, alteration, destruction, or loss of access to personal data that compromises confidentiality, integrity, or availability.

---

### 2. SCOPE, ROLES, AND PURPOSE OF PROCESSING

2.1. **Role Ackowledgment**: The Parties acknowledge and agree that for the processing of gym member data via Gym OS, Client is the **Data Fiduciary** and Beyond Pixells is the **Data Processor**.

2.2. **Purpose Limitation**: Beyond Pixells shall process Personal Data strictly for the limited purpose of providing, maintaining, and supporting the Gym OS platform (member enrollment, check-in, subscription tracking, UPI/payment processing, WhatsApp renewal messaging, and operational analytics), as specified in Schedule 2 of this DPA and the underlying MSA.

2.3. **Ownership**: All gym member Personal Data uploaded or generated within the Client's Gym OS workspace remains the exclusive property of the Data Fiduciary. Beyond Pixells claims no ownership or proprietary rights over gym member Personal Data.

---

### 3. OBLIGATIONS OF THE DATA PROCESSOR (BEYOND PIXELLS)

Pursuant to Section 8(2) and Section 8(5) of the DPDP Act 2023, Beyond Pixells covenants and agrees to:

3.1. **Process on Written Instructions**: Process Personal Data strictly on documented, written instructions from the Data Fiduciary (including instructions conveyed through Gym OS dashboard configurations and API interactions), and for no other purpose.

3.2. **Technical & Organizational Security Safeguards**:
   - Implement and maintain appropriate technical security measures, including **TLS 1.3 encryption in transit**, **AES-256 database encryption at rest**, tenant-level database row isolation (Row Level Security / RLS), role-based access control (RBAC), and database firewalls.
   - Restrict access to Personal Data strictly to authorized employees and technical personnel bound by contractual non-disclosure obligations.

3.3. **Personal Data Breach Immediate Notification**:
   - In accordance with Section 8(6) of the DPDP Act 2023 and Rule 7 of DPDP Rules 2025, notify the Data Fiduciary **immediately and without undue delay** (and in any event within **24 hours**) upon becoming aware of any confirmed or suspected Personal Data Breach affecting Client data.
   - Provide reasonable details regarding the breach nature, estimated scope, categories of records affected, and immediate remediation steps taken.

3.4. **Assistance with Data Principal Rights**:
   - Provide technical capabilities within the Gym OS platform (data export tools, correction modals, deletion flags) enabling the Data Fiduciary to respond to Data Principal requests for access, correction, completion, update, or erasure under Sections 11–14 of the DPDP Act 2023.

3.5. **Sub-Processor Engagement**:
   - The Data Fiduciary hereby grants general written authorization to Beyond Pixells to engage sub-processors listed in **Schedule 1** (e.g., cloud hosting providers, WhatsApp Business Solution Providers, Payment Aggregators).
   - Beyond Pixells shall ensure that any sub-processor enters into a written agreement imposing data protection obligations no less protective than those set out in this DPA.
   - Beyond Pixells shall notify the Data Fiduciary prior to adding or replacing any sub-processor, giving the Data Fiduciary reasonable opportunity to object.

3.6. **Data Return & Permanent Erasure (Sec 8(7))**:
   - Upon termination or expiry of the MSA/subscription, or upon written request by the Data Fiduciary, Beyond Pixells shall allow the Client a **30-day grace period** to export all gym member data in standard format (CSV/JSON).
   - Following the 30-day export window, Beyond Pixells shall permanently purge and delete all active database records and backups of Client Personal Data, except where statutory law requires longer retention (e.g., financial/GST logs retained for 7 years under CGST Rules, system access logs retained for 180 days under CERT-In Directions).

3.7. **Data Localization**:
   - Store and process primary Client Personal Data on cloud infrastructure located within the geographical territory of the Republic of India (e.g., AWS `ap-south-1` Mumbai region). Cross-border processing shall comply with Section 16 of the DPDP Act 2023 (`needs CA/legal confirmation`).

---

### 4. OBLIGATIONS OF THE DATA FIDUCIARY (CLIENT GYM)

4.1. **Lawful Basis & Mandatory Consent (Sec 5 & Sec 6)**:
   - Client warrants that it has provided itemized notices (Sec 5) and obtained free, explicit, affirmative consent (Sec 6) from every Data Principal (gym member/staff) whose Personal Data is entered into or processed via Gym OS.
   - Client shall maintain verifiable records of consent obtained from members.

4.2. **WhatsApp Opt-in Consent**:
   - Client warrants that gym members have explicitly opted in to receive service notifications and payment reminders via WhatsApp prior to initiating automated WhatsApp workflows through Gym OS.

4.3. **Minor Data Consent (Sec 9)**:
   - If enrolling gym members under 18 years of age, Client warrants that it has obtained verifiable parental consent in accordance with Section 9 of the DPDP Act 2023.

4.4. **Indemnification by Data Fiduciary**:
   - Client agrees to defend, indemnify, and hold harmless Beyond Pixells, its directors, and technical operators against any fines, penalties, damages, or regulatory actions imposed by the Data Protection Board of India (DPBI) or courts resulting from Client's failure to obtain valid consent or provide lawful processing instructions.

---

### 5. AUDIT RIGHTS & COMPLIANCE VERIFICATION

5.1. Upon reasonable advance written notice (minimum 15 business days), Beyond Pixells shall provide the Data Fiduciary with summary InfoSec compliance certificates, SOC2 / ISO reports (where available), or self-assessment compliance checklists confirming adherence to this DPA (`needs CA/legal confirmation`).

---

### 6. LIMITATION OF LIABILITY (`needs CA/legal confirmation`)

6.1. To the maximum extent permitted by Indian law, the total cumulative contractual liability of Beyond Pixells arising out of or related to a breach of this DPA or data security failure shall be capped at the total subscription fees actually paid by the Data Fiduciary to Beyond Pixells in the **[3 / 6 / 12] months** immediately preceding the event giving rise to liability.

6.2. Neither Party shall be liable for indirect, consequential, special, or punitive damages.

---

### 7. GRIEVANCE REDRESSAL & CONTACT

7.1. In accordance with Section 8(9) and Section 13 of the DPDP Act 2023, the designated Data Protection / Grievance Officer for Beyond Pixells is:
* **Grievance Officer Name**: [GRIEVANCE_OFFICER_NAME]
* **Designation**: Data Protection & Grievance Lead
* **Email Address**: privacy@beyondpixells.com / [GRIEVANCE_OFFICER_EMAIL]
* **Postal Address**: [GRIEVANCE_OFFICER_POSTAL_ADDRESS]
* **Statutory SLA**: Acknowledgment within 24–48 hours; resolution within 15 business days.

---

### 8. GOVERNING LAW & DISPUTE RESOLUTION

8.1. This DPA shall be governed by and construed in accordance with the laws of India.

8.2. Any dispute, controversy, or claim arising out of or relating to this DPA shall be subject to the exclusive jurisdiction of the competent courts located in **[CITY_NAME, STATE_NAME]**, India, and shall be resolved through bilateral arbitration under the Arbitration and Conciliation Act, 1996 (`needs CA/legal confirmation`).

---

## SCHEDULE 1: APPROVED SUB-PROCESSORS

The Data Fiduciary hereby authorizes the engagement of the following third-party sub-processors for the delivery of Gym OS services:

| Sub-Processor Entity | Purpose / Service | Data Categories Handled | Data Location |
| :--- | :--- | :--- | :--- |
| **AWS India / Base44 Cloud Platform** | Cloud Hosting, Managed Database & Storage | Encrypted Member PII, Check-in Logs, Tenant DB | India (`ap-south-1` Mumbai) |
| **Meta Business API / WhatsApp BSP** | Automated WhatsApp Reminders & Alerts | Mobile Number, First Name, Renewal Alert Text | India / Global |
| **Razorpay / Cashfree / PhonePe PG** | UPI AutoPay, Mandate Management & Checkout | Member Name, Mobile, Amount, VPA, Transaction ID | India |
| **Transactional SMS / DLT Gateway** | Essential OTP & System SMS Alerts | Mobile Number, Transactional OTP text | India |

---

## SCHEDULE 2: DETAILS OF DATA PROCESSING

1. **Categories of Data Principals**:
   - Gym members, personal training clients, gym visitors/leads, gym trainers, front-desk staff, gym administrators.

2. **Categories of Personal Data Processed**:
   - **Identification & Contact**: Full Name, Phone Number, Email Address, Gender, Date of Birth/Age, Profile Photo.
   - **Membership & Billing**: Membership Plan, Start/Expiry Date, Payment History, UPI VPA, Payment Status, Invoice Records.
   - **Operational & Usage**: Daily QR Check-in Timestamps, Attendance Records, Fitness Goals, Trainer Assignments, Lead Enquiries.

3. **Duration of Processing**:
   - Duration of active Gym OS SaaS subscription plus 30 days post-termination data export window.

---

## EXECUTION & SIGNATURES

**IN WITNESS WHEREOF**, the Parties have executed this Data Processing Agreement by their duly authorized representatives as of the Effective Date written above.

**FOR DATA FIDUCIARY (CLIENT):**

Signature: ____________________________________  
Name: **[CLIENT_AUTHORIZED_SIGNATORY_NAME]**  
Title: **[CLIENT_AUTHORIZED_SIGNATORY_TITLE]**  
Gym Name: **[CLIENT_GYM_NAME]**  
Date: **[DATE]**  

---

**FOR DATA PROCESSOR (BEYOND PIXELLS):**

Signature: ____________________________________  
Name: **[PROCESSOR_AUTHORIZED_SIGNATORY_NAME]**  
Title: **[PROCESSOR_AUTHORIZED_SIGNATORY_TITLE]**  
Company: **[PROCESSOR_LEGAL_NAME]**  
Date: **[DATE]**  
