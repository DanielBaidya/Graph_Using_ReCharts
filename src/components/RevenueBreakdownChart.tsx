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

const RevenueChart: React.FC = () => {
  const data = [
    { name: "Jan", Commission: 38000, Subscription: 10000 },
    { name: "Feb", Commission: 18000, Subscription: 22000 },
    { name: "Mar", Commission: 42000, Subscription: 8000 },
    { name: "Apr", Commission: 20000, Subscription: 26000 },
    { name: "May", Commission: 44000, Subscription: 7000 },
    { name: "Jun", Commission: 19000, Subscription: 24000 },
    { name: "Jul", Commission: 43000, Subscription: 9000 },
    { name: "Aug", Commission: 21000, Subscription: 27000 },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto my-2 sm:my-8 px-2 sm:px-8 bg-white rounded-xl sm:rounded-4xl shadow-md p-2 sm:p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base sm:text-xl font-semibold text-gray-800">
          Revenue Breakdown
        </h3>
        <select className="text-xs sm:text-sm border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white">
          <option>This Year</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
          <option>2031</option>
          <option>2032</option>
          <option>2033</option>
          <option>2034</option>
          <option>2035</option>
          <option>2036</option>
        </select>
      </div>

      <div className="h-48 sm:h-78">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.1} />
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
              domain={[0, 50000]}
              ticks={[0, 10000, 20000, 30000, 40000, 50000]}
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
              stroke="#22C55E"
              strokeWidth={2}
              fill="url(#greenGradient)"
            />
            <Area
              type="monotone"
              dataKey="Subscription"
              stroke="#38BDF8"
              strokeWidth={2}
              fill="url(#blueGradient)"
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

export default RevenueChart;
