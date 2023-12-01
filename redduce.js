// Custom reduce function
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < array.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback(accumulator, array[i], i, array);
      } else {
        accumulator = array[i];
      }
    }
    return accumulator;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  
  // Summing up numbers using reduce
  const sum = customReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
  
  // Concatenating strings using reduce
  const words = ['Hello', ' ', 'World', '!'];
  const concatenatedString = customReduce(words, (accumulator, currentValue) => accumulator + currentValue, '');
  console.log(concatenatedString); 
  