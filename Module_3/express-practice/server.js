// import or load the express module
const express = require('express');

// create an instance of the express app
const app = express();

// ===== Define our routes

//root or main route
app.get('/', function(req, res) {
    // use the response object to send back some data
    res.send('<h1>Hello World</h1>')
})

// '/home' route
app.get('/home', function(req, res) {
    res.send('<h1>Home Page</h1>')
})


app.get('/cars', function(req, res) {
    // res.send("List of cards")
    res.json({cars: ['honda', 'bmw']})
})

app.post('/cars', function(req, res) {
    res.send('New car created!')
})



// start to listen for requests
app.listen(3000, function() {
    console.log('Server is running...')
})