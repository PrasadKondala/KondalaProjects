function findKeyword(text, keyword) {
    // Split the text into an array of words
    const words = text.split(' ');
  
    // Loop through each word to find the keyword
    for (let i = 0; i < words.length; i++) {
      // Convert both the word and keyword to lowercase for case-insensitive comparison
      if (words[i].toLowerCase() === keyword.toLowerCase()) {
        return true; // Keyword found
      }
    }
  
    return false; // Keyword not found
  }
  
  // Example usage
  const textToSearch = "This is an example text where we'll find a keyword.";
  const searchTerm = "keyword";
  
  if (findKeyword(textToSearch, searchTerm)) {
    console.log(`The keyword "${searchTerm}" was found in the text.`);
  } else {
    console.log(`The keyword "${searchTerm}" was not found in the text.`);
  }
  