//* Global Scope

//: || OR operator (either side can be true)
//: && AND operator (both sides need to be true)

//* Syntax
// if (true){

// } else {

// }

const score = 100;
const userLoggedIn = true;

if (score >= 60 && score <= 99) {
  // alert("You Win !")
} else if (score >= 50 || score <= 59) {
  // alert("Try Again!")
} else if (score === 100 && userLoggedIn === true) {
  // alert("Congrats to have a new high score!")
} else {
  // alert("You lose!")
}

// Exe.1
const age = 62;
const userName = "Alex";

if (age >= 18) {
  // check if user is older than 18
  // alert("Older than 18");

  // check for ticket price by age
  if (age <= 60) {
    // alert("You pay $7")
  } else {
    // alert("Free Movie day!")
  }
} else {
  // alert("Too young!")
}



const color = "yellow";

switch (color) {

  case "red":
  case "yellow":
    console.log("color is yellow");
    break;

  case "purple":
    console.log("Color is purple");
    break;

  default:
    console.log("Please pick a color!");
}
