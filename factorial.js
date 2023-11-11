function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
  }
  
  // Test the factorial function with a sample value
  let numberToCalculateFactorial = 5;
  let result = factorial(numberToCalculateFactorial);
  
  console.log(`The factorial of ${numberToCalculateFactorial} is: ${result}`);
  