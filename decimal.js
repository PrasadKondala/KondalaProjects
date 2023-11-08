// Define two decimal numbers
const num1 = 3.14;
const num2 = 2.718;

// Addition
const sum = num1 + num2;
console.log(`Sum: ${sum}`);

// Subtraction
const difference = num1 - num2;
console.log(`Difference: ${difference}`);

// Multiplication
const product = num1 * num2;
console.log(`Product: ${product}`);

// Division
const quotient = num1 / num2;
console.log(`Quotient: ${quotient}`);

// Rounding
const roundedNum1 = Math.round(num1); // Round to the nearest integer
console.log(`Rounded num1: ${roundedNum1}`);

// Formatting
const formattedNum1 = num1.toFixed(2); // Format to 2 decimal places
console.log(`Formatted num1: ${formattedNum1}`);

// Converting a string to a decimal number
const str = "42.56";
const parsedNumber = parseFloat(str);
console.log(`Parsed Number: ${parsedNumber}`);

// Checking for NaN (Not-a-Number)
const notANumber = parseFloat("ThisIsNotANumber");
console.log(`Is it NaN? ${isNaN(notANumber)}`);
