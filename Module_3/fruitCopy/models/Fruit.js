const mongoose = require('mongoose');

const expirationSchema = mongoose.Schema({
    code: {
        type:String,
        enum: ['EXP', 'RDY']
    },
    date: Date
})

// Mongoose Fruit Schema (Blueprint)
const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean,
    expiration: [expirationSchema]
});


// Mongoose Model
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;