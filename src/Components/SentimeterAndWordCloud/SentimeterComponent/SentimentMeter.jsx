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
  console.log(allTweet);
  const [sentData, setSentData] = useState([123, 555, 673]);
  const settingDatafun = () => {
    const newSent = [];
    allTweet.sentiment_type.forEach((ele, index) => {
      switch (ele) {
        case "neutral":
          newSent.splice(1, 0, allTweet.sentimeter_count[ele]);
          break;
        case "negative":
          newSent.splice(0, 0, allTweet.sentimeter_count[ele]);
          break;
        case "positive":
          newSent.splice(2, 0, allTweet.sentimeter_count[ele]);
          break;
        default:
          break;
      }
    });

    setSentData(newSent);
  };
  useEffect(() => {
    settingDatafun();
  }, [allTweet]);

  const colors = ["#ef5350", "#ffa726", "#66bb6a"];
  return (
    <div className="geo-tweet-barchart">
      <div>
        <h2 className="grapheads">Sentiment Meter</h2>
      </div>
      <div className="select-muis"></div>
      <div className="gauge-component">
        <GaugeChart
          id="gauge-chart5"
          arcsLength={sentData}
          colors={["#EA4228", "#F5CD19", "#5BE12C"]}
          percent={tweetClassType.meterPlace}
          arcPadding={0.001}
          cornerRadius={0}
          arcWidth={0.3}
        />
      </div>
    </div>
  );
}

export default SentimentMeter;
