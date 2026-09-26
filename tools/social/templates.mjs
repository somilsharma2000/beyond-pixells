// Beyond Pixells — brand-styled image post templates (satori, no JSX).
// Design tokens follow docs/DESIGN_LANGUAGE.md v4 (Chrome Violet):
//   app-true palette: canvas #0A0E29 · blue #0066FF family · green #21C45D (matches my-gym-os)
//   Space Grotesk (display) + Plus Jakarta Sans (body)
// Each template is (data, fonts) => element-tree. Rendered by render.mjs.

export const TOKENS = {
  canvas: "#0A0E29",
  ink: "#F1F5F9",
  violet1: "#4D94FF",   // bright accent blue
  violet2: "#0066FF",   // app primary
  violet3: "#0052CC",   // deep blue
  gold: "#21C45D",      // app success green
  goldSoft: "#9CC0FF",  // soft light blue
  muted: "#94A3B8",
  surface: "#141833",
  elevated: "#242842",
  border: "#272C49",
  muted: "rgba(244,242,255,0.66)",
  border: "rgba(0,102,255,0.32)",
};

const display = (size, weight = 700, extra = {}) => ({
  fontFamily: "Space Grotesk",
  fontSize: size,
  fontWeight: String(weight),
  color: TOKENS.ink,
  ...extra,
});

const body = (size, weight = 500, extra = {}) => ({
  fontFamily: "Inter",
  fontSize: size,
  fontWeight: String(weight),
  ...extra,
});

// Shared chrome-violet backdrop: near-black canvas, violet glow blooms, grain-free
function backdrop(children, { w = 1080, h = 1350, glow = true } = {}) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: TOKENS.canvas,
        position: "relative",
        padding: 0,
      },
      children: [
        ...(glow
          ? [
              {
                type: "div",
                props: {
                  style: {
                    position: "absolute",
                    top: -180,
                    left: -120,
                    width: 620,
                    height: 620,
                    borderRadius: 620,
                    background: `radial-gradient(circle, rgba(0,102,255,0.40) 0%, rgba(0,82,204,0.16) 45%, transparent 70%)`,
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    position: "absolute",
                    bottom: -220,
                    right: -140,
                    width: 700,
                    height: 700,
                    borderRadius: 700,
                    background: `radial-gradient(circle, rgba(77,148,255,0.28) 0%, rgba(0,82,204,0.12) 45%, transparent 70%)`,
                  },
                },
              },
            ]
          : []),
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              padding: "88px 84px 76px 84px",
              position: "relative",
            },
            children,
          },
        },
      ],
    },
  };
}

function brandmark() {
  return {
    type: "div",
    props: {
      style: { display: "flex", alignItems: "center", gap: 16, ...body(26, 700) },
      children: [
        {
          type: "div",
          props: {
            style: {
              width: 40,
              height: 40,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${TOKENS.violet1}, ${TOKENS.violet2} 55%, ${TOKENS.violet3})`,
              color: TOKENS.ink,
              ...display(22, 700),
            },
            children: "BP",
          },
        },
        { type: "div", props: { style: { color: TOKENS.muted, ...body(26, 600) }, children: "Beyond Pixells" } },
      ],
    },
  };
}

// ---- Template: STAT CARD (weekly product/social post, 1080×1350) ----
// Rule: only real, verifiable numbers — never invent metrics.
export function statCard({ headline, stat, statLabel, footnote }, fonts) {
  return backdrop(
    [
      brandmark(),
      {
        type: "div",
        props: {
          style: { display: "flex", flexDirection: "column", gap: 34 },
          children: [
            {
              type: "div",
              props: {
                style: {
                  ...display(74, 700, { lineHeight: 1.08 }),
                  background: `linear-gradient(120deg, #FFFFFF 12%, ${TOKENS.violet1} 58%, ${TOKENS.violet2} 96%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                },
                children: headline,
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  padding: "36px 44px",
                  borderRadius: 32,
                  border: `2px solid ${TOKENS.border}`,
                  background: "linear-gradient(160deg, rgba(139,92,246,0.14), rgba(6,6,13,0.4))",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: display(120, 700, { lineHeight: 1, color: TOKENS.goldSoft }),
                      children: stat,
                    },
                  },
                  { type: "div", props: { style: body(30, 600, { color: TOKENS.muted }), children: statLabel } },
                ],
              },
            },
          ],
        },
      },
      footnote
        ? { type: "div", props: { style: body(24, 500, { color: "rgba(244,242,255,0.5)" }), children: footnote } }
        : { type: "div", props: { style: { height: 1 } } },
    ],
    { w: 1080, h: 1350 }
  );
}

