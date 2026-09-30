# AGENTS.md — BEYOND PIXELLS OPERATING RULES

Read `docs/00_MASTER_INDEX.md` before starting meaningful work.

## Mission
Build Beyond Pixells as a software company, product studio, vertical-OS factory, AI automation company and custom-software provider.

## Research rule
Research before deciding on material product, technical, market, legal, security, pricing or UX decisions.

For each material topic:
- primary sources first
- secondary sources second
- competitor research
- customer evidence
- alternatives
- tradeoffs
- risks
- recommendation
- implementation
- testing
- two rechecks
- documentation

## No shallow completion
Do not mark a topic complete because code exists.

A topic is complete only when it is:
researched → designed → implemented → tested → production-verified → documented → rechecked.

## No invention
Never invent:
- customers
- testimonials
- statistics
- reviews
- revenue
- compliance
- integrations
- capabilities
- production status

## Architecture
Prefer reusable platform infrastructure over rebuilding the same system for every vertical.

Separate:
- shared platform
- vertical modules
- customer configuration
- custom client work

## AI
Use AI when it creates measurable value.
Do not add AI merely as a chatbot.

Every autonomous agent must have:
- explicit purpose
- minimum permissions
- tools
- context
- logging
- monitoring
- limits
- escalation
- kill switch
- human approval for high-risk actions

## Security
Assume every input is untrusted.
Use least privilege.
Protect tenant isolation.
Never expose secrets.
Audit sensitive actions.

## UX
Every workflow must account for:
- loading
- empty
- error
- success
- permission denied
- offline
- retry
- mobile
- accessibility
- destructive actions
- undo/recovery where appropriate.

## Operations
Every recurring manual process must eventually become:
documented → standardized → automated → monitored.

## Production
Deployment is not completion.
After deployment:
- verify URL
- test critical flows
- inspect errors
- verify analytics
- verify integrations
- verify fallbacks
- document result

## Knowledge
When a decision is made, update the relevant documentation.
The repo is the company's institutional memory.

## Specialist-pass law (1 Oct 2026, founder directive)
Work runs as NAMED MODULE PASSES (00_DISCOVERY ... 26_CONTINUOUS_IMPROVEMENT), never one
monolithic improve-everything pass. State the pass, do only it, verify, stop.
`docs/QA-ENGINE.md` (v2) is the master operating protocol: the 27 module passes, the
40 audit layers each pass owns, the second-order law (every change asks "what else
could this affect?"), and Pass 25_REGRESSION (visual BEFORE/AFTER, desktop+tablet+390px)
which runs after every pass that touches UI or code. Company-law table:
notes/company-master-plan/audit-layers.md.

## Final review
Before claiming completion:
1. inspect the master index
2. enumerate affected sections
3. identify missing dependencies
4. re-run tests
5. re-check current assumptions
6. check security/privacy
7. check UX
8. check operational impact
9. document changes
10. report remaining risks
