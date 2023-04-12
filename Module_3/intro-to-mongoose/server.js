require("dotenv").config();
const express = require("express");
// const mongoose = require('mongoose');
const connectToDB = require("./config/db");
const Tweet = require("./models/Tweet");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is up");
});

// data comes from client or react app
// const myFirstTweet = {
//     title: "Sage Advice 123",
//     body: "",
//     author: "Arthur",
//     category: "Programming",
//     likes: 20,
// };

const manyTweets = [
  {
    title: "Deep Thoughts",
    body: "Friends, I am the realest coder alive",
    author: "Arthur",
  },
  {
    title: "Sage Advice",
    body: "Friends, I am awesome and you are too",
    author: "Arthur",
    likes: 20,
  },
  {
    title: "Is TI the Jadakiss of the South",
    body: "TI is severely underrated and we need to fix that expeditiously",
    author: "Arthur",
    likes: 40,
  },
  {
    title: "Crypto",
    body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
    author: "Arthur",
    likes: 162,
  },
  {
    title: "Confusion",
    body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
    author: "Arthur",
    likes: -100,
  },
  {
    title: "Vespa",
    body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
    author: "Arthur",
    likes: 2,
  },
  {
    title: "Licensed",
    body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
    author: "Arthur",
    likes: 3,
  },
  {
    title: "Water",
    body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
    author: "Arthur",
  },
];

Tweet.findOneAndRemove({ title: "Deep Thoughts" })
// if database transaction succeeds
.then((tweet) => {
  console.log(tweet)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})

//* Using operator to filter queries
// Tweet.find({ likes: { $gte: 20 } })
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//* search or filter by the title
// Tweet.find({ title: "Sage Advice" })
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//* query all documents and return the selected fields\
// Tweet.find({}, "title body")
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   });

//* find all Tweets in db
// Tweet.find({})
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   });

// * Create many Tweets
// Tweet.insertMany(manyTweets)
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//* Create a single tweet
// Tweet.create(myFirstTweet)
// .then(tweet => {
//     // res.send('Tweet Created')
//     console.log(tweet);
// })
// .catch((error) => {
//     console.error(error)
// })
// .finally(() => {
//     console.log('This runs if the promise is completed or rejected');
// })

app.listen(3000, () => {
  console.log("Server is up!");
  connectToDB();
});
