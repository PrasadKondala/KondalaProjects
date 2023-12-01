// Custom filter function
function customFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6];
  
  // Filtering even numbers
  const filteredNumbers = customFilter(numbers, (number) => number % 2 === 0);
  console.log(filteredNumbers); // Output: [2, 4, 6]
  
  // Filtering numbers greater than 3
  const filteredNumbersGreaterThanThree = customFilter(numbers, (number) => number > 3);
  console.log(filteredNumbersGreaterThanThree); // Output: [4, 5, 6]
  