Topic: Gym OS landing parity with the live product app (my-gym-os.base44.app)
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: product marketing + frontend (blueprint §63, §25)
Question: Should the landing showcase show the real app UI, and what breaks when it does?
Method: loaded the live app (owner screenshot reviewed: navy #0b1022/#111827 dashboard, royal blue #2563eb accent, slate #1f2937 borders, Inter-family type, sidebar nav Dashboard->Analytics, top bar with branch dropdown + notifications badge + avatar, Dashboard title + tabs + Add Member/Log Payment/Add Lead buttons, KPI set Active Members/Revenue/Leads/Check-ins/Pending/Upcoming). Rebuilt the laptop mockup as a faithful CSS recreation; shifted landing tokens to the app palette.
Decision: landing showcase = real app recreation (v7.1 APP PARITY); Daylight Glass light screen retired.
Bug found during verification (important): Gym OS page scroll was LOCKED — window.scrollTo/wheel/body.scrollTop all no-op. Root cause chain: (1) <body class="bp-noise-canvas"> reused a fixed-overlay class on the body element, pinning the whole page position:fixed; (2) body{overflow-x:hidden} also propagates to the viewport (replaced with overflow-x:clip on both flagships). Fix verified live: scrollY moves, showcase renders with all app elements (measured #2563eb nav, #ef4444 badge, #111827 sidebar, #0b1022 screen). Grain preserved via proper <div class="ov-grain"> overlay.
Lesson (MACHINE): never apply overlay utility classes (fixed/inset positioning) to <body>; prefer overflow-x:clip over overflow-x:hidden on body; test scroll programmatically (scrollY assertion) in every render smoke test, not just top-of-page screenshots.
Security: none. Privacy: none. Legal: none.
