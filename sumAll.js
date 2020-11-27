// sum ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. sumAll(2,5,6,7) === 20

function sumAll(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur);
}

console.log(sumAll(2,5,6,7))