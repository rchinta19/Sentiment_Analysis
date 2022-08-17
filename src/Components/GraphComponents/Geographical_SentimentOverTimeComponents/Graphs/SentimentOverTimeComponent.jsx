import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function SentimentOverTimeComponent() {
  const [range, setRange] = useState("This Week");
  const selectChangeHandler = (e) => {
    setRange(e.target.value);
  };
  const allTweet = useSelector(
    (state) => state.alltweet.value.sentiment_over_time
  );
  console.log(allTweet);
  const [cdata, setCData] = useState([
    {
      name: "Mon",
      Positive: 3490,
      Negative: 4300,
      Neutral: 2100,
    },
    {
      name: "Tue",
      Positive: 230,
      Negative: 1300,
      Neutral: 830,
    },
    {
      name: "Wed",
      Positive: 490,
      Negative: 20,
      Neutral: 123,
    },
    {
      name: "Fri",
      Positive: 490,
      Negative: 300,
      Neutral: 56,
    },
    {
      name: "Sat",
      Positive: 145,
      Negative: 1560,
      Neutral: 1929,
    },
    {
      name: "Sun",
      Positive: 156,
      Negative: 7557,
      Neutral: 1231,
    },
  ]);
  const settingDatafun = () => {
    let newFormedData = [];
    let tweetclasses = Object.keys(allTweet);
    let days = Object.keys(allTweet[tweetclasses[0]]);
    days.forEach((ele, index) => {
      let eachDay = { name: "", Positive: 0, Negative: 0, Neutral: 0 };
      tweetclasses.forEach((cls, index) => {
        eachDay.name = ele;
        if (cls === "negitive_tweets") {
          eachDay.Negative += allTweet[cls][ele];
        }
        if (cls === "neutral_tweets") {
          eachDay.Neutral += allTweet[cls][ele];
        }
        if (cls === "positive_tweets") {
          eachDay.Positive += allTweet[cls][ele];
        }
      });
      newFormedData.push(eachDay);
    });
    setCData([...newFormedData]);
    console.log(newFormedData);
  };
  const [selectValue, setSelectValue] = useState("This Week");

  useEffect(() => {
    settingDatafun();
  }, []);
  return (
    <div className="geo-tweet-barchart">
      <div>
        <h2 className="grapheads">Sentiment Over Time</h2>
      </div>
      <div className="select-muis">
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={range}
            name="range"
            onChange={selectChangeHandler}
          >
            <MenuItem value={"This Week"}>This Week</MenuItem>
            <MenuItem value={"This Month"}>This Month</MenuItem>
            <MenuItem value={"This Year"}>This Year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <LineChart width={600} height={520} data={cdata}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Positive"
            stroke="#66BB6A"
            strokeWidth={5}
          />

          <Line
            type="monotone"
            dataKey="Neutral"
            stroke="#FFCA28"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="Negative"
            stroke="#EF5350"
            strokeWidth={5}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default SentimentOverTimeComponent;
