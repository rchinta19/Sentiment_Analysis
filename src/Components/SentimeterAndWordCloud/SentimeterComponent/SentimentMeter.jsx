import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
function SentimentMeter() {
  const [sentData, setSentData] = useState([
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
  ]);

  useEffect(() => {
    const newSent = [];
    fetch("https://2bb0-103-252-145-180.in.ngrok.io/api/data")
      .then((res) => res.json())
      .then((data) => {
        let x = Object.keys(data).map((ele, index) => {
          return { name: ele, value: data[ele] };
        });
        setSentData(x);
      });
  }, []);
  const onHoverEvent = () => {};
  const colors = ["#ef5350", "#ffa726", "#66bb6a"];
  return (
    <PieChart width={400} height={400} onMouseEnter={onHoverEvent}>
      {/* <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
        My Donught has tweets
      </text> */}
      <Pie
        data={sentData}
        dataKey="value"
        nameKey="name"
        innerRadius={120}
        outerRadius={200}
        startAngle={180}
        endAngle={0}
        padding={0}
      >
        {sentData.map((entry, index) => (
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
