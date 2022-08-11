import React from "react";
import Grid from "@mui/material/Grid";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
function SentimentMeter() {
  const data = [
    {
      name: "Negative",
      value: 1342,
    },
    {
      name: "neutral",
      value: 1145,
    },
    {
      name: "Positve",
      value: 1002,
    },
  ];
  const onHoverEvent = () => {};
  const colors = ["#ef5350", "#ffa726", "#66bb6a"];
  return (
    <PieChart width={400} height={400} onMouseEnter={onHoverEvent}>
      {/* <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
        My Donught has tweets
      </text> */}
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={120}
        outerRadius={200}
        startAngle={180}
        endAngle={0}
        padding={0}
      >
        {data.map((entry, index) => (
          <Cell fill={colors[index]} />
        ))}
        {/* <Label width={30} position="center" className="label-center">
          {`Total Tweets 120932190`}
        </Label> */}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default SentimentMeter;
