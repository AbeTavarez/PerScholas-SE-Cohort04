// Require modules
const express = require("express");

// Create the Express app
const app = express();

// Configure the app (app.set)
// Mount middleware (app.use)
const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

// Mount routes
app.get("/", function (req, res) {
  // res.send('<h1>Hello World!</h1>');
  res.send(plants);
});

/**
 * GET /awesome 
 */
app.get("/awesome", (req, res) => {
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
      `);
});

app.get('/howdy/:firstname', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.query.title}, ${req.params.firstname}: ${req.query.year}`)
})



app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    const {firstname, lastname} = req.params;

    res.send(`Hello ${firstname} ${lastname}`)
})

app.get("/:indexOfPlantArray", (req, res) => {
  console.log(req.params);
  console.log(plants[req.params.indexOfPlantArray]);

  if (plants[req.params.indexOfPlantArray]) {
    res.send(plants[req.params.indexOfPlantArray]);
  } else {
    res.send("No plants at index:" + req.params.indexOfPlantArray);
  }
});



// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
