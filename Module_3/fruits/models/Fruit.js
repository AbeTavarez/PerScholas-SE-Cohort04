const mongoose = require('mongoose');

// Mongoose Fruit Schema (Blueprint)
const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
});


// Mongoose Model
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;