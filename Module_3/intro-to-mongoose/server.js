require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const connectToDB = require('./config/db');
const Tweet = require('./models/Tweet');



const app = express();

app.get('/', (req, res) => {
    res.send('Server is up')
})

// data comes from client or react app
const myFirstTweet = {
    title: "Sage Advice 123",
    body: "",
    author: "Arthur",
    category: "Programming",
    likes: 20,
  };

Tweet.create(myFirstTweet)
.then(tweet => {
    // res.send('Tweet Created')
    console.log(tweet);
})
.catch((error) => {
    console.error(error)
})
.finally(() => {
    console.log('This runs if the promise is completed or rejected');
})



app.listen(3000, () => {
    console.log('Server is up!');
    connectToDB();
})