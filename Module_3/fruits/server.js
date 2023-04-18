require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// Data
// const fruits = require('./models/fruits');
const Fruit = require('./models/Fruit');

const app = express()
const PORT = 3000;

// ==== Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// ===== Middleware
// Setting a middleware is a function execute for all routes
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))
// override using a query value
app.use(methodOverride('_method'));
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>");
})

/**
 * Index Route: (return a list of fruits)
 */
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    // res.render('fruits/Index', {fruits: fruits})
    Fruit.find({}, (error, allFruits) => {
        res.render('fruits/Index', {fruits: allFruits})
    })
})

/**
 * POST method (accept data from the form)
 */
app.post('/fruits', (req, res) => {
    console.log(req.body);
    //if checked, req.body.readyToEat is set to 'on'
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // fruits.push(req.body)

    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit)
        res.redirect('/fruits')
    })

})


/**
 * New Route: (return a form to create a new fruit)
 */
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})


//* Return the edit form
app.get('/fruits/:id/edit', (req, res) => {
   Fruit.findById(req.params.id, (error, foundFruit) => {
    if (!error) {
        res.render('fruits/Edit', {fruit: foundFruit})
    } else {
        res.send({msg: error.message})
    }

   })
})


//* Handle the edit form data
app.put('/fruits/:id', (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

   Fruit.findByIdAndUpdate(req.params.id, req.body ,(error, updatedFruit) => {
    // res.send(updatedFruit)
    res.redirect(`/fruits/${req.params.id}`)
   })
})


//* Seed Route
app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});


/**
 * Show Route: (returns an single fruit)
 */
app.get('/fruits/:id', (req, res) => {
    console.log(req.params);
    // res.send(fruits[req.params.indexOfFruitArray])
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitArray]} )
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('fruits/Show', {fruit: foundFruit})
    })
})


//! DELETE FRUIT
app.delete('/fruits/:id', (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
        // res.send(deletedFruit)
        res.redirect('/fruits')
    })
})

// if none of the routes matches the request show 404 pg
app.get('*', (req, res) => {
    // res.redirect('/fruits')
    res.render('404')
})



app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    // gets the warning message out
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})