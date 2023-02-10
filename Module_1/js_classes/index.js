

// Create a new class
class Vehicle {

    constructor(vin, make, model, year) {
        this.vin = vin;
        this.make = make;
        this.model = model
        this.running = false;
        this.year = year;
    }

    // instance method: will start the vehicle
    start() {
        this.running = true;
        console.log("Vehicle running....");
    }

    toString() {
        return `Vehicle ${this.vin} is a ${this.make}, model ${this.model}.`
    }

    // static method
    static vehicleInfo() {
        console.log("Vehicle class...");
    }

}

//* create an instance of the Vehicle class
const car1 = new Vehicle("7rh47rh", "Honda", "civic", 1995);

const car2 = new Vehicle("72gry2g", "BMW", "m3", 2022);

console.log(car1);
console.log(car2);

//* calling an instance method of Vehicle
car1.start()

//* calling a static method of Vehicle
Vehicle.vehicleInfo()

console.log(car1.toString())

//* Create a subclass or extend a parent class
class Electric extends Vehicle {
    battery = 300
}

const car3  = new Electric();
console.log(car3);




// instance method
const color = []
// color.forEach()

// static method
Math.random();