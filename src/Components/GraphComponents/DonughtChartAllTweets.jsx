import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import Stack from "@mui/material/Stack";
function DonughtChartAllTweets() {
  const [cindex, setCIndex] = useState(0);
  //   const data = [
  //     {
  //       Name: "Positive",
  //       value: 100,
  //     },
  //     {
  //       Name: "Negative",
  //       value: 50,
  //     },
  //     {
  //       Name: "Neutral",
  //       value: 78,
  //     },
  //   ];
  const data = [
    { name: "Text", value: 100 },
    { name: "Images", value: 150 },
    { name: "Videos", value: 72 },
    { name: "Text & Images", value: 30 },
    { name: "Text & Videos", value: 123 },
  ];
  const colors = ["#00b4fb", "#00ad74", "#363cf0", "#ffae00", "#914cdc"];
  const onHoverEvent = () => {};
  return (
    <Grid container direction="row" lg md={6} sx={{ my: 1 }} sm={12}>
      <Grid item xs={6}>
        <PieChart width={280} height={280} onMouseEnter={onHoverEvent}>
          <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
            My Donught has tweets
          </text>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={110}
            outerRadius={140}
          >
            {data.map((entry, index) => (
              <Cell fill={colors[index]} />
            ))}
            <Label width={30} position="center" className="label-center">
              {`Total Tweets 120932190`}
            </Label>
          </Pie>
          <Tooltip />
          {/* <Pie
              activeIndex={cindex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            /> */}
        </PieChart>
      </Grid>
      <Grid item lg md={6} sm={12} sx={{ p: 6 }}>
        <Stack direction="column">
          {data.map((entry, index) => (
            <div className="color-tweet-represent">
              <div style={{ backgroundColor: `${colors[index]}` }}></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default DonughtChartAllTweets;
