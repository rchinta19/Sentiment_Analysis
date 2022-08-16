let newData = {
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
};
const objManup = () => {
  let newFormedData = [];
  let tweetclasses = Object.keys(newData);
  let days = Object.keys(newData[tweetclasses[0]]);
  days.forEach((ele, index) => {
    let eachDay = { name: "", positive: 0, negative: 0, neutral: 0 };
    tweetclasses.forEach((cls, index) => {
      eachDay.name = ele;
      if (cls === "negitive_tweets") {
        eachDay.negative += newData[cls][ele];
      }
      if (cls === "neutral_tweets") {
        eachDay.neutral += newData[cls][ele];
      }
      if (cls === "positive_tweets") {
        eachDay.positive += newData[cls][ele];
      }
    });
    newFormedData.push(eachDay);
  });
  console.log(newFormedData);
};
objManup();
