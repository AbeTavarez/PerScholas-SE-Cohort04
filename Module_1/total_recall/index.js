// Example of What your JS File in VS Code should look like

console.log("hello from index.js");
/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

//TODO I. Variables & Data Types ++++++++++++++++++++++++++++++++++++++++++
//* A. Q + A
// skipped!
//* B. Strings ========================
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 3;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = "Hacking JS!";
// What is the value of firstVariable?
console.log("The value of firstVariable is: " + firstVariable);
// Create a variable called yourName and set it equal to your name as a string. 
let yourName = "Rambo";
// Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
const greetMessage = "Hello, my name is " + yourName;
console.log(greetMessage);

//* C. Booleans  ======================
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

//* D. The Farm ============================
// Declare a variable animal. Set it to be either "cow" or something else
const animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
if (animal === "cow"){
	console.log("mooooo");
} else {
	console.log("Hey! You're not a cow.");
}

//* E. Driver's Ed =========================
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
const personAge = 30;
if (personAge >= 16) {
	console.log("Here are the keys");
} else {
	console.log("Sorry, you're too young.");
}

//TODO II. Loops ++++++++++++++++++++++++++++++++++++++++++++++++++++

//* A. The Basics ===============================
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
	// console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
	// console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i+=3){
	// console.log(i);
}

//* B. Get even ==============================
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		// console.log(i + " <-- is an even number");
	}
}
//* C. Give me Five ===============================
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i = 1; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log(`I found a ${i}. High five!`);

		// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
	} else if (i % 3 === 0) {
		console.log(`I found a ${i}. Three is a crowd`);
	}
	
	// For numbers divisible by both three and five, be sure your code prints both messages
	if (i%5 == 0 && i%3 === 0) {
		console.log(`I found a ${i}. High five!`);
		console.log(`I found a ${i}. Three is a crowd`);
	}

}

//*  D. Savings account =================
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bankAccount = 0;
for (let i =0; i <= 10; i++) {
	bankAccount += i;
}
// Check your work! Your bank_account should have $55 in it.
console.log('$' + bankAccount);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let bankAccount2 = 0;
for (let i = 0; i <= 100; i++) {
	bankAccount2 += i*2;
}
// Check your work! Your bank_account should have $10,100 in it.
console.log('$' + bankAccount2);

//TODO III. Arrays & Control Flow ++++++++++++++++++++++++++++++++++++++++++++++
// A. Talk about it:
// skipped!
//* B. Easy Does It ===================================
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["some quotes 1", "some quotes 2", "some quotes 3"]

//* C. Accessing elements ===================
// Given the following array:
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello"to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

//* D. Change values ================
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[ourClass.length -1] = "Octocat"; // access the array from the last item
console.log(ourClass[4]);

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//* E. Mix It Up ==================
//Given the following array: 
const myArray = [5, 10, 500, 20];
// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Cohort04");
console.log(myArray);

// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.splice(4, 1);
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.sort();
myArray.sort((a,b) => a - b); // passing a compare function
console.log(myArray);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//* F. Biggie Smalls =================
// Create a variable that contains an integer.
let int = 11;
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
if (int < 100) {
	console.log("little number");

	// console.log()s big number if the number is greater than or equal to 100.
} else if (int >= 100) {
	console.log("big number");
}

//* G. Monkey in the Middle =================
// Write an if ... else if ... else statement:
let int2 = 22;
// console.log()little number if the number entered is less than 5.
if (int2 < 5) {
	console.log("little number");

	// If the number entered is more than 10, log big number.
} else if (int2 > 10) {
	console.log("big number");

	// Otherwise, log "monkey".
} else {
	console.log("monkey");
}

//* H. What's in Your Closet? ===============
const kristynsCloset = [
	"left shoe",
	"cowboy boots",
	"right sock",
	"Per Scholas hoodie",
	"green pants",
	"yellow knit hat",
	"marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
	[
	  // These are Thom's shirts
	  "grey button-up",
	  "dark grey button-up",
	  "light blue button-up",
	  "blue button-up",
	],[
	  // These are Thom's pants
	  "grey jeans",
	  "jeans",
	  "PJs"
	],[
	  // Thom's accessories
	  "wool mittens",
	  "wool scarf",
	  "raybans"
	]
  ];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans")
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
const shirt = thomsCloset[0][0];
console.log(shirt);

// In the same way, access one item from Thom's pants array.
const pants = thomsCloset[1][0];
console.log(pants);

// Access one item from Thom's accessories array.
const raybans = thomsCloset[2][2];
console.log(raybans);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${raybans}!`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

//TODO IV. Functions +++++++++++++++++++++++++++++++++++++++++++++++

//* A. ===============
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

function printGreeting(name) {
	return `Hello there ${name}`;	
}
console.log(printGreeting("Slimer"));

//* B. =================
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
	return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));

//*  C. ===============
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(number) {
	return number ** 3;
	// or
	// return number * number * number;
}
console.log(calculateCube(5));

//*  D. =======================
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(char) {
	return ['a', 'e', 'i', 'o', 'u'].includes(char);
}
console.log(isVowel("a"));

//* E. ========================
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.\
function getTwoLengths(string1, string2) {
	return [string1.length, string2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//*  F. ====================
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(stringArray) {
	return stringArray.map( string => string.length );
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//* G. ==========================
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.log(maxOfThree(6, 9, 1));

//* H. ==========================
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(arrayOfStrings) {
	let longestWord = '';
	arrayOfStrings.forEach(word => {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	});
	return longestWord;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________

// Extra
