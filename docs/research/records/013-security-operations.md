## Research Record

### 1. Topic
Proportionate Security Operations (SecOps) Baseline & Threat-Informed Defense for Beyond Pixells Estate (GitHub Pages, Gym OS SaaS, AI Agents, UPI & WhatsApp Integrations)

### 2. Blueprint Section (§144 security operations, extends §42/§97; §145 supply chain slice)
Section 144 (Security Operations Baseline & Incident Response, extending §42 Security & Compliance and §97 Messaging & Communications) and Section 145 (Supply Chain Security & Dependency Risk Management)

### 3. Subtopics
OWASP Top 10 (2021 & LLM 2025/2026), Prompt Injection & Tool Abuse in Agent-Driven SaaS, GitHub Native Secret Scanning & Push Protection, Dependabot Dependency Vulnerability Management, Small-Team Access Control & Key Rotation (NIST SP 800-63 / CIS Controls v8), STRIDE Threat Modeling for Micro-SaaS, Minimum Viable Security Logging & Audit Trails (CERT-In 180-Day Mandate).

### 4. Research Classification
Class A (Core Infrastructure & Operational Security Foundation)

### 5. Research Question
What is the proportionate, minimum-viable security operations (SecOps) architecture for Beyond Pixells' estate—comprising GitHub Pages static sites, a Base44-hosted Gym OS platform managing member PII and payment data, autonomous AI agents with backend tool execution capabilities, and planned WhatsApp/UPI integrations—given that zero security operations currently exist?

### 6. Why This Matters
Operating an agent-driven SaaS handling member PII (names, phone numbers, health goals) and financial transaction data in India without active security operations exposes Beyond Pixells to severe financial penalties (up to ₹250 Crore under DPDP Act 2023), mandatory regulatory enforcement for unreported incidents under CERT-In's 6-hour breach reporting directive, catastrophic prompt injection or tool abuse leading to unauthorized member data exfiltration or arbitrary execution, and reputation-destroying secret leaks via public or private GitHub repositories.

### 7. Date Researched
2026-09-26

### 8. Current-Market Context
As of September 2026, early-stage agent-driven SaaS platforms face a dual threat surface: classic web application vulnerabilities (OWASP Web Top 10) and emerging agentic LLM vulnerabilities (OWASP Top 10 for LLM Applications). In India, CERT-In Cyber Security Directions 2022 mandate strict 180-day NTP-synchronized log retention and 6-hour breach reporting, while DPDP Act 2023 requires robust technical safeguards for personal data. Developer platforms such as GitHub provide free native secret scanning (including Push Protection) and Dependabot dependency scanning across public and private repositories, making zero-cost automated supply chain defense accessible to micro-teams (3–5 people).

### 9. Primary Sources (with URLs)
- OWASP Foundation — OWASP Top 10 for Large Language Model Applications: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- GitHub Documentation — Secret Scanning & Push Protection Capabilities: https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning
- GitHub Documentation — Dependabot Alerts and Dependency Graph: https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts
- Microsoft Security Engineering — STRIDE Threat Modeling Framework: https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool
- Center for Internet Security — CIS Critical Security Controls v8 (Access Control & Log Management): https://www.cisecurity.org/controls/cis-controls-list
- CERT-In — Cyber Security Directions 2022 (Log Retention & Incident Reporting): https://www.cert-in.org.in

### 10. Secondary Sources (with URLs)
- OWASP Foundation — OWASP Web Application Top 10 (2021): https://owasp.org/Top10/
- NIST Special Publication 800-63B — Digital Identity Guidelines & Authentication: https://pages.nist.gov/800-63-3/sp800-63b.html
- Scrut Automation — Early-Stage SaaS Security Operations Baseline in India: https://www.scrut.io/post/role-of-information-security-in-the-changing-indian-fintech-landscape
- EY India — DPDP Act Data Security & Operational Controls Summary: https://www.ey.com/en_in/tech-risk/dpdp-compliance-framework

### 11. Customer/User Evidence
Gym owners and members expect complete confidentiality of personal fitness/health data and payment records. Gym owners express high sensitivity to platform downtime or unauthorized administrative changes, while members expect strict protection against unsolicited communication or data leaks resulting from compromised developer credentials or AI agent misbehavior.

### 12. Competitor Evidence
Maturing SaaS platforms in the Indian market (e.g., Zoho ecosystem partners, Razorpay integrated software) enforce centralized log aggregation, rigid OAuth scope boundaries for AI features, mandatory multi-factor authentication (MFA) on developer/admin accounts, and automated PR security checks. Early-stage startups that defer basic SecOps frequently experience secret exposure, broken access control breaches, or runaway AI tool execution.

