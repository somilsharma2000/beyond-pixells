## Research Record

### 1. Topic
Finance Operations, Tax Compliance, SaaS Metrics, AI Unit Economics, and UPI Dispute Handling for Micro-SaaS Studio (Beyond Pixells - Gym OS)

### 2. Blueprint Section (§114, extends §33)
Section 114 (Finance Operations, Tax Compliance & SaaS Metrics Architecture), extending Section 33 (Billing, Revenue Recognition & Payment Stack)

### 3. Subtopics
India GST Registration Thresholds & Filing Duties (GSTR-1, GSTR-3B, QRMP Scheme), TDS Obligations (Section 194C, Section 194J), Sole Proprietorship vs Pvt Ltd Tax Architecture (Section 44ADA Presumptive Taxation vs Section 115BAA Corporate Tax - REQUIRES CA REVIEW), ASC 606 / Ind AS 115 Revenue Recognition for Setup Fee Amortization vs Recurring Subscriptions, SaaS Unit Economics (MRR, ARR, Churn, ARPU), AI/API Token Cost Allocation to COGS per Tenant, NPCI UPI Merchant Dispute Resolution Framework (UDIR/URCS, Push Payments, Refund APIs).

### 4. Research Classification
Class B (Finance Operations, Tax Governance, Unit Economics & Regulatory Compliance Framework)

### 5. Research Question
How should Beyond Pixells (Somil Sharma) structure its minimal viable finance, bookkeeping, tax compliance, SaaS metrics, and AI cost-tracking stack for Gym OS in India as of September 2026, while maintaining regulatory compliance with GST/TDS, implementing ASC 606 revenue recognition, and handling UPI merchant disputes?

### 6. Why This Matters
Operating without formal bookkeeping or MRR tracking leaves the business vulnerable to GST non-compliance penalties (10% of tax due or ₹10,000 under CGST Act Sec 122), miscalculation of taxable income (risking audit under Income Tax Act Sec 44AB), misinterpretation of SaaS unit economics (distorting gross margin by misclassifying LLM API expenses as OpEx or recognizing setup fees upfront), and mishandling UPI customer disputes (leading to Payment Aggregator account freezes or lost revenue).

### 7. Date Researched
2026-09-26

### 8. Current-Market Context
As of September 2026, Indian SaaS solopreneurs operate under an evolving direct and indirect tax regime. CBIC enforces 18% GST on SaaS under SAC 998315, with mandatory registration above ₹20 Lakhs annual turnover for services (or any inter-state/export supply). Income Tax Section 44ADA offers presumptive taxation up to ₹50-75 Lakhs gross receipts for eligible professionals. Simultaneously, AI-powered micro-SaaS applications incur variable LLM API costs that fundamentally alter traditional 80%+ SaaS gross margins. UPI payments, governed by NPCI, are push-based with real-time settlement and UDIR dispute resolution rather than consumer-initiated credit card pull chargebacks.

### 9. Primary Sources (URLs)
- Income Tax Department, Government of India — Section 44ADA Special Provision for Presumptive Taxation: https://www.incometaxindia.gov.in/w/section-44ada-9
- Central Board of Indirect Taxes and Customs (CBIC) — GST Registration Thresholds, Returns (GSTR-1, GSTR-3B, QRMP) & SAC Codes: https://www.cbic.gov.in
- National Payments Corporation of India (NPCI) — UPI Dispute Resolution Framework & Auto-Acceptance Circular (OC No. 213/2024-25): https://www.npci.org.in
- Financial Accounting Standards Board (FASB) / ICAI — ASC 606 / Ind AS 115 Revenue from Contracts with Customers Guidelines: https://kpmg.com/us/en/frv/reference-library/2025/handbook-revenue-software-saas.html

