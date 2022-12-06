import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeeklyChart = (props) => {
  const { data } = props;

  return (
    <div style={{ width: "90%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <Area dataKey="ratings" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
          <CartesianGrid strokeDasharray="2 2" />
          <YAxis />
          <XAxis dataKey="labels" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