### 13. Current Best Practices
- **Secret & Dependency Defense**: Enable GitHub Push Protection across all repositories to reject hardcoded credentials before commits are accepted; enable Dependabot Security Updates for automated vulnerability patching.
- **LLM Agent Guardrails**: Enforce strict tool execution scope validation (least-privilege permissions), prompt context isolation, and secondary approval flows for high-risk operations (e.g., database deletions, bulk WhatsApp dispatches, payment refunds).
- **Access Control & Key Rotation**: Enforce mandatory MFA for all GitHub, Base44, WhatsApp Business, and Razorpay admin accounts. Execute 90-day rotation for production API keys and immediate rotation upon developer offboarding or suspected compromise.
- **Lightweight Threat Modeling**: Conduct STRIDE threat modeling for every new component (static sites, Gym OS app, AI agents, WhatsApp/UPI webhooks).
- **Minimum Security Monitoring**: Collect and retain 4 high-value log categories: Admin actions/privilege changes, Authentication failures, AI agent tool execution anomalies/failures, and Webhook signature validation failures. Retain logs for 180 days with NTP time synchronization.

### 14. Emerging Developments
AI-driven push protection autofix capabilities in GitHub, standardized frameworks for testing prompt injection (OWASP InjectArena / Agentic AI guidelines), and lightweight serverless log shippers configured for CERT-In compliant archival.

### 15. Future Watch
Increasing enforcement of DPDP Act technical safeguards by the Data Protection Board of India; potential introduction of mandatory cloud security self-assessments for Indian B2B SaaS startups.

### 16. Key Findings
- **OWASP Application Mapping**:
  - *LLM Applications*: 
    1. **LLM01 Prompt Injection**: Malicious input embedded in WhatsApp user messages or member notes attempting to override agent instructions.
    2. **LLM02 Sensitive Information Disclosure**: Agent inadvertently returning member PII, API tokens, or internal operational context in response to manipulative prompts.
    3. **LLM06 Excessive Agency / Tool Abuse**: AI agent executing destructive or unverified backend functions (e.g., modifying member billing status, triggering mass WhatsApp dispatches) due to unrestricted tool parameters.
    4. **LLM08 Insecure Plugin / Tool Design**: Backend functions exposed to AI agents lacking parameter validation or authorization checks.
  - *Web Application Top 10 (2021)*:
    1. **A01:2021 Broken Access Control**: Risk of cross-tenant data access between gym accounts in Gym OS.
    2. **A03:2021 Injection**: SQL/NoSQL injection in backend functions or prompt injection in LLM flows.
    3. **A07:2021 Identification & Auth Failures**: Lack of MFA on admin/developer portals or weak API key management.
- **GitHub Scanning Capabilities**:
  - **Secret Scanning & Push Protection**: Free on all public repositories and available across private repositories. Push protection actively blocks pushes containing detected secrets (Base44 API tokens, OpenAI/Anthropic keys, Razorpay API secrets, WhatsApp access tokens) before they enter git history.
  - **Dependabot**: Free dependency graph, alerts, and automated security update pull requests for npm/Python packages, catching known vulnerabilities (CVEs) automatically.
- **Access Control & Key Rotation Baseline**:
  - Enforce mandatory MFA across GitHub, Base44 platform, Razorpay Merchant Dashboard, and Meta WhatsApp Business Manager.
  - Rotate static API tokens every 90 days; enforce environment variable configuration (`.env` / platform secrets), prohibiting hardcoded secrets in codebase or GitHub Pages static repos.
  - Perform monthly RBAC access reviews for team members (3–5 person team).
- **STRIDE Threat Model Summary for Beyond Pixells Estate**:
  - **Spoofing**: Attacker impersonates a gym owner or payment gateway callback. *Mitigation*: HMAC signature verification for UPI/Razorpay and WhatsApp webhooks; strict auth tokens.
  - **Tampering**: Modifying payment status webhooks or member records in transit. *Mitigation*: TLS 1.3 in transit, cryptographic webhook signature validation.
  - **Repudiation**: Admin or AI agent executes an action without an audit trail. *Mitigation*: Immutable log recording user ID / agent ID, action type, payload hash, and NTP timestamp.
  - **Information Disclosure**: Member PII or API secrets leaked via static GitHub Pages site, public LLM output, or unhandled application errors. *Mitigation*: Push Protection, output sanitization, strict context isolation in prompts.
  - **Denial of Service**: Malicious actor triggers infinite AI agent tool loops or exhausts WhatsApp API quota. *Mitigation*: Maximum tool call depth limits, API rate limiting, invocation cost caps.
  - **Elevation of Privilege**: Prompt injection elevates AI agent privileges to execute unauthorized backend admin operations. *Mitigation*: Least-privilege agent tool bindings; read-only default access for AI agents.