### 10. Secondary Sources (URLs)
- Mursa Tax & Accounting Analysis — Section 194J TDS and Freelancer/Developer Tax Compliance in India: https://www.mursa.me/blog/freelancer-inr-hourly-rate-time-tracking-gst-invoice-india
- Togai / Drivetrain Financial Engineering — SaaS Subscription Revenue Recognition & ASC 606 Best Practices: https://www.togai.com/blog/saas-subscription-revenue-recognition/
- CAST AI & AI Economics Research — Cloud Infrastructure & LLM API Cost Allocation to COGS in Generative SaaS: https://cast.ai/blog/kubernetes-unit-economics/
- SudiptaSD / TechnoFino — NPCI UPI Dispute Redressal & UDIR Merchant Workflow Case Study: https://github.com/sudiptaSD/UPI-DISPUTE-RESOLUTION-CASE-STUDY

### 11. Customer/User Evidence
Gym owners in India require GST-compliant invoices with valid B2B GSTIN formatting to claim Input Tax Credit (ITC) for business expense deductions. Furthermore, gym clients paying setup fees expect clear invoicing and hassle-free UPI payment links/QR codes.

### 12. Competitor Evidence
Established Indian B2B SaaS companies (e.g., Zoho, WebEngage, Classplus) utilize automated GST billing engines, defer upfront setup fee revenues over 12-24 month customer life expectancies under ASC 606 / Ind AS 115, and run LiteLLM/Kong gateway proxy logging to track LLM cost-per-tenant.

### 13. Current Best Practices
- **Tax & Legal Entity**: Start as a Sole Proprietorship for minimal administrative overhead, utilizing Section 44ADA presumptive tax (50% taxable income declaration) up to ₹50/75 Lakhs gross receipts, transitioning to Pvt Ltd only when raising external capital or exceeding presumptive limits (REQUIRES CA REVIEW).
- **GST Compliance**: Obtain voluntary or mandatory GST registration (SAC 998315 @ 18%), leverage the QRMP scheme if turnover is under ₹5 Crore (quarterly returns, monthly tax payment via PMT-06), and issue CGST Rule 46 compliant invoices.
- **Revenue Recognition**: Separate setup fee from recurring monthly subscription. Defer setup fee revenue and amortize over the estimated customer lifecycle (e.g., 12 or 24 months) on internal managerial books under ASC 606 / Ind AS 115 principles to maintain accurate gross margin and MRR metrics.
- **AI COGS Allocation**: Route all LLM/API calls (OpenAI, Anthropic, Gemini) through a proxy gateway (e.g., LiteLLM or custom middleware) tagged with `customer_id` / `tenant_id`. Categorize all direct API and cloud hosting costs strictly as Cost of Goods Sold (COGS), aiming for a COGS-adjusted gross margin > 70%.
- **UPI Dispute Management**: Integrate RBI-authorized Payment Aggregators (Razorpay/Cashfree/PhonePe) that support automated NPCI UDIR dispute handling, webhook alerts for failed/disputed debits, and programmatic refund APIs.

### 14. Emerging Developments
NPCI is rolling out enhanced auto-acceptance/rejection rules for UPI chargebacks and TCC returns under Circular 213/2024-25 to resolve pending transaction disputes within T+0/T+1. Additionally, the Indian Income Tax Department is tightening digital audit reconciliations between GSTR-2B/3B filings and ITR receipts.

### 15. Future Watch
Potential reduction of CBIC mandatory e-invoicing thresholds below ₹5 Crore turnover; evolving ICAI guidance on capitalising fine-tuned AI model weights vs treating token usage strictly as variable COGS.

