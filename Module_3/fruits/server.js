const express = require('express')

const app = express()
const PORT = 3000;

// Data
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:indexOfFruitArray', (req, res) => {
    console.log(req.params);
    res.send(fruits[req.params.indexOfFruitArray])
})


app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
})