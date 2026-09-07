# Design System (CartIQ Deck Style)

The visual contract for every deck this skill builds. The canonical stylesheet lives in `references/starter/src/App.css`; this file documents the rules and the layout blocks so slides are consistent across decks.

## Color Palette

```css
:root {
  --paper: #faf9fb; /* background */
  --paper-2: #f3f1f5; /* subtle fill */
  --ink: #1c1028; /* text and dark fills */
  --muted: #80708f; /* captions, secondary text */
  --line: #dbd6e1; /* borders, dividers */
  --green: #2ba185; /* semantic: success / good */
  --green-bg: #e0f5ef;
  --amber: #d4953a; /* semantic: warning */
  --amber-bg: #fdf3e4;
  --red: #f55459; /* semantic: failure */
  --red-bg: #fde8e9;
  --purple: #6c5fc7; /* accent: icons, active states, progress */
  --purple-light: #b5aade;
  --purple-bg: #ede8f5;
  --slate: #80708f;
}
```

Semantic colors (`--green`, `--amber`, `--red`) only where the value carries meaning. Everything else uses ink, purple, or the categorical chart palette.

## Typography

One family everywhere: TikTok Sans (`TikTok+Sans:wght@400;500;600;700`). No Rubik, no Material icons.

- `h1`: `clamp(44px, 6vw, 84px)`, weight 800, letter-spacing `-0.02em`.
- `h2`: `clamp(30px, 3.6vw, 48px)`, weight 750.
- `.bignum`: `clamp(56px, 8vw, 116px)`, weight 800, letter-spacing `-0.03em`.
- Body/fact rows: 19px; captions: 17px; `.src` notes: 14px.

## Layout Blocks

### Big figures (`.bignum-row`)

Headline numbers instead of stat cards. Each block is a figure plus a one-line caption.

```css
.bignum {
  font-family: inherit;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  font-size: clamp(56px, 8vw, 116px);
}
.bignum small {
  font-size: 0.35em;
  font-weight: 600;
  letter-spacing: 0;
}
.bignum.green {
  color: var(--green);
}
.bignum.amber {
  color: var(--amber);
}
.bignum.red {
  color: var(--red);
}
.bignum-row {
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  margin: 26px 0 8px 0;
}
.bignum-block .cap {
  margin-top: 10px;
  font-size: 17px;
  color: var(--muted);
  max-width: 240px;
  line-height: 1.4;
}
```

### Icon-led fact rows (`.fact-list`)

Prefer these over card grids. Each row is a Phosphor icon (purple) and one concrete fact, separated by top borders.

```css
.fact-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0 0;
}
.fact-list li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 12px 0;
  border-top: 1px solid var(--line);
  font-size: 19px;
  line-height: 1.45;
}
.fact-list li i {
  font-size: 26px;
  color: var(--purple);
  margin-top: 2px;
}
.fact-list li.warn i {
  color: var(--amber);
}
```

### Three-zone diagram (`.hex`)

Three independent cards with floating divider icons. Never wrap them in one shared outer border.

```css
.hex {
  display: flex;
  align-items: stretch;
  gap: 14px;
  margin-top: 28px;
  background: none;
  border: none;
}
.hex .zone {
  padding: 26px 28px;
  flex: 1;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
}
.hex .zone.core {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
  flex: 1.25;
}
.hex .zone h3 {
  font-size: 20px;
  margin-bottom: 10px;
}
.hex .zone p,
.hex .zone li {
  font-size: 16.5px;
  line-height: 1.5;
}
.hex .zone ul {
  margin: 8px 0 0 0;
  padding-left: 20px;
}
.hex .arrow {
  display: flex;
  align-items: center;
  flex: none;
  align-self: center;
  background: none;
  padding: 0 2px;
  font-size: 30px;
  color: var(--purple);
}
```

### Phase strip (`.timeline`)

```css
.timeline {
  display: flex;
  margin-top: 30px;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
}
.timeline .wk {
  flex: 1;
  padding: 14px 12px;
  border-right: 1px solid var(--line);
  font-size: 13.5px;
  line-height: 1.35;
}
.timeline .wk:last-child {
  border-right: none;
}
.timeline .wk.done {
  background: var(--green-bg);
}
.timeline .wk.now {
  background: var(--ink);
  color: var(--paper);
}
.timeline .wk b {
  display: block;
  font-size: 14.5px;
  margin-bottom: 4px;
}
```

### Charts

```css
.chart-wrap {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 18px 6px 18px;
  max-width: 980px;
}
.src {
  margin-top: 16px;
  font-size: 14px;
  color: var(--muted);
}
```

### Cover metadata

```css
.cover-meta {
  margin-top: 26px;
  font-size: 20px;
  color: var(--muted);
}
```

## Slide Frame

- Slides absolute, centered, `padding: 48px 64px 96px 64px`, opacity transition `0.35s`.
- `.slide-content` max-width `1120px`.
- `fadeUp` keyframe (`translateY(14px)` -> 0) staggered via `.anim > *:nth-child(n)`.

## Navigation

- Fixed bottom, centered, transparent (no border or background), `gap: 14px`.
- Buttons: 40px round, `1px solid var(--line)`, white fill, ink icon.
- Order: fullscreen toggle, prev, dots, next, counter.
- `.dots button` 10px; active `.on` 26px purple pill.
- `.progress` top bar, 4px, purple, width = `(cur+1)/total`.

## Icons

Phosphor via unpkg: `<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>` and `<i class="ph ph-<kebab>"></i>`. Verify every name against phosphoricons.com; a wrong name renders an empty box.

## Explicitly Out

- Rubik and Material Symbols.
- Eyebrow/tag pills above headings.
- Subtitle paragraphs under headings.
- Mini stat cards for headline figures.
- Sentry logo, glyph watermark, `glyph-watermark` markup.
- Any color token outside the palette above.
