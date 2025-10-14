// Task (1)

// Generate random numbers
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Ensure that the min number and max numbers are included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Task (2)
const findMax = (array) => Math.max(...array);

// Task (3)
const findMinAndMax = (arrayOfNumbers) => {
    const max = findMax(arrayOfNumbers);
    const min = Math.min(...arrayOfNumbers);
    return [max, min];
};

const arrayOfNumbers = [];

for (let x = 0 ; x < 5; x++) {
    // Random integer between 1 and 10 (inclusive)
    arrayOfNumbers.push(getRandomIntInclusive(1, 10));
}
// Show how many numbers we had
console.log(arrayOfNumbers);

const filterArray = arrayOfNumbers.filter(number => number > 5)
    // Create an array of objects using map method
    .map(number => ({ num : number }))
    //Reduce the array objects
    .reduce((accumulator, currentValue) => accumulator * currentValue.num, 1);

// Output for task 2
console.log("Output for task 2:", findMax(arrayOfNumbers))
// Output for task 1
console.log("Output for task 1:", filterArray)
// Output for task 3

// Destructuring an array
const [max, min] = findMinAndMax(arrayOfNumbers);
console.log(`Output for task 3: min=${min} max=${max}`);

// Output for task 4: No duplicate
const setOfArray = new Set(arrayOfNumbers);
const outPutSet = Array.from(setOfArray);
console.log(`Output for task 4: ${outPutSet}`);