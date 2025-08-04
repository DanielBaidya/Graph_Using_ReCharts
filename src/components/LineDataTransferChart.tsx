"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid, // <-- Add this
} from "recharts";

const LineGraphCard: React.FC = () => {
  const data = [
    { name: "Jan 1", value: 120 },
    { name: "Jan 2", value: 340 },
    { name: "Jan 3", value: 460 },
    { name: "Jan 4", value: 220 },
    { name: "Jan 5", value: 680 },
    { name: "Jan 6", value: 540 },
    { name: "Jan 7", value: 320 },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto my-4 sm:my-8 bg-white rounded-xl sm:rounded-4xl shadow-md p-2 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-6 gap-2 sm:gap-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          Weekly Trends
        </h3>
        <select className="text-xs sm:text-sm border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white">
          <option>This Week</option>
        </select>
      </div>

      {/* Chart Container */}
      <div className="h-48 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            {/* Background grid lines */}
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />

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
              domain={[0, 800]}
              ticks={[0, 200, 400, 600, 800]}
            />
            <Tooltip
              cursor={{ stroke: "#10B981", strokeWidth: 2, opacity: 0.1 }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 6, strokeWidth: 2, fill: "#10B981", stroke: "#10B981" }} // green fill + stroke
              activeDot={{ r: 8, fill: "#10B981", stroke: "#10B981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraphCard;
