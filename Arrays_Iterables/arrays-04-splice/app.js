// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
// hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);

// splice - splice(startOfTheArray, NumberOfElements you want to delete, array elements you want to add ...)
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

// Delete all the elements inside of array
hobbies.splice(0);

// if negative it will start at the end of the array.
const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);