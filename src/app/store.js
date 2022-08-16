import { configureStore } from "@reduxjs/toolkit";
import AllTweetReducer from "../features/TweetSlice";
export const store = configureStore({
  reducer: {
    alltweet: AllTweetReducer,
  },
});
