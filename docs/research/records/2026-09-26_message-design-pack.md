Topic: Message design pack (WhatsApp + email automation templates)
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: notifications + content + brand (blueprint §63, §25, §27)
Question: How does the locked design language carry into automated messages (WhatsApp, email) and content?
Current market state: premium SaaS transactional email = dark-safe tables, 600px, bulletproof buttons; WhatsApp Business templates have strict formatting/category rules
Primary sources: WhatsApp Business API docs (template structure: header/body/footer/buttons, categories), email client dark-mode behavior docs
Secondary sources: Linear/Stripe/Notion/Figma email teardowns
Competitors: Indian CRM WhatsApp automation vendors (gym software with crude notifications)
Customer evidence: Gym OS workflows (renewal reminders, UPI collection) already need message copy; founder wants "same visuals in email automations, msgs, content"
Current best practices: table-based email, inline CSS, VML fallbacks, meta color-scheme, stackable fonts
Emerging approaches: WhatsApp Flows (interactive forms) — noted, deferred until API tier supports
Options considered: (a) per-product ad-hoc messages, (b) one brand message pack with token mapping
Recommended approach: (b)
Why: automation copy becomes reusable across all client rollouts + both OS products; brand consistent; AI content workflows reference one source
Tradeoffs: static templates need variable slots ({{1}}) mapped at send time by platform workflows
Risks: template approval by Meta (categories/naming) — open, depends on Business API tier
Security: message copy contains no secrets; UPI amounts must be injected server-side only
Privacy: templates include consent-context copy; data minimization respected (first name, relevant entity)
Legal: WhatsApp template naming/category rules follow Meta policy; DPDP consent inherited
UX: short scannable messages, emoji-light, bold key facts, clear single CTA
Engineering: delivered as markdown libraries + one HTML skeleton (no build step)
Automation: templates are the payload layer for Gym OS workflows (trigger → template → send)
AI: message drafts can be AI-personalized later with strict template guardrails
Cost: 0
Scalability: per-gym variables (name, plan, amount) slot into {{n}} placeholders
Metrics: delivery/read/response rates (open — platform-side analytics once wired)
Open questions: Meta template registration; send-time variable wiring in Gym OS platform
Decision: SHIP pack (implemented 2026-09-26)
Implementation: assets/message-templates/{gym-os-whatsapp.md, dentist-os-whatsapp.md, email-dark-base.html}
Tests: live curl 200 on all three assets
Recheck #1: DONE 2026-09-26 — links verified live; copy reviewed against brand voice + honesty rules
Recheck #2: OPEN — pending Meta template registration + first real send test
Last verified: 2026-09-26
Next review date: 2026-10-10 (or at first automation send)
Status: IMPLEMENTED, Pass B pending
