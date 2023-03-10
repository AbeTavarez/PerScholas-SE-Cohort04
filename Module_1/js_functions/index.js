
sayHello()
// sayBye() error!


// function definition (hoisted)
function sayHello() {
    // body of the function
    console.log("Hello!");
}

// function expression (No hoisting)
const sayBye = function() {
    console.log("Bye!");
}
sayBye()

// Arrow function
const sayHelloWorld = () => console.log("Hello World!");
sayHelloWorld()

const addTwo = (a, b) => a + b;

function add(num1, num2){
    // return the addition of two numbers
    console.log("From function", num1, num2);
    return num1 + num2;
}


const result = add(3, 5)
// console.log(result);

function areBothEven(n1, n2){
    console.log(arguments);

    if (typeof(n1) !== "number" || typeof(n2) !== "number"){
        // console.log("Arguments must be of type number!");
        return;
    }
    
    return !(n1 % 2) && !(n2 % 2);
}

const isEven = areBothEven(2, 4, 99, 8, 6);
// console.log(isEven);


function getDevObject(name, lastName) {
    // ["Maria", "Smith" ,"html", "css", "js"]
    const skills = [];
    // console.log(arguments);

    for (let i = 1; i < arguments.length; i++){
        skills.push(arguments[i])
    }
    return {
        devName: name,
        devLastName: lastName,
        jobSkills: skills
    }
}

const devObj = getDevObject("Maria", "Smith" ,"html", "css", "js", "react");
// console.log(devObj);

function getDevFullObject(name, lastName, ...skills) {
    // const copyArr = [ ...skills ]
    return {
        devName: name,
        devLastName: lastName,
        devSkills: skills
    }
}

getDevFullObject("John", "Smith" ,'python', 'html', 'css')


//
function setColor(bike, color = "purple", size = 20) {
    return {
        bikeType: bike,
        bikeColor: color,
        bikeSize: size
    }
}

const bikeObj = setColor("bmx", "red")
// console.log(bikeObj);




const colorsArr = ['red', 'green', 'blue'];

colorsArr.forEach( function(color){
    console.log(color.toUpperCase()) 
})



function foo(x) {
    let r = x + 4;

    function bar() {
        let total = x + 10;
        console.log(r);
    }
}

// console.log(window);

// var pollution = "thi is bad"
// console.log(window.pollution);

// function printXTimes(n) {
//     // the base case
//     if (n < 0) return;
//     // the action
//     console.log(`${n} more prints to go`);
//     // the recursive call
//     printXTimes(n - 1);
// }

// printXTimes(3)

function factorial(n){
    if (n <= 0) return 1;
    console.log(`Will return ${n} * factorial(${n - 1})`)
    return n * factorial(n-1);
}

factorial(4)