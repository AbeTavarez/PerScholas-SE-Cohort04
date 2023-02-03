// ===== Literal Array
//     index     0, 1,  2,   3
const numbers = [2, 5, 8, 11, 2, 5];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[2]);

// ===== Movies Array
const movies = ['Caddyshack', 'Interstellar', 'Scarface'];
console.log(movies);

const favMovie = movies[1];
console.log(favMovie);

// Updating a value inside of an array
movies[2] = "Transformers";
movies[3] = "MR Robot";//add a new movie using square brackets

// add elements to the end of the array
movies.push('Trading Places', 'Antitrust');

// add elements to the start of the array
movies.unshift("Star Wars")

// remove an element from the end of the array
const removedMovie = movies.pop()

// remove an element from the end of the array
movies.shift()

console.log(removedMovie);
console.log(movies);

//array.splice(start, deleteCount, newItem1, newItem2...)
movies.splice(3, 2, 'Spaceballs', 'Alien')
// movies.splice(0, 3)

console.log(movies);

function sayHello() {

}

// ForEach Loop
movies.forEach( function(movie, idx) {
    // console.log(idx, movie);
});

// For Of Loop
for (let movie of movies) {
    // console.log(movie);
}

// For Loop
for (let i = 0; i < movies.length; i++) {
    console.log( movies[i] );
}

const lastTwoMovies = movies.slice(0, 2)

lastTwoMovies.push("Toy Story");

console.log(lastTwoMovies);

// Spread Operator
const moviesCopy = ["Star Wars", ...movies, 'Contact']

moviesCopy.push("Up");

console.log(movies);
console.log(moviesCopy);

const moviesStr = moviesCopy.join(", ")
console.log(moviesStr);