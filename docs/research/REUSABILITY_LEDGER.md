# REUSABILITY LEDGER — do not build the same thing eight times
Every meaningful implementation, classified: CLIENT_ONLY / CONFIGURABLE / TEMPLATE / PLATFORM / PRODUCT_CANDIDATE / CORE_IP.

| Built | Where | Classification | Reuse path | Notes |
|---|---|---|---|---|
| bp-design-system.css + bp-motion.js v2.0 | beyond-pixells/assets | **CORE_IP** | Hot-linked by all 15+ sites; 2-line include | Estate-wide visual consistency; version-pinned by URL |
| Canonical client template (index/styles/script/site.config pattern) | oxigen-fitness-digital, reds-gym-system | **TEMPLATE** | 2 of 8 rolled (Oxigen, REDS GYM); 6 remaining; new client = 1 config file + accent flavor | Config slots: contact/plans/trainers/classes/reviews/UPI |
| OWNER_CONTENT_CHECKLIST pattern | oxigen | **TEMPLATE** | Copy per client site | Owner self-serve content completion |
| gym-os-connect.js v2 (consent + offline queue + WhatsApp fallback) | 8 client repos | **PLATFORM** | Any new lead-capture site | Offline queue key: gymos_lead_queue |
| Lead capture endpoints (captureGymLead → Gym osssss repoint) | Vesper/Base44 | **PLATFORM** | All verticals (gym now; dentist later) | Repoint pending (D-008) |
| WhatsApp message libraries (7 gym + 6 dentist types) | beyond-pixells/assets/message-templates | **CONFIGURABLE** | Slot {{variables}} per client per workflow | Meta template registration open |
| Dark transactional email skeleton | beyond-pixells/assets/message-templates | **TEMPLATE** | All product emails; swap content slots | Outlook/dark-mode safe |
| Social/reel templates from design system | beyond-pixells/assets/social-templates | **CORE_IP** | Weekly content workflow generates from these | |
| QR check-in block + member portal/dashboard links | all client sites | **PLATFORM** | data-gymos-qr/data-gymos-login wiring | Platform = my-gym-os |
| Gym OS platform (45+ entities, portal, dashboard) | Gym osssss Base44 app | **PRODUCT_CANDIDATE → CORE_IP** | The vertical OS itself; Dentist OS reuses the pattern | Restyle into ecosystem pending; security review CRITICAL |
| Dentist OS landing | dentist-os-site | **TEMPLATE** | Same landing architecture as gym-os-site | Per-product flavor tokens |
| site-health-check skill | .agents/skills | **PLATFORM (internal ops)** | Schedule as daily workflow (gap #10) | Not yet scheduled |
| Weekly build-log + content workflow | agent workflows | **PLATFORM (internal ops)** | Extend to message-pack drafts | |
| SEO/GEO head blocks (JSON-LD, llms.txt, sitemaps) | 10 sites | **TEMPLATE** | New sites copy the head block | seo_geo.md documents |
| Research/records system (this) | beyond-pixells/docs/research | **CORE_IP (company memory)** | All future decisions | AGENTS.md law |

## Product-candidate extraction rules
Any custom work requested twice becomes a template; any template requested by 3+ clients becomes platform scope; any platform capability with standalone market (record 006 evidence) becomes a PRODUCT_CANDIDATE for the studio.