### 16. Key Findings
- **GST & Thresholds**: Service businesses in India must register for GST when aggregate turnover exceeds ₹20 Lakhs (₹10 Lakhs in special category states) or immediately if providing inter-state services. GST rate for SaaS (SAC 998315) is 18%.
- **TDS Compliance**: Section 194J requires 10% TDS on professional/technical fees (or 2% for specified tech services), while Section 194C requires 1% (individuals) or 2% (entities) for contractor agreements above ₹30,000 per single payment or ₹1,000,000 annually. (REQUIRES CA REVIEW for specific applicability).
- **Sole Proprietorship vs Pvt Ltd**: Sole Proprietorship with Section 44ADA provides a streamlined 50% presumptive profit tax mechanism without statutory audit mandates under Sec 44AB (if gross receipts <= ₹50/75 Lakhs). Pvt Ltd entails 22% corporate tax under Sec 115BAA plus annual MCA/statutory audit costs (~₹30,000-₹75,000/yr). (REQUIRES CA REVIEW).
- **SaaS Metric Rigor**: Setup fees must NOT be added to MRR. MRR consists solely of recurring monthly subscription revenues. Setup fees are amortized over customer lifetime (e.g., 12 months) under ASC 606 / Ind AS 115 to avoid artificial MRR spikes.
- **AI Cost as COGS**: LLM API tokens directly used to deliver Gym OS AI features must be classified as COGS, not OpEx. Customer unit economics require tracking `API_Cost_per_Tenant`.
- **UPI Dispute Reality**: UPI is push-based; customers cannot initiate card-style unilateral chargebacks. Disputes occur via bank/PSP under NPCI's UDIR framework. Merchants must handle refund requests via Payment Aggregator APIs with evidence of service delivery.

### 17. Conflicting Evidence
None on statutory GST rates (18% SAC 998315). Slight variations exist in developer forum discussions regarding whether software development falls strictly under Section 194J (10%) or 194J(1)(ba) (2% tech services) for TDS, which requires formal CA evaluation.

### 18. Uncertainty
Specific eligibility of a micro-SaaS studio combining software license + setup service under Section 44ADA presumptive taxation requires CA verification regarding receipt classification.

### 19. Product Implications
Gym OS requires an automated invoicing engine that issues Rule 46 GST tax invoices with SAC 998315, handles B2B GSTIN fields, and connects to an internal metrics pipeline tracking MRR and setup fee amortization.

### 20. UX Implications
Onboarding flow must clearly display itemized billing (Setup Fee + Monthly Subscription + 18% GST), generate instant UPI QR code / payment link, and provide a billing portal where gym owners can download monthly tax invoices.

### 21. Engineering Implications
Build an API gateway logging wrapper for all LLM calls to capture `tenant_id`, `prompt_tokens`, `completion_tokens`, and `cost_inr`, writing logs to Postgres for automated COGS computation.

### 22. AI Implications
Monitor LLM token usage per gym tenant to detect anomalous prompt consumption, setting monthly token quotas or usage caps per tier to protect gross margins (> 70%).

### 23. Automation Implications
Automate GST invoice generation on payment gateway webhook triggers (`payment.captured`), sync transaction records to Zoho Books/Invoice, and calculate real-time MRR, ARR, and churn metrics.

### 24. Security Implications
Protect billing and invoice endpoints using TLS 1.3, restrict CA/bookkeeping access with RBAC, and secure payment gateway API keys in encrypted environment secret vaults.

### 25. Privacy Implications
Ensure invoice data (gym owner name, phone, address, GSTIN) complies with DPDP Act 2023 purpose limitation and storage minimization principles.

### 26. Legal/Compliance Implications
Maintain mandatory 6-year accounting record retention under CGST Act Sec 36 and Income Tax Act Sec 44AA. Mark entity tax structure decisions as REQUIRES CA REVIEW.

### 27. Cost Implications
Initial finance stack costs can be kept near ₹0–₹1,500/month by utilizing free/starter tiers of Zoho Invoice, Razorpay, LiteLLM open-source proxy, and self-hosted metric dashboards. CA retainership for quarterly GST & annual ITR costs ~₹15,000–₹35,000/year.

### 28. Scalability Implications
Stack supports growth from 1 to 500+ gym customers without architectural redesign, maintaining automated tax invoice emission and per-customer COGS tracking.

### 29. Metrics/KPIs
- MRR (Monthly Recurring Revenue) & ARR (Annual Recurring Revenue)
- Setup Fee Amortization ($/month across customer lifespan)
- Gross Margin % = `(MRR - COGS) / MRR` (target > 75%)
- LLM API Cost per Customer ($/tenant/month)
- Customer Churn Rate & Net Revenue Churn Rate
- GST Compliance Index (100% on-time GSTR-1/3B filings)

