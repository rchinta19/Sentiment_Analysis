import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
  const data = [
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
  ];
  const [range, setRange] = useState("This Week");
  const selectChangeHandler = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className="geo-tweet-barchart">
      <div>
        <h2 className="grapheads">Geographical Tweets</h2>
      </div>
      <div className="select-muis">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={range}
            name="range"
            label="City"
            onChange={selectChangeHandler}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <LineChart width={600} height={520} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Positive"
            stroke="#66BB6A"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="Neutral"
            stroke="#FFCA28"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Negative"
            stroke="#EF5350"
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default SentimentOverTimeComponent;
