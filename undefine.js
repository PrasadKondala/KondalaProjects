// Declare a variable without assigning a value
var uninitializedVariable;

// Check if the variable is undefined
if (typeof uninitializedVariable === "undefined") {
  console.log("The variable is undefined.");
} else {
  console.log("The variable is defined and has a value.");
}

// Assign a value to the variable
uninitializedVariable = "Hello, world!";

// Check the variable again
if (typeof uninitializedVariable === "undefined") {
  console.log("The variable is still undefined.");
} else {
  console.log("The variable is now defined and has a value: " + uninitializedVariable);
}
