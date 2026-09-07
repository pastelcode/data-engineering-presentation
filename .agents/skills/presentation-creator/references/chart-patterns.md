# Chart Patterns (CartIQ Deck Style)

Recharts guidance for this style. Charts only appear on slides backed by real, cited data. Every chart slide ends with a `.src` note naming the source.

## Color Constants

```javascript
export const INK = "#1c1028";
export const CAT_BLUE = "#4e79a7"; // primary categorical series
export const CAT_ORANGE = "#f28e2b"; // secondary categorical series
export const CAT_GRAY = "#bab0ac"; // tertiary / muted categorical
export const GREEN = "#2ba185"; // semantic: good / success
export const AMBER = "#d4953a"; // semantic: warning
export const SLATE = "#80708f"; // axes, labels, tooltips
export const GRID = "#dbd6e1"; // grid lines
```

Rule of thumb: if two colors could be swapped without losing information, they are categorical (`CAT_*`). If swapping would change the meaning, use semantic (`GREEN`, `AMBER`, and `--red` `#f55459`).

## Shared Configuration

```javascript
const ax = {
  axisLine: { stroke: SLATE },
  tickLine: false,
  tick: { fill: INK, fontSize: 13 },
};
const grid = { strokeDasharray: "3 3", stroke: GRID, vertical: false };
```

## Bar Chart (grouped)

```jsx
<div className="chart-wrap">
  <ResponsiveContainer width="100%" height={290}>
    <BarChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: -8 }} barGap={6}>
      <CartesianGrid {...grid} />
      <XAxis dataKey="label" {...ax} />
      <YAxis {...ax} unit="%" />
      <Tooltip formatter={(v) => `${v}%`} />
      <Legend />
      <Bar dataKey="a" name="Series A" fill={CAT_BLUE} radius={[6, 6, 0, 0]} />
      <Bar dataKey="b" name="Series B" fill={CAT_ORANGE} radius={[6, 6, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>
<div className="src">Source note, date, and the decision it supports.</div>
```

## Bar Chart (single series)

Use one categorical color uniformly for all bars of the same metric. Do not alternate colors per bar.

```jsx
<Bar dataKey="value" fill={CAT_BLUE} radius={[6, 6, 0, 0]} />
```

Semantic colors on bars only when the value itself is good/bad/warning (e.g. a critical ceiling marked in `--red`).

## Data Generation

- Wrap generated data in `useMemo`.
- Every data point must come from the source content. No interpolation, extrapolation, or rounding to make a chart prettier.
- Grouped bar `height` 290; single bar 270-300; side-by-side 260-300; sparkline 80-120.
- Always `ResponsiveContainer` with `width="100%"` and an explicit height.

## What Not To Do

- Do not create a chart when the source has no numbers. Use `.bignum`, `.fact-list`, `.hex`, or `.timeline`.
- Do not render a chart slide without its `.src` note.
- Do not use Material icons or Rubik in chart markup, tooltips, or legends.
