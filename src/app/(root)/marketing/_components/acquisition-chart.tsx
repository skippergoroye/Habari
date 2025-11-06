"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "March 1", acquisition: 120, cost: 25000 },
  { date: "March 2", acquisition: 160, cost: 22000 },
  { date: "March 3", acquisition: 280, cost: 32000 },
  { date: "March 4", acquisition: 480, cost: 38000 },
  { date: "March 5", acquisition: 280, cost: 35000 },
  { date: "March 6", acquisition: 550, cost: 28000 },
  { date: "March 7", acquisition: 420, cost: 25000 },
]

export default function AcquisitionChart() {
  return (
    <div className="w-full ">
      <div className="border-2 border-black rounded-[6px] p-[21px] bg-white">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Acquisition vs Cost</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#999" style={{ fontSize: "12px" }} />
            <YAxis yAxisId="left" stroke="#999" style={{ fontSize: "12px" }} domain={[0, 800]} />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#999"
              style={{ fontSize: "12px" }}
              domain={[0, 60000]}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}00$`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              formatter={(value) => value.toLocaleString()}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="acquisition"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="#e0f2fe"
              dot={false}
              isAnimationActive={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cost"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
