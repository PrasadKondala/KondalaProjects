// Example array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum all the numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of all numbers:", sum);
