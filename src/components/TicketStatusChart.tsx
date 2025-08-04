"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const TicketStatusChart: React.FC = () => {
  const data = [
    { name: "Open", Client: 32, Agency: 21 },
    { name: "In Progress", Client: 11, Agency: 33 },
    { name: "Resolved", Client: 38, Agency: 28 },
    { name: "Closed", Client: 40, Agency: 40 },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto my-4 sm:my-8 bg-white rounded-xl sm:rounded-4xl shadow-md p-2 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4 gap-2 sm:gap-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          Ticket Status
        </h3>
        <select className="text-xs sm:text-sm border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white">
          <option>This Month</option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sept</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>{" "}
        </select>
      </div>

      {/* Chart */}
      <div className="h-48 sm:h-88">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap={0}
            margin={{ top: 10, right: 10, left: -10, bottom: 30 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40]}
            />

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

            {/* Thicker and fully rounded bars */}
            <Bar
              dataKey="Client"
              fill="#10B981"
              radius={[999, 999, 999, 999]}
              barSize={40}
            />
            <Bar
              dataKey="Agency"
              fill="#3B82F6"
              radius={[999, 999, 999, 999]}
              barSize={40}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              height={36}
              wrapperStyle={{
                paddingTop: "12px",
                fontSize: "11px",
                color: "#6B7280",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TicketStatusChart;
