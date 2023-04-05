console.log('running script...')

const random = require('./utils/random');
const circle = require('./utils/circle');


for (let i = 0; i < 10; i++) {
    console.log(random(10, 20));
}

console.log(circle)
circle.area()
circle.circumference()














// import or require a module
const fs = require('fs');
const req = require('request');
// console.log(typeof req)

// ================Request Package ============
req('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
    if (err) {
        console.log(err)
    }
    // console.log(res);
    // console.log(body);
})



// ================Our own Module=======================
// import or require our own module
const daysOfWeek = require('./days-of-week');

// using the daysOfWeek module
// console.log(daysOfWeek.weekdays)
const day = daysOfWeek.getWeekday(5);
// console.log(day)


// ===========NODE FS Module===============
// console.log(typeof fs)

// Write a new file
fs.writeFile('', 'Hello world!', function(e) {
    if (e){
        // console.log(e)
        // creates an explicit error to stop our program 
        // throw Error(e.message)
    }
    // console.log('Done writing file!');
})