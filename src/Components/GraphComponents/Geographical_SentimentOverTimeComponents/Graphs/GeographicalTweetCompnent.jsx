import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function GeographicalTweetCompnent({ title, genderData, colors }) {
  const [selectValue, setSelectValue] = useState({
    state: "Telengana",
    city: "Hydrabad",
  });
  const data = [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 80 },
    { name: "Wed", value: 175 },
    { name: "Thu", value: 1210 },
    { name: "Fri", value: 42 },
    { name: "Sat", value: 656 },
    { name: "Sun", value: 1256 },
  ];

  const selectChangeHandler = (e) => {
    if (e.taget.name === "state") {
      setSelectValue((prev) => ({ ...prev, state: e.target.value }));
    } else {
      setSelectValue((prev) => ({ ...prev, city: e.target.value }));
    }
  };
  return (
    <div className="geo-tweet-barchart">
      <div>
        <h2 className="grapheads">{title ? title : "Geographical Tweets"}</h2>
      </div>
      <div className="select-muis">
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue.state}
              name="state"
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              label="City"
              onChange={selectChangeHandler}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <BarChart
          width={650}
          height={523}
          data={genderData || data}
          margin={{
            top: 5,

            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {genderData ? (
            <>
              <Bar dataKey="Male" fill="#42A5F5" />
              <Bar dataKey="Female" fill="#EC407A" />
            </>
          ) : (
            <Bar dataKey="value" fill="#29B6F6" />
          )}
        </BarChart>
      </div>
    </div>
  );
}

export default GeographicalTweetCompnent;
