# Tech Stack Library — Installed 26 Sep 2026

Every repo on the founder's list: what it is, install status, and how it serves Beyond Pixells.
Install method: npm devDependencies in this repo (`package.json`), shallow clones for template repos,
vendored runtime files in `assets/vendor/`. node_modules is gitignored; Pages deploys stay static.

## Wired in and shipping today

| Repo | What it is | Status | How it helps us |
|---|---|---|---|
| **lucide-icons/lucide** | 1500+ serious stroke icons | ✅ Installed + **live** — replaced emoji icons on the hub | Emoji icons read childish; lucide gives professional, consistent icons everywhere |
| **microsoft/playwright** | Real-browser end-to-end testing | ✅ Installed + **wired** — `tests/render-check.mjs` (`npm run test:render`) | Codifies the "dull page" lesson: every deploy is render-verified for effects, objects, JS errors |
| **stylelint/stylelint** | CSS quality rules | ✅ Installed + **wired** — `npm run lint:css`, runs in pre-commit hook | Catches broken CSS before it ships |
| **eslint/eslint** | JS quality rules | ✅ Installed + **wired** — `npm run lint` | Catches broken JS before it ships |
| **typicode/husky** | Git hooks | ✅ Installed + **wired** — pre-commit lints, commit-msg enforces commit style | Bad code and sloppy commits can no longer land |
| **conventional-changelog/commitlint** | Disciplined commit messages | ✅ Installed + **wired** | Our git log becomes a readable changelog |
| **changesets/changesets** | Versioned releases with changelogs | ✅ Installed (`npx changeset`) | When the design system version bumps, we get real release notes |
| **chartjs/Chart.js** | Fast, simple charts | ✅ Installed + **vendored** `assets/vendor/chart.umd.min.js` | OS dashboards (Gym/Dentist/Builder) get real charts with one script tag — no build step |
| **greensock/GSAP** | The professional animation standard | ✅ Installed + **vendored** `assets/vendor/gsap.min.js` | Premium scroll/story animations when our custom kit isn't enough |
| **tsparticles/tsparticles** | Particle backgrounds | ✅ Installed + **vendored** `assets/vendor/tsparticles.slim.bundle.min.js` | Interactive particle fields for hero sections, ready when we want them |

## Installed — ready for the Next.js graduation

These need a component framework. They sit in package.json now, and snap into place the day an OS product moves from GitHub Pages to a real app stack.

| Repo | What it is | Status | How it helps us |
|---|---|---|---|
| **vercel/next.js** | Our exact future stack | ✅ Installed | The graduation path: SEO-grade product sites with server rendering |
| **react/react** | React itself (repo moved to its own org) | ✅ Installed | The component model all below libraries assume |
| **vercel/commerce** | Complete production storefront on Next.js | ✅ Shallow-cloned to `work/reference/commerce` | Textbook for the day we build checkout flows (Gym OS billing, Bloomwire) |
| **shadcn-ui/ui** | The best-taste component library (copy-in, not npm) | ✅ Shallow-cloned to `work/reference/ui` | We already follow its conventions in artifacts; the repo is the source of taste |
| **radix-ui/primitives** | Accessible headless components | ✅ Installed (umbrella `radix-ui`) | Drop-in accessible dropdowns/dialogs/tabs for future app UIs |
| **tailwindlabs/tailwindcss** | Utility CSS | ✅ Installed | Our canon colors map 1:1 onto Tailwind tokens when we migrate |
| **tailwindlabs/heroicons** | Clean, restrained icons | ✅ Installed (`@heroicons/react`) | Second icon set matching restraint, for app UIs |
| **motiondivision/motion** | Framer Motion's successor — crown-class animation | ✅ Installed | The animation engine for React-based pages |
| **mrdoob/three.js** + **pmndrs/react-three-fiber** + **pmndrs/drei** | Real 3D in the browser, as React components | ✅ Installed | True 3D chrome objects (the reference aesthetic, fully) when a hero deserves WebGL |
| **storybookjs/storybook** | Component documentation | ✅ Installed (`storybook` + `@storybook/html`) | Every design-system component documented visually; scaffold with our first documented component set |
| **semantic-release/semantic-release** | Fully automated releases | ✅ Installed (needs CI) | Pairs with commitlint: tags + releases generate themselves in GitHub Actions |

## Installed — visualization power for dashboards

| Repo | What it is | Status | How it helps us |
|---|---|---|---|
| **d3/d3** | The grammar everything else copies | ✅ Installed | Full control when a client dashboard needs something Chart.js can't do |
| **airbnb/visx** | D3 power inside React | ✅ Installed (core set) | Gym OS analytics screens, React-style |
| **observablehq/plot** | Concise chart language | ✅ Installed | Fast exploratory charts during research |
| **plotly/plotly.js** | Financial-grade charts | ✅ Installed | FORTREX-style financial charts if that line revives |

## Installed — creative engine

| Repo | What it is | Status | How it helps us |
|---|---|---|---|
| **processing/p5.js** | Creative coding | ✅ Installed | Teaches visual thinking through code; generative brand art |
| **pixijs/pixijs** | Fast 2D graphics | ✅ Installed | High-performance 2D scenes (60fps canvases) |

## Study systems — reference, not dependency

| Repo | What it is | Status | How it helps us |
|---|---|---|---|
| **material-components/material-components-web** | Google Material | ✅ Installed | Textbook on design tokens — informs how bp-design-system tokens are structured |
| **carbon-design-system/carbon** | IBM's design system | ✅ Installed (`@carbon/react`) | The best-documented system in existence; our docs/ structure studies it |
| **microsoft/fluentui** | Microsoft's design language, fully open | ✅ Installed | Third canonical reference for system design |
| **terkelg/awesome-creative-coding** | Curated learning index | 📚 Reference link | Study index for the visual-effects kit's future patterns |
| **alexpate/awesome-design-systems** | Design systems side by side | 📚 Reference link | Compare ours against the world's best |

## Estate-specific notes

- Our current estate is static HTML on GitHub Pages — React-runtime libraries cannot execute there.
  That's why the **runtime layer is vendored** (chart.js, gsap, tsparticles in `assets/vendor/`)
  and the pattern layer is ported (`assets/bp-effects-kit.css/.js`).
- `npm run test:render` is the gate: effects visible at rest, key objects present, zero JS errors.
- Next step when ready: scaffold Storybook against `bp-design-system.css` + effects kit, and graduate
  the OS product sites to Next.js with shadcn conventions + our Chrome Violet tokens.
