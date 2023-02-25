//* === Ship Class ===
// TODO This class will hold the props and methods that can be shared to all classes

class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull; //same as hitPoints or health
    this.firepower = firepower; // the damage it can produce
    this.accuracy = accuracy; // chances to hit a target between 0-1
  }
}

//*  === Human Class; Extends the Ship Class ====
// TODO This class will hold the props and methods that are specific to the HumanShip

class HumanShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(hull, firepower, accuracy);
    this.name = name;
  }

  attack(alien) {
    if (Math.random() < this.accuracy) {
      console.log("%cYou have been hit!", "color: red");
      this.hull -= alien.firepower;
    } else {
      console.log("%cThe Enemy missed!", "color: green");
    }
  }
}

//* === Alien Class; Extends the Ship Class ===
// TODO This class will hold the props and methods that are specific to the AlienShip

class AlienShip extends Ship {
  hull = Math.floor(Math.random() * 4) + 3; // number between  3 - 6
  firepower = Math.floor(Math.random() * 3) + 2; // number between  2 - 4
  accuracy = (Math.floor(Math.random() * 3) + 6) / 10; // number between  0.6 - 0.8

  // no need for a constructor in this case

  // Make a method for the alien ship to attack a target.
  attack(humanShip) {
    // Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.
    if (Math.random() < this.accuracy) {
      humanShip.hull -= this.firepower;
    } else {
      console.log("%c You missed!", "color: red");
    }
  }
}

//?? +++++ TEST GAME LOGIC +++++
// Test instance of the SHip class
const ship = new Ship(5, 5, 1);
// console.log(ship);

// Instance of the HumanShip
const ussAssembly = new HumanShip("USSAssembly", 20, 5, 0.7);
// console.log(ussAssembly);

// Instance of the AlienShip
const alienShip = new AlienShip();
// console.log(alienShip);

// Simulate first battle
// ussAssembly.attack(alienShip);

console.log(ussAssembly);
// console.log(alienShip);

// TODO: Make a game object

class Game {
  aliensShips = this.createAlienShips();

  constructor(playerShip) {
    this.playerShip = playerShip;
  }

  // Make many alien ships with a Class. Make each object slightly different . . .
  createAlienShips() {
    const array = [];
    for (let i = 0; i < 6; i++) {
      array.push(new AlienShip());
    }
    return array;
  }

  // Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.
  checkWin() {
    if (this.aliensShips[0].hull <= 0 || this.playerShip.hull <= 0) {
      console.log("%cThe Ship went kabloo-ey!", "font-size: 22px; color: red");
    }
  }

  play() {
    
    while (this.aliensShips[0].hull > 0 && this.playerShip.hull > 0) {
      // player attacks first
      this.playerShip.attack(this.aliensShips[0]);

      // At a status console log for the end of the round.
      console.log(
        `Player Hull: ${this.playerShip.hull} and Alien Hull: ${this.aliensShips[0].hull}`
      );
      // check for winner kabloo-ey
      this.checkWin();

      // PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to attack you. Fix this.s
      if (this.aliensShips[0].hull > 0) {
        this.aliensShips[0].attack(this.playerShip);
        console.log(
          `Player Hull: ${this.playerShip.hull} and Alien Hull: ${this.aliensShips[0].hull}`
        );
      }
    }
  }
}

const game = new Game(ussAssembly);
console.log(game);
// * Init Game
game.play()