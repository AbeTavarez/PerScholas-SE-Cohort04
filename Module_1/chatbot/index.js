
// Ask user for input
var userName = prompt("Hello, What is your name?");

console.log(typeof userName);

var favNum = prompt(userName + " whats your favorite number?");

console.log( typeof favNum );

// alert the user
// alert("Cool" + " " + userName + " nice favorite number " + favNum);

// === Template String
alert(`Cool ${userName} nice favorite number ${favNum}!\n You should use that number for your pin`);