// ---- Template: HOOK CARD (product announcement, 1080×1350) ----
export function hookCard({ badge, headline, sub, cta }, fonts) {
  return backdrop(
    [
      brandmark(),
      {
        type: "div",
        props: {
          style: { display: "flex", flexDirection: "column", gap: 40, alignItems: "flex-start" },
          children: [
            badge
              ? {
                  type: "div",
                  props: {
                    style: {
                      ...body(26, 700, { color: TOKENS.goldSoft }),
                      border: `2px solid rgba(255,149,0,0.5)`,
                      borderRadius: 999,
                      padding: "12px 28px",
                      backgroundColor: "rgba(255,149,0,0.08)",
                    },
                    children: badge,
                  },
                }
              : { type: "div", props: { style: { height: 1 } } },
            {
              type: "div",
              props: {
                style: {
                  ...display(88, 700, { lineHeight: 1.06 }),
                  background: `linear-gradient(120deg, #FFFFFF 12%, ${TOKENS.violet1} 58%, ${TOKENS.violet2} 96%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                },
                children: headline,
              },
            },
            sub ? { type: "div", props: { style: body(34, 500, { color: TOKENS.muted, lineHeight: 1.5 }), children: sub } } : { type: "div", props: { style: { height: 1 } } },
          ],
        },
      },
      {
        type: "div",
        props: {
          style: {
            ...body(32, 700, { color: TOKENS.ink }),
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "24px 40px",
            borderRadius: 20,
            background: `linear-gradient(135deg, ${TOKENS.gold}, ${TOKENS.goldSoft})`,
            color: "#FFFFFF",
          },
          children: [cta, " →"],
        },
      },
    ],
    { w: 1080, h: 1350 }
  );
}

// ---- Template: OG IMAGE (1200×630) for the brand hub ----
export function ogHub({ title, tagline, url }) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: TOKENS.canvas,
        padding: "72px 84px 56px 84px",
        position: "relative",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: -220,
              right: -160,
              width: 640,
              height: 640,
              borderRadius: 640,
              background: `radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,20,112,0.2) 45%, transparent 70%)`,
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: -260,
              left: -120,
              width: 560,
              height: 560,
              borderRadius: 560,
              background: `radial-gradient(circle, rgba(255,149,0,0.16) 0%, transparent 65%)`,
            },
          },
        },
        brandmark(),
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 22, position: "relative" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    ...display(84, 700, { lineHeight: 1.05 }),
                    background: `linear-gradient(120deg, #FFFFFF 12%, ${TOKENS.violet1} 58%, ${TOKENS.violet2} 96%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  },
                  children: title,
                },
              },
              {
                type: "div",
                props: {
                  style: body(31, 500, { color: TOKENS.muted }),
                  children: tagline,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", ...body(24, 600, { color: "rgba(244,242,255,0.45)" }) },
            children: [
              { type: "div", props: { children: url } },
              { type: "div", props: { children: "somilsharma2000.github.io/beyond-pixells" } },
            ],
          },
        },
      ],
    },
  };
}



/* productFrame — presents the product itself as content.
   App-true mini dashboard frame + stat callout. Fields:
   badge, headline, kpiValue, kpiLabel, feed (array of 3 strings), cta */
const E = (children, style) => ({ type: "div", props: { style: { display: "flex", ...style }, children: children ?? undefined } });
const S = (children, style) => ({ type: "span", props: { style, children: children ?? undefined } });

export function productFrame({ badge, headline, kpiValue, kpiLabel, feed, cta }) {
  const bars = [38, 55, 42, 70, 50, 82, 60, 90, 46, 74];
  const feedItems = (feed && feed.length ? feed : [
    "Payment received — Priya S. · ₹18,500 · UPI",
    "Renewal link sent — Rahul M. · WhatsApp",
    "QR check-in — Amit J. · Day 12 streak",
  ]);
  const frame = E([
    // window chrome
    E([
      E(undefined, { width: 10, height: 10, borderRadius: 99, background: "#FF5F57" }),
      E(undefined, { width: 10, height: 10, borderRadius: 99, background: "#FEBC2E" }),
      E(undefined, { width: 10, height: 10, borderRadius: 99, background: "#21C45D" }),
      S("my-gym-os.base44.app", { ...body(18, 500, { color: TOKENS.muted }), marginLeft: 10 }),
      S("● Live", { ...body(17, 600, { color: "#21C45D" }), marginLeft: "auto" }),
    ], { display: "flex", alignItems: "center", gap: 8, padding: "14px 18px",
         borderBottom: `1px solid ${TOKENS.border}`, background: TOKENS.surface }),
    // body
    E([
      // sidebar
      E([
        S("Gym OS", { ...display(26, 700, { color: "#FFFFFF" }) }),
        S("Owner view", { ...body(16, 500, { color: TOKENS.muted, marginTop: 2 }) }),
        ...["Dashboard", "Members", "Payments", "Leads", "WhatsApp", "Reports"].map((t, i) =>
          E([
            E(undefined, { width: 8, height: 8, borderRadius: 2, background: i === 0 ? "#0066FF" : TOKENS.border }),
            S(t, { ...body(15, 600, { color: i === 0 ? "#4D94FF" : TOKENS.muted }) }),
          ], { display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8,
               background: i === 0 ? "rgba(0,102,255,.12)" : "transparent" })),
      ], { width: 190, padding: "18px 14px", display: "flex", flexDirection: "column", gap: 12,
           borderRight: `1px solid ${TOKENS.border}`, background: TOKENS.surface }),
      // main
      E([
        E([
          E([
            S(kpiLabel, { ...body(14, 600, { color: TOKENS.muted }) }),
            S(kpiValue, { ...display(40, 700, { color: "#FFFFFF", marginTop: 4 }) }),
            S("+12% vs yesterday", { ...body(14, 600, { color: "#21C45D", marginTop: 4 }) }),
          ], { flex: 1, background: "rgba(0,102,255,.10)", border: "1px solid rgba(0,102,255,.35)", borderRadius: 12, padding: "12px 14px" }),
          ...[["Active members", "486"], ["Auto-renewals", "37"], ["On the floor", "84"]].map(([l, v]) =>
            E([
              S(l, { ...body(14, 600, { color: TOKENS.muted }) }),
              S(v, { ...display(40, 700, { color: TOKENS.ink, marginTop: 4 }) }),
            ], { flex: 1, background: TOKENS.surface, border: `1px solid ${TOKENS.border}`, borderRadius: 12, padding: "12px 14px" })),
        ], { display: "flex", gap: 12 }),
        E(feedItems.map((t) =>
          E([
            E(undefined, { width: 8, height: 8, borderRadius: 99, background: "#21C45D" }),
            S(t, { ...body(15, 600, { color: TOKENS.ink }) }),
          ], { display: "flex", alignItems: "center", gap: 10, background: TOKENS.surface,
               border: `1px solid ${TOKENS.border}`, borderRadius: 10, padding: "9px 12px" })),
          { display: "flex", flexDirection: "column", gap: 8 }),
        E(bars.map((h) =>
          E(undefined, { flex: 1, height: `${h}%`, borderRadius: "6px 6px 2px 2px",
               background: "linear-gradient(180deg, #4D94FF, #0052CC)" })),
          { display: "flex", alignItems: "flex-end", gap: 10, height: 120, marginTop: 2 }),
      ], { flex: 1, padding: 18, display: "flex", flexDirection: "column", gap: 14, background: "#0D1230" }),
    ], { display: "flex" }),
  ], { display: "flex", flexDirection: "column", marginTop: 36, width: 860, borderRadius: 18,
       border: `1px solid ${TOKENS.border}`, background: "#0D1230",
       boxShadow: "0 24px 70px rgba(0,0,0,.55), 0 0 60px rgba(0,102,255,.14)" });

  return backdrop([
    brandmark(),
    E([S(badge, { ...body(20, 700, { color: TOKENS.goldSoft, letterSpacing: "0.18em", textTransform: "uppercase" }) })], { display: "flex" }),
    E([S(headline)], { ...display(64, 900, { lineHeight: 1.12, color: TOKENS.ink }) }),
    frame,
    E([E([S(cta, { ...body(22, 700, { color: "#FFFFFF" }) })],
       { display: "flex", padding: "16px 34px", borderRadius: 999,
         background: "linear-gradient(135deg, #0066FF, #0052CC)" })],
       { display: "flex", justifyContent: "center", marginTop: 40 }),
  ], { w: 1080, h: 1350 });
}

export const TEMPLATES = { statCard, hookCard, ogHub, productFrame };
