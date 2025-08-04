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
    <div className="w-full max-w-[600px] mx-auto my-2 sm:my-4 px-2 sm:px-4 bg-white rounded-xl sm:rounded-2xl shadow-md p-2 sm:p-6">
      <div className="bg-white p-2 sm:p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-0">
            Data Transfer
          </h3>
        </div>

        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={areaData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
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
              <Area
                type="monotone"
                dataKey="Commission"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#areaCommissionGradient)"
              />
              <Area
                type="monotone"
                dataKey="Subscription"
                stroke="#06B6D4"
                strokeWidth={2}
                fill="url(#areaSubscriptionGradient)"
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
    </div>
  );
};

export default DataTransferChart;
