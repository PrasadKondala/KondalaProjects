// Define the range of numbers
const start = 1;   // Start of the range
const end = 20;    // End of the range

// Function to print even numbers in the specified range
function printEvenNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Call the function to print even numbers
console.log("Even numbers between " + start + " and " + end + ":");
printEvenNumbers(start, end);
