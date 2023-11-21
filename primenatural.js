function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimeNumbers() {
    for (let i = 1; i <= 99; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  // Call the function to print prime numbers between 1 and 99
  printPrimeNumbers();
  