function filterByKeyword(array, keyword) {
    // Use the filter method to return a new array with strings containing the keyword
    const filteredArray = array.filter((str) =>
      str.toLowerCase().includes(keyword.toLowerCase())
    );
  
    return filteredArray;
  }
  
  // Example usage
  const arrayOfStrings = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "pineapple",
    "watermelon",
  ];
  const searchKeyword = "an";
  
  const filteredResults = filterByKeyword(arrayOfStrings, searchKeyword);
  console.log(
    `Strings containing the keyword "${searchKeyword}":`,
    filteredResults
  );
  