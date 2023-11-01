// Declare a global variable
var globalVariable = "I'm in the global scope";

function printGlobalVariable() {
  // Access the global variable from within a function
  console.log(globalVariable);
}

printGlobalVariable(); // Output: I'm in the global scope

// You can also access the global variable outside of functions
console.log(globalVariable); // Output: I'm in the global scope
