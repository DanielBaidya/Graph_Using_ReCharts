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

const ApiCallsChart: React.FC = () => {
  const data = [
    { name: "Jan 1", Commission: 12000, Subscription: 8000 },
    { name: "Jan 2", Commission: 18000, Subscription: 14000 },
    { name: "Jan 3", Commission: 15000, Subscription: 10000 },
    { name: "Jan 4", Commission: 22000, Subscription: 16000 },
    { name: "Jan 5", Commission: 17000, Subscription: 12000 },
    { name: "Jan 6", Commission: 25000, Subscription: 19000 },
    { name: "Jan 7", Commission: 20000, Subscription: 15000 },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto my-2 sm:my-8 px-2 sm:px-8 bg-white rounded-xl sm:rounded-4xl shadow-md p-2 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base sm:text-xl font-semibold text-gray-800">
          API Calls Over Time
        </h3>
      </div>

      {/* Chart Container */}
      <div className="h-48 sm:h-78">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                fontSize: "12px",
              }}
            />
            <defs>
              {/* Gradient for Commission area */}
              <linearGradient
                id="commissionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
              </linearGradient>
              {/* Gradient for Subscription area */}
              <linearGradient
                id="subscriptionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
              </linearGradient>
            </defs>

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
              domain={[0, 30000]}
              ticks={[0, 6000, 12000, 18000, 24000, 30000]}
            />

            {/* Commission Area */}
            <Area
              type="monotone"
              dataKey="Commission"
              stroke="#8B5CF6"
              strokeWidth={2}
              fill="url(#commissionGradient)"
            />

            {/* Subscription Area */}
            <Area
              type="monotone"
              dataKey="Subscription"
              stroke="#06B6D4"
              strokeWidth={2}
              fill="url(#subscriptionGradient)"
            />

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
  );
};

export default ApiCallsChart;
