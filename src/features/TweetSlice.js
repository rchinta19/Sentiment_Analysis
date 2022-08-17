import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: {
    display_text: {
      hashtag: "IndependenceDay",
      start_time: "17-08-2022 08:59",
      end_time: "17-08-2022 14:59",
    },
    totaltweets: {
      total: 5844,
      text: 5413,
      image: 300,
      video: 290,
      text_image: 431,
      text_video: 100,
    },
    sentiment_meter: {
      sentiment_type: ["all", "neutral", "negative", "positive"],
      sentimeter_count: [2680, 2306, 427, 5413],
    },
    wordcloud: {
      url: "https://previews.123rf.com/images/boris15/boris151411/boris15141100132/33646721-independence-word-cloud-concept-vector-illustration.jpg",
    },
    geograpical_tweets: {
      "1Hours": 20,
      "2Hours": 253,
      "3Hours": 42,
      "4Hours": 356,
      "5Hours": 555,
      "6Hours": 53,
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
    device: {
      ios: 497,
      android: 4332,
      web: 913,
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
