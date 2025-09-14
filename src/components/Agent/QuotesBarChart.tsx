"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { ChevronDown } from "lucide-react";

const quotesData = [
  { name: "New", value: 47 },
  { name: "Responded", value: 28 },
  { name: "Won", value: 19 },
  { name: "Lost", value: 21 },
];

const months = [
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

export default function QuotesBarChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("This Month");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBarColor = (index: number) =>
    hoveredIndex === index ? "#3B82F6" : "#6B7280"; // Blue on hover

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 relative">
      {/* Header with Dropdown */}
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Quotes by Status
        </h2>
        <div className="relative">
          <div
            className="flex items-center gap-2 text-gray-600 cursor-pointer border px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            <span className="text-sm sm:text-lg">{selectedMonth}</span>
            <ChevronDown
              size={20}
              className={`${open ? "rotate-180" : ""} transition`}
            />
          </div>
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-10">
              {months.map((month) => (
                <div
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm sm:text-base"
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
        <BarChart
          data={quotesData}
          margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: isMobile ? 12 : 16,
              fill: "#374151",
              fontWeight: "medium",
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: isMobile ? 12 : 14, fill: "#6B7280" }}
            domain={[0, 50]}
            ticks={[0, 10, 20, 30, 40, 50]}
          />
          <Bar
            dataKey="value"
            radius={[9999, 9999, 9999, 9999]} // fully rounded bars
            isAnimationActive={false}
            onMouseMove={(data, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {quotesData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getBarColor(index)}
                style={{ transition: "fill 0.2s ease", cursor: "pointer" }}
                onMouseEnter={() => setHoveredIndex(index)}
              />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              style={{
                fontSize: isMobile ? 14 : 16,
                fill: "#374151",
                fontWeight: "bold",
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
