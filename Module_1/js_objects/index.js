// Reference Types
const colors = ["red", "blue", "white"]

const copyOfColors = colors.slice(0);

copyOfColors.push("purple");

console.log(colors);
console.log(copyOfColors);

const carArr = ["Blue", 4000, 1989]
const userArr = ["user1", 34, true]
// Objects

const car = {
    color: "Blue",
    hp: 4000,
    year: 1989
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
        zipcode: 10033
    },
}

console.log(user);
user.isAdmin = false;

if (user.isAdmin || user.age > 18) {
    console.log("Hello Admin");
} else {
    console.log("Hello Guest");
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
        zipcode: 10033
    },
};

house.rooms = 4;
house.hasPool = true;

house.address.state = "NJ"

// console.log(house);

const pet = {};
pet.legs = 3
// console.log(pet);