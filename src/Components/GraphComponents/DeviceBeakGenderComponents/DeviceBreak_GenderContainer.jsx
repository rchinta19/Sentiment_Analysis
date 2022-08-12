import React from "react";
import GeographicalTweetCompnent from "../Geographical_SentimentOverTimeComponents/Graphs/GeographicalTweetCompnent";
import SentimentOverTimeComponent from "../Geographical_SentimentOverTimeComponents/Graphs/SentimentOverTimeComponent";
import DeviceBreakComponent from "./DvGenComponents/DeviceBreakComponent";

function DeviceBreak_GenderContainer() {
  const data = [
    { name: "Mon", Male: 1201, Female: 1312 },
    { name: "Tue", Male: 801, Female: 312 },
    { name: "Wed", Male: 1752, Female: 124 },
    { name: "Thu", Male: 1210, Female: 1242 },
    { name: "Fri", Male: 422, Female: 104 },
    { name: "Sat", Male: 3456, Female: 531 },
    { name: "Sun", Male: 1256, Female: 1281 },
  ];
  const colors = ["#42A5F5", "#EC407A"];
  return (
    <div className="geoSentiTime-container">
      <DeviceBreakComponent />
      <GeographicalTweetCompnent
        title={"Gender"}
        genderData={data}
        colors={colors}
      />
    </div>
  );
}
export default DeviceBreak_GenderContainer;
