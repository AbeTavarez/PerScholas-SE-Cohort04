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
        if (Math.random() < alien.accuracy) {
            console.log("%cEnemy ship is attacking! Alien Ship FirePower is: " + this.firepower, "color: red");
            this.hull -= alien.firepower
        } else {
            console.log("%c The Enemy missed!", "color: green");
        }
    }
}


//* === Alien Class; Extends the Ship Class ===
// TODO This class will hold the props and methods that are specific to the AlienShip

class AlienShip extends Ship {
    
    hull = Math.round(Math.random() * 3 + 3); // number between  3 - 6
    firepower = Math.round(Math.random() * 2 + 2) // number between  2 - 4
    accuracy = Math.round(Math.random() * 2 + 6) / 10 // number between  0.6 - 0.8

    // no need for a constructor in this case
  
}



//?? +++++ GAME LOGIC +++++
// Test instance of the SHip class
const ship = new Ship(5, 5, 1);
// console.log(ship);

// Instance of the HumanShip 
const ussAssembly = new HumanShip('USSAssembly', 20, 5, 0.7);
console.log(ussAssembly);


// Instance of the AlienShip
const alienShip = new AlienShip();
console.log(alienShip);

// Simulate first battle
ussAssembly.attack(alienShip);

console.log(ussAssembly);
console.log(alienShip);