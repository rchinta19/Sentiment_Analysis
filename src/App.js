import FilterComponet from "./Components/FilterComponet/FilterComponet";
import "./App.css";
import DeviceBreak_GenderContainer from "./Components/GraphComponents/DeviceBeakGenderComponents/DeviceBreak_GenderContainer";
import GeographicaTweetOverTimeContainer from "./Components/GraphComponents/Geographical_SentimentOverTimeComponents/GeographicaTweetOverTimeContainer";
import MainContainerDounght from "./Components/GraphComponents/MainContainerDounght";
import Header from "./Components/Header/Header";
import SentimeterWordCloudContainerComponent from "./Components/SentimeterAndWordCloud/SentimeterWordCloudContainerComponent";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
// import { allTweet } from "./features/TweetSlice";
import { useSelector, useDispatch } from "react-redux";
import { allTweet as Tweet } from "./features/TweetSlice";
function App() {
  const dispatch = useDispatch();
  const allTweet = useSelector((state) => state.alltweet.value);
  useEffect(() => {
    fetch("https://62fdda8641165d66bfb2f60f.mockapi.io/sent/data/blog")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(Tweet(data));
        return true;
      });
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
