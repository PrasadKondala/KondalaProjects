function mixedNumberToImproperFraction(whole, numerator, denominator) {
    return whole * denominator + numerator + '/' + denominator;
  }
  
  // Example usage:
  const mixedNumber = '3 1/2';
  const parts = mixedNumber.split(' ');
  if (parts.length === 2) {
    const whole = parseInt(parts[0], 10);
    const [numerator, denominator] = parts[1].split('/').map(Number);
    const improperFraction = mixedNumberToImproperFraction(whole, numerator, denominator);
    console.log(improperFraction);
  } else {
    console.log('Invalid mixed number format.');
  }
  