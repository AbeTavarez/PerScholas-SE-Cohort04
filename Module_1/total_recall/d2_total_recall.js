////////////////////////////////
//*  Easy Going
////////////////////////////////
// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
    // console.log(i);
}


////////////////////////////////
//* Get Even
////////////////////////////////
// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i+=2) {
    // console.log(i);
}

////////////////////////////////
//* Fizz Buzz
////////////////////////////////


////////////////////////////////
//* Wild Wild Life
////////////////////////////////


////////////////////////////////
//* Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
//* Methods, Revisited
////////////////////////////////


////////////////////////////////
//* Where is Waldo
////////////////////////////////


////////////////////////////////
//*  Excited Kitten
////////////////////////////////


////////////////////////////////
//*  Find the Median
////////////////////////////////
// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// sort array in place
nums.sort();
const middle = Math.floor(nums.length / 2)

console.log(nums[middle]);
//______
function findMedian(arrayOfNums) {
    arrayOfNums.sort((a, b) => a-b); // sort the array
    const middle = Math.floor(arrayOfNums.length / 2);

    // if array is odd, return the middle value
    if (arrayOfNums.length % 2 === 1) {
        return arrayOfNums[middle];
    } else {
        // if array is even add the  middle and the value before divided by 2
        return ( arrayOfNums[middle - 1] + arrayOfNums[middle] ) / 2;
    }
}

console.log(findMedian([2, 1, 3, 4]));