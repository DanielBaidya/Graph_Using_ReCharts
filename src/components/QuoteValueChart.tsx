"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface QuoteValueData {
  label: string;
  value: number; // percentage
}

const data: QuoteValueData[] = [
  { label: "Under $2,000", value: 10 },
  { label: "$2,000 - $5,000", value: 40 },
  { label: "$5,000 - $10,000", value: 30 },
  { label: "Over $10,000", value: 20 },
];

const MAX_VALUE = 100;

export default function QuoteValueDistribution() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-6">Quote Value Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          barCategoryGap={20} // space between bars
        >
          <XAxis type="number" domain={[0, MAX_VALUE]} hide />
          <YAxis
            type="category"
            dataKey="label"
            axisLine={false}
            tickLine={false}
            width={150}
          />
          {/* Gray background bars */}
          <Bar
            dataKey={() => MAX_VALUE}
            fill="#555555"
            maxBarSize={24}
            radius={[12, 12, 12, 12]}
          />
          {/* Blue overlay bars */}
          <Bar dataKey="value" maxBarSize={24} radius={[12, 12, 12, 12]}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill="#00BFFF" /> // game-style blue
            ))}
            <LabelList
              dataKey="value"
              position="right"
              content={({ x, y, width, value }) => {
                const xNum = Number(x || 0);
                const yNum = Number(y || 0);
                const wNum = Number(width || 0);
                return (
                  <text
                    x={xNum + wNum + 5}
                    y={yNum + 16} // center vertically on thicker bar
                    fill="#000"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    {value}%
                  </text>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
