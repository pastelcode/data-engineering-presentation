---
name: presentation-creator
description: Create data-driven presentation slides using React, Vite, and Recharts in the CartIQ deck style (TikTok Sans, Phosphor icons, oversized figures, icon-led fact rows, no tags/subtitles/mini-cards). Use when asked to "create a presentation", "build slides", "make a deck", "create a data presentation". Scaffolds a complete slide app with charts, animations, and single-file HTML output.
---

# Presentation Builder

Interactive, data-driven slides in React + Vite + Recharts, built to the visual contract of the reference deck (see `references/design-system.md`) and emitted as a single distributable HTML file.

The default style, without exceptions:

- One font family for headings, body, and figures (TikTok Sans).
- Phosphor icons (`<i class="ph ph-<kebab>">`), never Material.
- Oversized figures (`.bignum`) instead of mini stat cards.
- Icon-led fact rows (`.fact-list`) instead of card grids.
- No eyebrow/tag pills above headings. No subtitles under headings. No Sentry logo or watermark.
- Every chart carries a `.src` source note and uses only real data.

## Step 1: Gather Requirements

Ask the user:

1. Topic.
2. Slide count (5-8 typical; 14+ for 30-minute talks).
3. Data and charts available (time series, comparisons, diagrams).
4. Narrative arc (problem -> solution, before -> after, technical deep-dive).
5. Any deliberate deviation from the default style. If none is given, use the default above.

### Data Assessment (CRITICAL)

Only render Recharts visualizations where the source content contains **real quantitative data** (numbers, percentages, measurements, series, metrics). Never fabricate, estimate, or round to make a chart prettier.

- Has real data -> chart.
- No real data -> use `.bignum`, `.fact-list`, `.hex`, or `.timeline` layouts instead. A chart with invented numbers is worse than no chart.

If no slide needs a chart, do not create `Charts.jsx` and do not add Recharts.

## Step 2: Scaffold

Copy `references/starter/` as the starting point. Do not hand-write the shell.

Install headless with pnpm (never mix npm and pnpm in one project):

```
pnpm install --ignore-workspace --ignore-scripts && pnpm run dev
```

`--ignore-workspace` keeps the deck outside the parent workspace; `--ignore-scripts` skips the interactive build-approval prompt (the esbuild binary still resolves through its optional `@esbuild/*` package, so `vite build` works).

## Step 3: Slide System

Slides are an array of functions returning JSX:

```jsx
const SLIDES = [
  () => ( /* Title slide */ ),
  () => ( /* Content slide */ ),
];
```

Every slide follows this structure, in order:

1. An `<h1>` on the title slide, `<h2>` everywhere else. An optional Phosphor icon may precede the heading text.
2. Main content using one of the layout blocks below.
3. No eyebrow/tag pills. No subtitle paragraphs. No logo, no watermark.

### Layout blocks (from `references/design-system.md`)

Use these instead of card grids and tag labels:

```jsx
{
  /* Oversized figures. Semantic color only when the value means something. */
}
<div className="bignum-row">
  <div className="bignum-block">
    <div className="bignum green">
      97.6<small>%</small>
    </div>
    <div className="cap">One-line caption that adds information.</div>
  </div>
</div>;

{
  /* Icon-led fact rows. Icon name must be a valid Phosphor kebab-case name. */
}
<ul className="fact-list">
  <li>
    <i className="ph ph-check-circle"></i> A concrete fact.
  </li>
  <li className="warn">
    <i className="ph ph-warning-circle"></i> A warning fact.
  </li>
</ul>;

{
  /* Three independent cards with floating dividers (adapters -> core -> ports). */
}
<div className="hex">
  <div className="zone">
    <h3>Left</h3>
    <p>Body.</p>
  </div>
  <div className="arrow">
    <i className="ph ph-arrow-right"></i>
  </div>
  <div className="zone core">
    <h3>Center</h3>
    <p>Body.</p>
  </div>
  <div className="arrow">
    <i className="ph ph-arrow-right"></i>
  </div>
  <div className="zone">
    <h3>Right</h3>
    <p>Body.</p>
  </div>
</div>;

{
  /* Phase strip. `.done` = past, `.now` = present. */
}
<div className="timeline">
  <div className="wk done">
    <b>W1</b>Label
  </div>
  <div className="wk now">
    <b>W2</b>Label
  </div>
  <div className="wk">
    <b>W3</b>Label
  </div>
</div>;
```

### Title slide

