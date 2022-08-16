import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: {
    display_text: {
      tagname: "#tagname",
      starttime: "",
      endtime: "",
    },
    totaltweets: {
      total: 152523,
      text: 1235,
      image: 2536,
      video: 2533,
      text_image: 132,
      text_video: 523,
    },
    sentiment_meter: {
      sentiment_type: {
        all: "",
      },
      totaltweets: 152523,
      positive: 1524,
      negitive: 1524,
    },
    wordcloud: {
      url: "",
    },
    geograpical_tweets: {
      monday: 1525,
      tuesday: 253,
      wednesday: 42,
      thursday: 356,
      friday: 555,
      saturday: 53,
      sunday: 235,
    },
    sentiment_over_time: {
      negitive_tweets: {
        monday: 1525,
        tuesday: 253,
        wednesday: 42,
        thursday: 356,
        friday: 555,
        saturday: 53,
        sunday: 235,
      },
      positive_tweets: {
        monday: 1525,
        tuesday: 253,
        wednesday: 42,
        thursday: 356,
        friday: 555,
        saturday: 53,
        sunday: 235,
      },
      neutral_tweets: {
        monday: 1525,
        tuesday: 253,
        wednesday: 42,
        thursday: 356,
        friday: 555,
        saturday: 53,
        sunday: 235,
      },
    },
  },
};
const AllTweetSlice = createSlice({
  name: "TotalTweet",
  initialState,
  reducers: {
    allTweet: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { allTweet } = AllTweetSlice.actions;
export default AllTweetSlice.reducer;
