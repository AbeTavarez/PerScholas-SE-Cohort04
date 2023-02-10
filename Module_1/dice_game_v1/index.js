//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll;
// PLAYER scores one point
// otherwise, COMPUTER scores one point

// if a player reaches 5 points that player wins the game

// console.log(Math.floor(Math.random() * 6) + 1) 

let playerScore = 0;
let computerScore = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

while (playerScore < 5 && computerScore < 5) {
    const playerRoll = rollDice();
    const computerRoll = rollDice();

    console.log("Player Roll: " + playerRoll);
    console.log("Computer Roll: " + computerRoll);
    checkDices(playerRoll, computerRoll)
   
}

function checkDices(playerRoll, computerRoll) {
    if (playerRoll > computerRoll) {
        playerScore += 1;
        if (playerScore === 5) console.log("P1 WINNER");

        console.log("Player Score: " + playerScore);
        
    } else if (computerRoll > playerRoll)  {
        computerScore += 1;
        if (computerScore === 5) console.log("PC WINNER");

        console.log("Computer Score: " + computerScore);

    } else if (computerRoll === playerRoll) {
        console.log("It's a draw!");
    }
}
