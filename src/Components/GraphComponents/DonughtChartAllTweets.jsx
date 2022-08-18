import React, { useState, useCallback, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
function DonughtChartAllTweets() {
  const allTweet = useSelector((state) => state.alltweet.value.totaltweets);

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
  const settingDatafun = () => {
    const newData = Object.keys(allTweet).map((ele, index) => {
      return { name: ele, value: allTweet[ele] };
    });
    let indexOftotal = newData.indexOf("total");
    setSentData((prev) => [...newData.slice(1)]);
  };

  useEffect(() => {
    settingDatafun();
  }, [allTweet]);

  const colors = ["#FFC84C", "#00B4FB", "#914CDC", "#00AD74", "#363CF0"];
  const onHoverEvent = () => {};
  // useEffect(() => {
  //   fetch("https://2bb0-103-252-145-180.in.ngrok.io/api/data")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <Grid container direction="row" lg md={6} sx={{ my: 5 }} sm={12}>
      <Grid item xs={6}>
        <PieChart width={480} height={380} onMouseEnter={onHoverEvent}>
          {/* <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
            My Donught has tweets
          </text> */}
          <Pie
            data={sentData}
            dataKey="value"
            nameKey="name"
            innerRadius={130}
            outerRadius={180}
            padding={0}
          >
            {colors.map((entry, index) => {
              return <Cell fill={colors[index]} />;
            })}
            <Label width={30} position="center" className="label-center">
              {`Total Tweets ${allTweet["total"]}`}
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
          {/* console.log(sentData) */}
          {sentData.map((entry, index) => (
            <div className="color-tweet-represent" key={index}>
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