```jsx
() => (
  <>
    <h1>
      Deck title <i className="ph ph-basket"></i>
    </h1>
    <div className="cover-meta">Authors — Date — Cut-off line</div>
    <div className="bignum-row">{/* 2-3 headline figures */}</div>
  </>
);
```

### Navigation

Keyboard: ArrowRight/Space next, ArrowLeft prev, `F` toggles fullscreen (synced with `Esc`). Bottom nav floats transparently, ordered: fullscreen toggle, prev, dots, next, counter. The exact `App()` and `Nav()` implementations are in `references/starter/src/App.jsx`; copy them unchanged.

## Step 4: Charts (Only With Real Data)

Put chart components in `Charts.jsx`. Use `ResponsiveContainer` with an explicit height inside `.chart-wrap`. Wrap data in `useMemo`.

Color constants (import from `Charts.jsx`):

```javascript
export const INK = "#1c1028";
export const CAT_BLUE = "#4e79a7"; // categorical: primary series
export const CAT_ORANGE = "#f28e2b"; // categorical: secondary series
export const CAT_GRAY = "#bab0ac"; // categorical: tertiary / muted
export const GREEN = "#2ba185"; // semantic: good / success
export const AMBER = "#d4953a"; // semantic: warning
export const SLATE = "#80708f"; // axes / labels
export const GRID = "#dbd6e1";
```

Rule: categorical for neutral groupings, semantic only where the color carries meaning. Tick/axis fill is `INK`, grid stroke is `GRID`.

Under every chart slide, add a `.src` note naming the source:

```jsx
<div className="src">
  data-quality-assessment.md 2026-07-31 — threshold: 70%.
</div>
```

## Step 5: Style

Apply the CSS from `references/starter/src/App.css` as the canonical stylesheet. Do not redesign spacing, radii, sizes, or the color tokens. Key tokens:

- Background `#faf9fb`, ink `#1c1028`, muted `#80708f`, border `#dbd6e1`, purple `#6c5fc7`.
- Headings: TikTok Sans, h1 `clamp(44px,6vw,84px)` weight 800, h2 `clamp(30px,3.6vw,48px)` weight 750.
- `.bignum` `clamp(56px,8vw,116px)` weight 800.
- Slide content max-width `1120px`; slides centered with `padding: 48px 64px 96px`.
- Nav buttons `40px` round, purple progress bar, `fadeUp` staggered animations.

## Step 6: Common Slide Patterns

- **Title** — h1 + `.cover-meta` + `.bignum-row`.
- **Headline figures** — `.bignum-row` with 2-3 figures and one-line captions.
- **Hallazgos / learnings** — `.bignum-row` with a couple of key numbers, then `.fact-list` of concrete findings.
- **Technical stack / layers** — `.fact-list` with one icon row per layer.
- **Three-zone architecture** — `.hex` with floating `ph-arrow-right` dividers.
- **Roadmap / timeline** — `.timeline` strip with `.done`/`.now` states plus a `.bignum-row`.
- **Chart slide** — `.chart-wrap` chart + `.src` note + optional `.bignum-row` below.
- **Closing / bridge** — `.bignum-row` for what is next, `.fact-list` for the two concrete next actions. No "questions?" phrasing.

## Step 7: Iterate and Build

1. `pnpm install --ignore-workspace --ignore-scripts && pnpm run dev`
2. Iterate on data models and layout.
3. Build: `pnpm run build` -> single `dist/index.html`.

## Pre-Build Checklist

- [ ] `dist/index.html` contains zero matches for Rubik, Material Symbols, "glyph-watermark", or a category tag class.
- [ ] Fonts: one family across headings, body, `.bignum`; exactly one font link in `index.html`.
- [ ] Icons: Phosphor only; every kebab-case name verified against phosphoricons.com.
- [ ] No pills/eyebrows, no subtitles under headings, no mini stat cards.
- [ ] No Sentry logo or watermark.
- [ ] Every chart has a `.src` source note and only real, cited data; categorical vs semantic colors applied correctly.
- [ ] Nav: dots count equals slide count; fullscreen button + `F` + `Esc` work.
- [ ] `pnpm run build` green; single `dist/index.html`; no npm artifacts (`package-lock.json` absent).

## Output Expectations

- Keyboard-navigable deck (arrows/space + `F` fullscreen).
- Default CartIQ deck style (TikTok Sans, Phosphor, `.bignum`/`.fact-list`/`.hex`/`.timeline`, no tags/subtitles/logos).
- Recharts only for slides with real quantitative data.
- Single distributable `dist/index.html`.