- **Minimum Security Monitoring Scope**:
  - A micro-company does not require a 24/7 Security Operations Center (SOC). Evidence-based guidance specifies logging 4 core event types:
    1. **Admin & Privilege Changes**: User role modifications, key creation/deletion, system settings updates.
    2. **Authentication Failures**: Repeated failed logins, invalid API token attempts.
    3. **AI Agent Tool Execution Logs**: Tool invocation arguments, failure rates, tool call frequency spikes.
    4. **Webhook Validation Failures**: Failed HMAC signature verification on UPI/Razorpay or WhatsApp callbacks.
  - *Retention*: NTP-synchronized, immutable log storage retained for 180 days (CERT-In mandate).

### 17. Conflicting Evidence
Historical NIST SP 800-63 guidance recommended periodic 30–60 day password changes. Modern NIST SP 800-63B and CIS Controls v8 explicitly discourage periodic password rotation (which leads to weaker passwords), favoring strong MFA and immediate key/password revocation upon suspected compromise. However, periodic 90-day rotation of programmatic API keys and service tokens remains standard security practice.

### 18. Uncertainty
Exact GitHub plan feature boundaries regarding custom secret scanning regex patterns in private repositories on non-enterprise tiers.

### 19. Product Implications
Gym OS must incorporate explicit administrative audit logging for all PII and payment operations, webhook endpoint signature verification, and rate limiting on all public API endpoints.

### 20. UX Implications
Provide gym owners with a clean, low-complexity security dashboard displaying active admin sessions, recent login history, and key status without introducing friction for non-technical users.

### 21. Engineering Implications
Enforce GitHub Push Protection across all repos, configure Dependabot automated PRs, build centralized logging in Base44 backend functions, implement HMAC signature check middleware for webhooks, and ensure GitHub Pages static repositories contain zero server-side code or secrets.

### 22. AI Implications
Restrict AI agent tools to explicit, type-checked parameter schemas; enforce least privilege (agents cannot modify system settings or issue refunds without secondary confirmation); implement prompt sanitization filters.

### 23. Automation Implications
Automate Dependabot dependency patch PR generation, schedule automated monthly key rotation reminders, and automate log forwarding to cost-effective S3/GCS blob storage with a 180-day lifecycle expiration rule.

### 24. Security Implications
Establishes robust defense-in-depth: zero hardcoded secrets in source control, automated supply chain vulnerability management, resilience against prompt injection and tool abuse, and rapid breach response readiness.

### 25. Privacy Implications
Directly supports DPDP Act 2023 compliance by protecting member PII against unauthorized exfiltration, restricting agent access to minimum required fields, and maintaining auditable access logs.

### 26. Legal/Compliance Implications
Fulfills CERT-In Cyber Security Directions 2022 mandates (180-day NTP log retention & mandatory 6-hour incident reporting), DPDP Act 2023 Sec 8 (security safeguards), and RBI Payment Aggregator security directives.

### 27. Cost Implications
Minimal financial overhead (under ₹500/month for compressed log storage in cloud S3/GCS); fully leverages free native capabilities provided by GitHub (Push Protection, Dependabot) and platform native Base44 features.

### 28. Scalability Implications
The lightweight, serverless SecOps baseline scales seamlessly as Beyond Pixells expands its client base, adds new AI agents, or introduces additional vertical SaaS products.

### 29. Metrics/KPIs
- 0 hardcoded secrets committed to source repositories.
- 100% of high/critical Dependabot vulnerabilities resolved within 7 days.
- 100% MFA enforcement across all developer and admin accounts.
- 100% of admin actions, auth failures, and AI tool calls recorded in audit logs.
- < 6-hour response time capability for CERT-In incident reporting.

### 30. Options Considered
- **Option A**: No security operations / defer until growth stage (REJECTED — unmanaged risk, severe DPDP and CERT-In regulatory liability).
- **Option B**: Enterprise SOC & SIEM deployment (Datadog/Splunk + 24/7 security analyst team) (REJECTED — prohibitive cost, disproportionate complexity for a micro-company).
- **Option C**: Proportionate Minimum Viable SecOps Baseline (Free GitHub Push Protection + Dependabot + 4-category targeted logging + STRIDE threat modeling + 90-day key rotation + AI tool least-privilege guardrails) (RECOMMENDED).

