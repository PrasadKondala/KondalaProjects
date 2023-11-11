function printSquares(n) {
    for (let i = 1; i <= n; i++) {
      let square = i * i;
      console.log(`The square of ${i} is: ${square}`);
    }
  }
  
  // Test the printSquares function with a sample value
  let numberOfSquares = 5;
  printSquares(numberOfSquares);
  