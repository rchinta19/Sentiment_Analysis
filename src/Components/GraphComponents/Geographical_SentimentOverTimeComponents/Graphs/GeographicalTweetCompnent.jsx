import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
function GeographicalTweetCompnent({ title, genderData, colors }) {
  const allTweet = useSelector(
    (state) => state.alltweet.value.geograpical_tweets
  );
  const [cdata, setCData] = useState(genderData || allTweet);
  const settingDatafun = () => {
    const newData = Object.keys(allTweet).map((ele, index) => {
      switch (ele) {
        case "monday":
          return { name: "0hr", value: allTweet[ele] };
          break;
        case "tuesday":
          return { name: "1hr", value: allTweet[ele] };
          break;
        case "wednesday":
          return { name: "2hr", value: allTweet[ele] };
          break;
        case "thursday":
          return { name: "3hr", value: allTweet[ele] };
          break;
        case "friday":
          return { name: "4hr", value: allTweet[ele] };
          break;
        case "saturday":
          return { name: "5hr", value: allTweet[ele] };
          break;
        case "sunday":
          return { name: "6hr", value: allTweet[ele] };
          break;
      }
    });
    setCData(newData);
  };
  const [selectValue, setSelectValue] = useState({
    state: "Telengana",
    city: "Hydrabad",
  });

  const selectChangeHandler = (e) => {
    if (e.taget.name === "state") {
      setSelectValue((prev) => ({ ...prev, state: e.target.value }));
    } else {
      setSelectValue((prev) => ({ ...prev, city: e.target.value }));
    }
  };
  useEffect(() => {
    settingDatafun();
  }, []);
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
      <div className="bgraph">
        <ResponsiveContainer>
          <BarChart
            width={650}
            height={523}
            data={cdata}
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GeographicalTweetCompnent;
