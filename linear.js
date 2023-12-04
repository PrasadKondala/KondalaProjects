// Function to solve a linear equation: ax + b = 0
function solveLinearEquation(a, b) {
    if (a === 0) {
      if (b === 0) {
        return 'Infinite solutions (Any value of x satisfies the equation)';
      } else {
        return 'No solution (The equation is invalid)';
      }
    } else {
      const x = -b / a;
      return `Solution: x = ${x}`;
    }
  }
  
  
  const coefficientA = 2;
  const coefficientB = -4;
  
  
  const solution = solveLinearEquation(coefficientA, coefficientB);
  
  console.log(solution);
  