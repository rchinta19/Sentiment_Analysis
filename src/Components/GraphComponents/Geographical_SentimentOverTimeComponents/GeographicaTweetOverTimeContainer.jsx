import React, { useState, useEffect } from "react";
import GeographicalTweetCompnent from "./Graphs/GeographicalTweetCompnent";
import "./geograph.modules.css";
import SentimentOverTimeComponent from "./Graphs/SentimentOverTimeComponent";
function GeographicaTweetOverTimeContainer() {
  return (
    <div className="geoSentiTime-container">
      <GeographicalTweetCompnent />
      <SentimentOverTimeComponent />
    </div>
  );
}
export default GeographicaTweetOverTimeContainer;
