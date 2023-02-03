

// iterator ; condition; incrementor
for (let i = 5; i >= 0; i--) {
    // console.log(i);
}


for (let i = 0; i <= 10; i = i + 2) {
    // console.log(i);
}

// Appending ######
let hash = '';
for (let i = 0; i < 10; i++) {
    hash = hash + "#";
    // console.log(i, hash);
}





for (let i = 1; i <= 20; i++) {
    // console.log(i);

    if (i % 2 === 0) {
        // console.log(i + " is even");

    } else if (i % 2 !== 0) {
        // console.log(i + " is odd");
    }
}




for (let i = 2; i <= 20; i++) {
    // Prime Number
    // a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
    let isPrime = true; 

    for (let j = 2; j < i; j++) {
        // console.log(j, " - " , i);
        if (i % j === 0) {
            // console.log(i + " Not a prime number");
            isPrime = false;
        }
    }

    if (isPrime) {
        // console.log(i + " is prime");
    }

}


for (let i = 0; i < 3; i++) {
    console.log(i + " Otter Loop");

    for (let j = 0; j < 3; j++){
        console.log(j, " Inner Loop");
    }
}