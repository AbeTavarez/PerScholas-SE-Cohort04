
// ==== Primitive Types === //

// Type String
var message = "Hello World!";
console.log( typeof message);

// Type String
var firstLetter = "a";
console.log( typeof firstLetter);

// Type Number
var age = 18;
console.log( typeof age);

// Boolean
var isAdult = true;
var isChild = false;
console.log( typeof isAdult);
console.log(typeof isChild);

// Null value
var accountNumber = null;

// re-assigning the value of the variable
accountNumber = 123456;
console.log(typeof accountNumber);
console.log(accountNumber);

// Undefined Value
var userAddress;
console.log(typeof userAddress); 


// === Reference Types === //

// Arrays
var namesArray = ["Colton", "Anthony", "Ranciel", "Faye" ];
var agesArray = [23, 12, 8, 11];
console.log(typeof namesArray);

// Objects
var userDetails = {
    userName: "John",
    userLastname: "Wright",
    age: 22,
    hobbies: ["swimming", "running"]
};

console.log(typeof userDetails)