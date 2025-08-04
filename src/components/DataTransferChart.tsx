"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const DataTransferChart: React.FC = () => {
  // Data for the chart representing Commission and Subscription values over dates
  const areaData = [
    { name: "Jan 1", Commission: 8000, Subscription: 6000 },
    { name: "Jan 2", Commission: 28000, Subscription: 10000 },
    { name: "Jan 3", Commission: 14000, Subscription: 8500 },
    { name: "Jan 4", Commission: 20000, Subscription: 12000 },
    { name: "Jan 5", Commission: 13000, Subscription: 9000 },
    { name: "Jan 6", Commission: 12000, Subscription: 7000 },
    { name: "Jan 7", Commission: 24000, Subscription: 2000 },
  ];

  return (
    // Main container with max width, padding, rounded corners, shadow, and responsive spacing
    <div className="w-full max-w-[600px] mx-auto my-2 sm:my-4 px-2 sm:px-4 bg-white rounded-xl sm:rounded-2xl shadow-md p-2 sm:p-6">
      {/* Inner card for visual grouping with its own padding, background and subtle shadow */}
      <div className="bg-white p-2 sm:p-6 rounded-lg shadow-sm">
        {/* Header section with title, flex layout for responsive alignment */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-0">
            Data Transfer
          </h3>
        </div>

        {/* Chart container with fixed height */}
        <div className="h-48 sm:h-78">
          {/* ResponsiveContainer to make chart adapt to container size */}
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={areaData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              {/* Gradient definitions for the filled areas */}
              <defs>
                <linearGradient
                  id="areaCommissionGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="areaSubscriptionGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              {/* X-Axis: labels with no axis or tick lines */}
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#6B7280" }}
              />

              {/* Y-Axis: numeric scale with ticks and no axis lines */}
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#6B7280" }}
                domain={[0, 30000]}
                ticks={[0, 6000, 12000, 18000, 24000, 30000]}
              />

              {/* Tooltip with custom styles */}
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                }}
              />

              {/* Area representing Commission data with stroke and gradient fill */}
              <Area
                type="monotone"
                dataKey="Commission"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#areaCommissionGradient)"
              />

              {/* Area representing Subscription data with stroke and gradient fill */}
              <Area
                type="monotone"
                dataKey="Subscription"
                stroke="#06B6D4"
                strokeWidth={2}
                fill="url(#areaSubscriptionGradient)"
              />

              {/* Legend positioned at the bottom with circle icons */}
              <Legend
                verticalAlign="bottom"
                height={32}
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "12px",
                  fontSize: "11px",
                  color: "#6B7280",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DataTransferChart;
