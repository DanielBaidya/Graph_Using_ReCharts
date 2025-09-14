"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const leadsData = [
  { name: "Europe", value: 16, color: "#FF8C00" }, // Orange
  { name: "South America", value: 12, color: "#FF4500" }, // Red
  { name: "North America", value: 18, color: "#4169E1" }, // Dark Blue
  { name: "Australia", value: 9, color: "#1E90FF" }, // Light Blue
  { name: "Africa", value: 20, color: "#00BFFF" }, // Sky Blue
  { name: "South East Asia", value: 8, color: "#20B2AA" }, // Medium Yellow
  { name: "South Asia", value: 8, color: "#8B4513" }, // Dark Yellow
  { name: "East Asia", value: 9, color: "#FFD700" }, // Light Yellow
];

const months = [
  "This Month", // ✅ Default
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const RADIAN = Math.PI / 180;

// ✅ Custom label renderer: % inside, country name outside
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const innerX =
    cx +
    (innerRadius + (outerRadius - innerRadius) * 0.5) *
      Math.cos(-midAngle * RADIAN);
  const innerY =
    cy +
    (innerRadius + (outerRadius - innerRadius) * 0.5) *
      Math.sin(-midAngle * RADIAN);

  const outerX = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
  const outerY = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);

  return (
    <>
      {/* % inside */}
      <text
        x={innerX}
        y={innerY}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>

      {/* Country name outside */}
      <text
        x={outerX}
        y={outerY}
        fill="#374151"
        textAnchor={outerX > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="15"
        fontWeight="700"
      >
        {leadsData[index].name}
      </text>
    </>
  );
};

export default function LeadsPieChart() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("This Month"); // ✅ default

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
          Leads by Source Market
        </h2>

        {/* ✅ Month dropdown */}
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="appearance-none bg-transparent text-sm sm:text-lg text-gray-600 cursor-pointer pr-6"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
          />
        </div>
      </div>

      {/* ✅ Chart */}
      <div className="flex items-center justify-center">
        <ResponsiveContainer
          width="100%"
          height={isMobile ? 300 : 400}
          minWidth={250}
        >
          <PieChart>
            <Pie
              data={leadsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={isMobile ? 100 : 160}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {leadsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
