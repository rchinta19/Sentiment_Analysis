import FilterComponet from "./Components/FilterComponet/FilterComponet";
import "./App.css";
import DeviceBreak_GenderContainer from "./Components/GraphComponents/DeviceBeakGenderComponents/DeviceBreak_GenderContainer";
import GeographicaTweetOverTimeContainer from "./Components/GraphComponents/Geographical_SentimentOverTimeComponents/GeographicaTweetOverTimeContainer";
import MainContainerDounght from "./Components/GraphComponents/MainContainerDounght";
import Header from "./Components/Header/Header";
import SentimeterWordCloudContainerComponent from "./Components/SentimeterAndWordCloud/SentimeterWordCloudContainerComponent";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { allTweet } from "./features/TweetSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const allTweet = useSelector((state) => state.alltweet.value);
  useEffect(() => {
    // fetch("https://2bb0-103-252-145-180.in.ngrok.io/api/data")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let x = Object.keys(data).map((ele, index) => {
    //       return { name: ele, value: data[ele] };
    //     });
    //   });
    console.log(allTweet);
  }, []);
  return (
    <div className="App">
      <Header />
      <MainContainerDounght />
      <FilterComponet />
      <SentimeterWordCloudContainerComponent />
      <GeographicaTweetOverTimeContainer />
      <DeviceBreak_GenderContainer />
      <Footer />
    </div>
  );
}

export default App;
