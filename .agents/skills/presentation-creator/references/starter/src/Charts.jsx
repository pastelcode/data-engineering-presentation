import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const INK = "#1c1028";
export const CAT_BLUE = "#4e79a7";
export const CAT_ORANGE = "#f28e2b";
export const CAT_GRAY = "#bab0ac";
export const GREEN = "#2ba185";
export const AMBER = "#d4953a";
export const SLATE = "#80708f";
export const GRID = "#dbd6e1";

// REPLACE with real, cited data from the source content.
export function SampleChart() {
  const data = useMemo(
    () => [
      { label: "A", serie: 100, serie2: 80 },
      { label: "B", serie: 95, serie2: 70 },
      { label: "C", serie: 87, serie2: 60 },
    ],
    [],
  );
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={290}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 16, bottom: 0, left: -8 }}
          barGap={6}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: INK, fontSize: 14 }}
            axisLine={{ stroke: SLATE }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: INK, fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="serie"
            name="Serie A"
            fill={CAT_BLUE}
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="serie2"
            name="Serie B"
            fill={CAT_ORANGE}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
