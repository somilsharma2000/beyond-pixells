Topic: Estate-wide rebrand to founder's bp logo palette (v7 Blue Pixel)
Date: 2026-09-26
Research owner: lead agent (beyond)
Business area: brand identity (blueprint §9)
Question: How to apply a founder-supplied logo's exact colors consistently across every shared asset without missing any hardcoded violet value?
Method: downloaded logo PNG, isolated foreground pixels (background/badge excluded, threshold sum<550), counted exact hex frequency -> #1D4BC4 (14.7%+ combined blue cluster) and #0A1C40 (dominant navy cluster). Computed HSL hue of target (~222.5deg). Built an automated colorsys-based hue-shift: any hex/rgba with hue in violet/purple/magenta range (232-305deg) and saturation >6% rotated to the target hue, preserving lightness/alpha; greys/blacks/whites/cyan/emerald left alone (outside range, by design — those are status colors, not brand accent).
Primary sources: user-supplied logo PNG (a4e38ae85_logo.png)
Current best practice: single hue-rotation script > manual hex mapping — catches every literal including ones not anticipated, verified zero old-violet hexes remained afterward by re-scanning.
Recommended approach: applied to bp-design-system.css, bp-obsidian-veins.css/.js, bp-effects-kit.css, hub index.html, and Gym OS's own index.html (had local overrides: a violet raster hero texture + inline Daylight Glass showcase hexes) — both fixed.
Decision: v7 Blue Pixel locked; supersedes v4 Chrome Violet / v6 Obsidian Glow's hue (structure/canvas approach from v6 kept, only hue changed).
Tradeoffs: Dentist OS / Builder OS / 8 client sites not individually re-verified this pass (inherit via CDN automatically for shared files, but any of their own local violet overrides, if present, would need the same treatment).
Risks: none — reversible, git history retains prior violet state.
Security: none. Privacy: none. Legal: none.
