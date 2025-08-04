"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const SalesOverviewChart: React.FC = () => {
  const data = [
    { name: "JAN", value: 320 },
    { name: "FEB", value: 180 },
    { name: "MAR", value: 250 },
    { name: "APR", value: 480 },
    { name: "MAY", value: 50 },
    { name: "JUN", value: 380 },
    { name: "JUL", value: 320 },
    { name: "AUG", value: 280 },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto my-4 sm:my-8 bg-white rounded-xl sm:rounded-3xl shadow-md p-2 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-6 gap-2 sm:gap-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          Sales Overview
        </h3>
        <select className="text-xs sm:text-sm border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white">
          <option>This Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-48 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            barCategoryGap="15%"
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="value"
              fill="#2563EB"
              radius={[999, 999, 999, 999]} // Fully rounded
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
