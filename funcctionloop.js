// Function to calculate the factorial of a number using a for loop
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Function to print the Fibonacci sequence up to a specified number of terms
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      const next = sequence[i - 1] + sequence[i - 2];
      sequence.push(next);
    }
    return sequence;
  }
  
  // Function to find and print the prime numbers within a given range
  function findPrimes(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
      let isPrime = true;
      if (num <= 1) {
        isPrime = false;
      } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primes.push(num);
      }
    }
    return primes;
  }
  
  // Example usage of the functions
  console.log("Factorial of 5:", factorial(5));
  
  const fibonacciSequence = fibonacci(10);
  console.log("Fibonacci Sequence (first 10 terms):", fibonacciSequence);
  
  const primeNumbers = findPrimes(10, 50);
  console.log("Prime Numbers between 10 and 50:", primeNumbers);
  