// Function to generate an array of descending numbers
function generateDescendingNumbers(count) {
    let descendingNumbers = [];
  
    for (let i = count; i >= 1; i--) {
      descendingNumbers.push(i);
    }
  
    return descendingNumbers;
  }
  
  // Specify the number of elements
  const numberOfElements = 10;
  
  // Generate descending numbers
  const descendingNumbersArray = generateDescendingNumbers(numberOfElements);
  
  // Display the result
  console.log("Descending Numbers:", descendingNumbersArray);
  