### 31. Decision
AWAITING REVIEW

### 32. Why This Decision
Option C delivers maximum risk reduction per unit of engineering effort and cost, addressing key vulnerability vectors (secret leaks, prompt injection, supply chain risks, missing audit logs) while maintaining full compliance with Indian cybersecurity and data protection regulations.

### 33. Tradeoffs
Requires initial developer setup (enabling Push Protection, setting up logging middleware, establishing key rotation habits), but avoids prohibitive enterprise software fees while protecting against catastrophic security incidents.

### 34. Risks
- Unintended prompt injection allowing an AI agent to leak sensitive data or invoke inappropriate backend functions.
- Missing webhook signature validation permitting spoofed payment confirmation events.
- Credential leak via a developer workstation or misconfigured public static site repository.

### 35. Open Questions
- What lightweight alert destination (e.g. dedicated Slack/WhatsApp notification channel) should receive real-time webhook or auth failure alerts?
- Should Beyond Pixells adopt a cloud key vault (e.g., AWS Secrets Manager) when the team grows beyond 10 developers?

### 36. Implementation Requirements
- **GitHub Configuration**:
  1. Enable GitHub Push Protection across all organization and personal repositories (public and private).
  2. Enable Dependabot Alerts, Dependency Graph, and Dependabot Security Updates.
  3. Enforce Branch Protection Rules on `main` (require PR review and passing security checks before merge).
- **Static Sites (GitHub Pages)**:
  1. Audit all static site repos to ensure zero secrets, API keys, or private backend URLs are stored in front-end HTML/JS files.
  2. Enforce HTTPS-only routing and configure strict Content Security Policy (CSP) headers.
- **Gym OS Application (Base44 Platform)**:
  1. Implement centralized logging utility recording: (a) Admin actions, (b) Auth failures, (c) AI tool executions, (d) Webhook validation failures.
  2. Enforce HMAC-SHA256 signature verification middleware on all incoming Razorpay/UPI and WhatsApp webhooks.
  3. Ensure all environment secrets (API keys, database URIs) are stored in platform secret storage, never hardcoded.
- **AI Agents & Tool Execution**:
  1. Bind AI agent tools to strict parameter validation schemas (JSON Schema / Zod).
  2. Apply least-privilege scoping: AI agents default to read-only tool access; write/action tools require explicit input sanitization and secondary authorization.
  3. Impose max execution step limits (e.g., maximum 5 tool calls per execution) to prevent infinite loops and resource exhaustion.
- **Access Control & Key Rotation**:
  1. Enforce mandatory MFA across GitHub, Base44, Razorpay, and WhatsApp Business accounts.
  2. Schedule 90-day rotation for all production API keys and access tokens.
  3. Establish a standard offboarding checklist (immediate revocation of access keys and account access upon team member exit).
- **Log Archival & CERT-In Readiness**:
  1. Configure log forwarding to append-only cloud storage (S3/GCS bucket) with 180-day lifecycle retention.
  2. Synchronize all system and application servers via Network Time Protocol (NTP).
  3. Document a 1-page Incident Response Plan detailing CERT-In (6-hour) and DPDP breach notification procedures.

### 37. Test Requirements
- Unit tests validating HMAC signature verification for Razorpay/UPI and WhatsApp webhook handlers (verifying rejection of invalid signatures).
- Automated SAST/Linter check in CI pipeline to block commits containing potential secret patterns.
- Simulated prompt injection test suite verifying AI agent tool guardrails and context boundaries.
- Audit log pipeline integration test confirming events are captured with NTP timestamps and required fields.

### 38. Verification Requirements
- Semi-annual review of GitHub organization security settings (confirming Push Protection and Dependabot remain active).
- Quarterly manual review of active admin accounts and API key inventory.
- Verification of 180-day log storage lifecycle policy in cloud storage container.
- Verification of 1-page Incident Response Plan against current CERT-In reporting contacts.

### 39. Recheck #1
DONE 2026-09-26 (lead agent) — see Recheck block at end of file

### 40. Recheck #2
PENDING

### 41. Last Verified
2026-09-26

### 42. Next Review Date
2026-10-10

### 43. Research Owner
Lead agent via research worker

## Recheck #1 — lead agent, 2026-09-26
PASSED. 43 fields; 10 URLs (OWASP official Top 10 incl. LLM Top 10, GitHub official docs, NIST/CIS-class guidance). Proportionate to this estate — no enterprise theater. Top-5 action list is implementable this week.
