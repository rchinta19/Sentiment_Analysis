import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GaugeChart from "react-gauge-chart";
import { useSelector, useDispatch } from "react-redux";

// import { PieChart, Pie, Tooltip, Cell } from "recharts";
function SentimentMeter() {
  const allTweet = useSelector((state) => state.alltweet.value.sentiment_meter);
  const [tweetClassType, setTweetClassType] = useState({
    tweetclass: "Positive",
    meterPlace: 0.36,
  });
  const [sentData, setSentData] = useState([123, 555, 673]);
  const settingDatafun = () => {
    const newSent = [];
    let x = Object.keys(allTweet).map((ele, index) => {
      if (index !== 0) return allTweet[ele];
    });

    setSentData(x);
  };
  useEffect(() => {
    fetch("https://2bb0-103-252-145-180.in.ngrok.io/api/data")
      .then((res) => res.json())
      .then((data) => {});
  }, [allTweet]);

  const colors = ["#ef5350", "#ffa726", "#66bb6a"];
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
            value={tweetClassType.tweetclass}
            name="range"
            onChange={(e) => {
              let mplace = () => {
                let k = 0;
                if (e.target.value === "Positive") {
                  k = 2;
                }
                if (e.target.value === "Negative") {
                  k = 1;
                }
                if (e.target.value === "Neutral") {
                  k = 0;
                }
                let sum = 0;
                for (let mad = 0; mad < sentData.length - 1; mad++) {
                  sum += sentData[mad];
                }
                let i = sentData[k] / sum;

                return parseFloat(i).toFixed(2);
              };

              setTweetClassType({
                tweetclass: e.target.value,
                meterPlace: mplace(),
              });
            }}
          >
            <MenuItem value={"All"}>all</MenuItem>
            <MenuItem value={"Positive"}>Positive</MenuItem>
            <MenuItem value={"Negative"}>Negative</MenuItem>
            <MenuItem value={"Neutral"}>Neutral</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="gauge-component">
        <GaugeChart
          id="gauge-chart5"
          arcsLength={[...sentData]}
          colors={["#5BE12C", "#F5CD19", "#EA4228"]}
          percent={tweetClassType.meterPlace}
          arcPadding={0.0001}
        />
      </div>
    </div>
  );
}

export default SentimentMeter;
