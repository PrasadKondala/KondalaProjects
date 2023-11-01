function exampleFunction() {
    // This variable 'localVar' has local scope and is only accessible within this function.
    var localVar = "I'm a local variable";
  
    console.log(localVar); // This will print "I'm a local variable" to the console.
  }
  
  // Attempting to access 'localVar' outside the function will result in an error.
  // Uncommenting the line below will cause an error.
  // console.log(localVar);
  
  exampleFunction(); // Call the function to see the local variable in action.
  