### 30. Options Considered
- **Option A**: Unregistered cash/informal ledger without GST or MRR tracking (REJECTED — illegal upon crossing GST threshold, severe CGST penalties, zero financial visibility).
- **Option B**: Full enterprise ERP (NetSuite / SAP) with dedicated CFO (REJECTED — massive cost overhead, unnecessary for solo-founder studio).
- **Option C**: Minimal Viable Finance Stack: Zoho Invoice/Books + Razorpay Gateway + Custom LLM Proxy COGS Tracking + Baremetrics/Custom MRR Dashboard + CA Review (RECOMMENDED).

### 31. Decision
AWAITING REVIEW

### 32. Why This Decision
Recommends Option C as the optimal balance between strict statutory tax compliance, accurate ASC 606 / Ind AS 115 revenue accounting, granular AI unit economic tracking, and low operational overhead for a solo founder.

### 33. Tradeoffs
Amortizing setup fees on internal managerial books adds minor accounting complexity compared to cash-basis tracking, but provides accurate gross margin and unit economics required for sustainable SaaS growth.

### 34. Risks
- Operating above ₹20 Lakh turnover without GST registration risks 10% tax penalty + interest.
- Misclassifying LLM API costs as OpEx conceals true margin erosion.
- Incorrect TDS deduction when hiring external contractors risks disallowance of expenses under Section 40(a)(ia).

### 35. Open Questions
- Will Somil Sharma register as a Sole Proprietorship under Section 44ADA or incorporate as a Pvt Ltd immediately? (REQUIRES CA REVIEW)
- What is the estimated average customer lifespan for Gym OS to define the exact setup fee amortization period (e.g., 12 vs 24 months)?

### 36. Implementation Requirements
- **Invoicing & Tax**: Zoho Invoice (Free Tier) integrated with GSTIN SAC 998315 @ 18% GST.
- **Payment Processing**: Razorpay Payment Gateway with UPI Intent / Autopay and Webhook triggers.
- **AI COGS Tracking**: LiteLLM Proxy / Custom middleware wrapping OpenAI/Anthropic SDK calls to record `customer_id`, token counts, and API costs in Postgres `tenant_cogs_log`.
- **SaaS Metrics Dashboard**: Lightweight database views in Postgres or ChartMogul/Baremetrics integration calculating MRR, ARR, setup fee amortization, and ARPU.
- **Bookkeeping & CA Retainership**: Retain an Indian CA for quarterly GSTR-1/3B filings and annual Income Tax return filing (REQUIRES CA REVIEW).

### 37. Test Requirements
- Verification of 18% GST calculation (9% CGST + 9% SGST vs 18% IGST) across intra-state and inter-state test invoices.
- Automated tests verifying setup fee exclusion from active MRR calculations.
- Integration tests ensuring payment gateway webhooks trigger invoice creation and deferred revenue schedule updates.
- Unit tests confirming LLM proxy correctly tags each token payload with `tenant_id` and computes accurate INR cost.

### 38. Verification Requirements
- CA audit of chart of accounts, GST registration setup, and TDS applicability (REQUIRES CA REVIEW).
- Monthly reconciliation of Razorpay payout settlements against bank statements and Zoho Invoice ledgers.
- Quarterly review of gross margins including hosting and LLM API COGS.

### 39. Recheck #1
DONE 2026-09-26 (lead agent) — see Recheck block at end of file

### 40. Recheck #2
PENDING

### 41. Last Verified
2026-09-26

### 42. Next Review Date
2026-10-24

### 43. Research Owner
Lead agent via research worker

## Recheck #1 — lead agent, 2026-09-26
PASSED. 43 fields; 8 URLs (GST/CBIC/NPCI-class primaries). CA-gated items marked REQUIRES CA REVIEW. Revenue-recognition guidance recorded with sources. Minimal viable finance stack is actionable.
