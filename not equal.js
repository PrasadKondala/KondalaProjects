// Function to compare two values and display the result
function compareValues(value1, value2) {
    if (value1 !== value2) {
      console.log(`${value1} is not equal to ${value2}`);
    } else {
      console.log(`${value1} is equal to ${value2}`);
    }
  }
  
  // Test the function with different values
  compareValues(5, 10);
  compareValues("Hello", "World");
  compareValues(true, false);
  compareValues(3.14, "3.14");
  