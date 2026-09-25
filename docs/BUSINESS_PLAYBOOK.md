# Beyond Pixells — Business Playbook

> How the studio makes money, survives, and scales. Synthesized from:
> `research/agency_to_brand.md`, `research/survival.md`, `research/vertical_playbook.md`,
> `research/legal_business.md`, `research/psychology.md`, `research/competitors.md`.

---

## 1. The Model (locked): Services Cashflow → Products Scale

**Vertical Hybrid — services-led SaaS.** The studio never fully pivots and never
stays a pure agency:

```
Services (fast cashflow)          Products (compounding scale)
├── OS rollout per client   ────► ├── Gym OS subscriptions
├── Custom websites                ├── Dentist OS subscriptions
├── Automation retainers           ├── Builder OS subscriptions
└── Digital products               └── Kits, templates, playbooks
```

- Services fund product development — no cash gaps, no investor needed.
- Every service engagement feeds the product: custom work becomes modules.
- Target mix by month 12: ~60% services / 40% product revenue; year 2 target: products lead.
- Time discipline: delivery hours must not exceed ~50% of founder time or products die.

## 2. Pricing Architecture (all products)

Every OS product uses the same 3-part structure:

| Piece | What | Why |
|---|---|---|
| **Setup** | One-time branded rollout (site + portal + dashboard + data import) | Agency cashflow, filters serious buyers |
| **Subscription** | Flat monthly INR — unlimited members/patients/leads | Kills the #1 competitor complaint (per-member pricing) |
| **Optional retainer** | Marketing/automation services monthly | The services flywheel |

Rules:
- Flat pricing is a headline differentiator: Glofox/Wellyx/Zen Planner scale
  pricing with member count; we never punish growth.
- Quote in rupees, collect by UPI AutoPay where possible; 18% GST on top, clean invoices.
- Anchor against the cost of the problem, not the cost of software:
  "Retain just 2 members a month and Gym OS pays for itself."
- Never race to the bottom against ₹2,000 offline software — sell against
  lost renewals instead ("that cheap software cost you ₹50,000 in lost fees").

## 3. The Vertical OS Launch Playbook (repeat for every new OS)

1. **Research (7 fronts):** competitors + their complaints, buyer psychology,
   landing best practices, visual direction, legal, own-work audit, unique roadmap.
2. **Design partners:** 2–3 real businesses in the vertical get the branded
   rollout free/cheap in exchange for feedback and a testimonial.
3. **MVP = full spine:** website + portal + dashboard + WhatsApp automation +
   lead engine on the shared platform core. Never launch a lone app.
4. **Pilot revenue:** convert design partners to paid after 30 days of value.
5. **Scale:** marketing hooks per vertical (Gym: "fees walking out the door";
   Dentist: "30% no-shows / lost recalls"), one landing page per product.
6. **Compound:** every custom request becomes a module for all clients.

## 4. Survival Rules (from the failure research)

Top risks for OUR situation, with the countermeasure:

| Risk | Early sign | Countermeasure |
|---|---|---|
| Project revenue lumpiness | One client = >40% of revenue | Cap client concentration; push subscriptions |
| Founder stuck in delivery | Product commits slip 2 sprints | Document + delegate; product time is sacred |
| Churn > growth | >5% monthly logo churn | Onboarding in 24h; WhatsApp-first support; deep workflows |
| Pricing too low | Bargaining every deal | Setup fee floor + value anchoring; publish pricing |
| Platform dependency (we build on Base44) | Credit limits, outages | Own domains always; regular data export/backup; critical client data mirrored in our own store; monitor pricing changes |
| Single product dependency | Gym OS = everything | Dentist OS ships within 90 days of Gym OS stabilization |
| No sales system | Feasts/famine cycles | Daily outreach blocks; autolead pipeline (our own tool) |

**Monthly metrics to watch (non-negotiable):**
1. MRR + MRR growth 2. Churn % 3. Client concentration 4. Runway in months
5. Delivery hours vs product hours 6. Lead pipeline (autolead) 7. Credit/infra spend

## 5. Legal & Compliance Checklist (before scaling sales)

> Practical checklist, not legal advice — confirm with a CA/lawyer before signing clients.

- [ ] **Legal pages live** (done): Terms of Service, Privacy Policy, Refund Policy on every product site
- [ ] **DPDP Act 2023 basics:** consent notice at lead capture (gym sites already
      send consent flags), purpose-limited data use, data-principal contact /
      grievance channel named in Privacy Policy, deletion requests honored
- [ ] **Client Service Agreement** per rollout: scope, setup fee, subscription
      terms, cancellation, data ownership (client owns their data), uptime
      expectations, IP (studio owns platform, client owns their content)
- [ ] **GST:** register once threshold crossed; 18% on SaaS services; invoice
      every transaction; B2B clients get GST invoices automatically
- [ ] **Trademark:** register "Beyond Pixells" and the OS names (Class 42 software)
- [ ] **Refund policy honored:** setup fee non-refundable after work starts;
      subscription refundable pro-rata within the month

## 6. Platform & Backend Strategy

- **Single flagship repo per product** (gym-os is the model: docs + client-kit +
  inventory + landing). Research reports live in the brand repo.
- **One production backend per product** (the Base44 app); capture endpoints stay
  thin and repointable; leads must land in the product's own platform.
- **Own the domains** for every client and product — never depend on
  `github.io`/`base44.app` subdomains for anything client-facing.
- Data export routine: monthly entity export to our own storage (survival.md
  mitigation for vendor lock-in).

## 7. What "Done" Looks Like (12-month scoreboard)

- Gym OS: 10+ paying gyms, churn <3%, case studies written
- Dentist OS: launched to 5 design-partner clinics, paying pilots
- Builder OS: MVP shipped or explicitly parked (no zombie projects)
- Brand: beyond-pixells hub + 2 case studies + one digital product sold
- Studio: contracts templated, GST clean, runway ≥ 6 months
