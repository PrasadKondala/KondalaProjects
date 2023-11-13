// Function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number < 0) {
      return "Invalid input. Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Example usage
  const inputNumber = 5;
  const factorialResult = calculateFactorial(inputNumber);
  console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);
  