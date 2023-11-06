function printOddNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  // Specify the limit to print odd numbers up to
  const limit = 20; // You can change this to any positive integer
  
  // Call the function to print odd numbers
  printOddNumbers(limit);
  