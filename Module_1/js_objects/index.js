// Reference Types
const colors = ["red", "blue", "white"];

const copyOfColors = colors.slice(0);

copyOfColors.push("purple");

// console.log(colors);
// console.log(copyOfColors);

const carArr = ["Blue", 4000, 1989];
const userArr = ["user1", 34, true];
// Objects

const car = {
  color: "Blue",
  hp: 4000,
  year: 1989,
};

const user = {
  username: "user1",
  age: 34,
  isAdmin: true,
  hobbies: ["running", "reading"],
  address: {
    street: "123 MainSt",
    apt: 122,
    state: "NY",
    zipcode: 10033,
  },
};

// console.log(user);
user.isAdmin = false;

if (user.isAdmin || user.age > 18) {
  // console.log("Hello Admin");
} else {
  // console.log("Hello Guest");
}

// console.log(car);
// console.log(car.year);
// console.log(user);
// console.log(user.id);
// console.log(user.isAdmin);
// console.log(user.address.state);
// console.log(user.address.zipcode);
// console.log(user.hobbies)
// console.log(user.hobbies[1])

const house = {
  address: {
    street: "123 MainSt",
    apt: 122,
    state: "NY",
    zipcode: 10033,
  },
};

house.rooms = 4;
house.hasPool = true;

house.address.state = "NJ";

// console.log(house);

const pet = {};
pet.legs = 3;
// console.log(pet);

// Week 3 / day 3

const adventurer = {
  name: "Timothy",
  hitPoints: 10,
  belongings: ["sword", "potion", "Tums"],
};

for (let i = 0; i < adventurer.belongings.length; i++) {
  // console.log(adventurer.belongings[i]);
}

for (item of adventurer.belongings) {
  // console.log(item);
}

for (prop in adventurer) {
  console.log(prop);
}

const propName = "points";
console.log("hitPoints" in adventurer);

adventurer.health = 1000;

adventurer.sayHi = function () {
  console.log("Hi there!");
};

adventurer.isHungry = true;

// deletes a property
delete adventurer.isHungry;

// create a property using square brackets
adventurer["companion"] = {
  name: "Velma",
  type: "Bat",
};

adventurer.companion.belongings = ["bugs", "sunglasses"];
adventurer.companion.sayHi = function () {
  console.log("weeee!");
};

adventurer.height = 5.6;

console.log(adventurer);
adventurer.sayHi();
adventurer.companion.sayHi();

const movies = [
  { title: "Tokyo Story", minutes: 190 },
  { title: "Paul Blart: Mall Cop", minutes: 190 },
  { title: "L'Avventura", minutes: 190 },
];

// console.log(movies);
// console.log(movies[2].title);

for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i].title);
}

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
];

// console.log(todos[0].completed);



const player = {
    playerName: "Josh",
    health: 1000,
    power: 500,
    stamina: 300,
    sayHi: function() {
        console.log("Hello " + this.playerName);
    }
}

const enemy = {
    enemyName: "Colton",
    health: 100000,
    power: 50000,
    stamina: 1000000,
    sayHi: function() {
        console.log(`Hi my name is ${this.enemyName} my power is: ${this.power}`);
    }
}

console.log(player);
console.log(enemy);

player.sayHi()
enemy.sayHi()