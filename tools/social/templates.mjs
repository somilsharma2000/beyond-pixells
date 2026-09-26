// Beyond Pixells — brand-styled image post templates (satori, no JSX).
// Design tokens follow docs/DESIGN_LANGUAGE.md v4 (Chrome Violet):
//   canvas #06060D · violet chrome #8B5CF6→#6D28D9→#3B1470 · gold #FF9500
//   Space Grotesk (display) + Plus Jakarta Sans (body)
// Each template is (data, fonts) => element-tree. Rendered by render.mjs.

export const TOKENS = {
  canvas: "#06060D",
  ink: "#F4F2FF",
  violet1: "#8B5CF6",
  violet2: "#6D28D9",
  violet3: "#3B1470",
  gold: "#FF9500",
  goldSoft: "#FFB86B",
  muted: "rgba(244,242,255,0.66)",
  border: "rgba(139,92,246,0.32)",
};

const display = (size, weight = 700, extra = {}) => ({
  fontFamily: "Space Grotesk",
  fontSize: size,
  fontWeight: String(weight),
  color: TOKENS.ink,
  ...extra,
});

const body = (size, weight = 500, extra = {}) => ({
  fontFamily: "Plus Jakarta Sans",
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
                    background: `radial-gradient(circle, rgba(109,40,217,0.55) 0%, rgba(59,20,112,0.22) 45%, transparent 70%)`,
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
                    background: `radial-gradient(circle, rgba(139,92,246,0.34) 0%, rgba(59,20,112,0.18) 45%, transparent 70%)`,
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
            color: "#241000",
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

export const TEMPLATES = { statCard, hookCard, ogHub };
