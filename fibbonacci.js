function generateFibonacciSeries(n) {
    const series = [];
    
    if (n >= 1) {
      series.push(0);
    }
    if (n >= 2) {
      series.push(1);
    }
    
    for (let i = 2; i < n; i++) {
      const next = series[i - 1] + series[i - 2];
      series.push(next);
    }
    
    return series;
  }
  
  const numberOfTerms = 10; // Change this to the number of terms you want in the Fibonacci series
  const fibonacciSeries = generateFibonacciSeries(numberOfTerms);
  
  console.log(`Fibonacci Series (first ${numberOfTerms} terms): ${fibonacciSeries.join(', ')}`);
  