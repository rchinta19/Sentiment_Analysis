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
import { cities, state } from "../../../../citiesandstates";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
function GeographicalTweetCompnent({ title, genderData, colors }) {
  const [cdata, setCData] = useState(genderData);
  const allTweet = useSelector(
    (state) => state.alltweet.value.geographical_tweets
  );
  console.log(allTweet);
  const settingDatafun = () => {
    const newData = Object.keys(allTweet).map((ele, index) => {
      switch (ele) {
        case "1Hours":
          return { name: "1hr", value: allTweet[ele] };
          break;
        case "2Hours":
          return { name: "2hr", value: allTweet[ele] };
          break;

        case "3Hours":
          return { name: "3hr", value: allTweet[ele] };
          break;
        case "4Hours":
          return { name: "4hr", value: allTweet[ele] };
          break;
        case "5Hours":
          return { name: "5hr", value: allTweet[ele] };
          break;
        case "6Hours":
          return { name: "6hr", value: allTweet[ele] };
          break;
      }
    });
    setCData(newData);
    console.log(newData);
  };

  const [selectValue, setSelectValue] = useState({
    state: "Telangana",
    city: "Hyderabad",
    time: "This Week",
  });

  const selectChangeHandler = (e) => {
    console.log(e.target.name);
    if (e.target.name === "state") {
      setSelectValue((prev) => ({ ...prev, state: e.target.value }));
    } else if (e.target.name === "city") {
      setSelectValue((prev) => ({ ...prev, city: e.target.value }));
    }
    if (e.target.name == "time") {
      setSelectValue((prev) => ({ ...prev, time: e.target.value }));
    }
    console.log();
  };
  useEffect(() => {
    if (genderData) {
    } else {
      settingDatafun();
    }
  }, [allTweet]);
  return (
    <div className="geo-tweet-barchart">
      <div>
        <h2 className="grapheads">{title ? title : "Geographical Tweets"}</h2>
      </div>
      <div className="select-muis"></div>
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
