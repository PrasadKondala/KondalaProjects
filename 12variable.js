// Declare and initialize variables
let name = "John";
let age = 30;
let isStudent = false;

// Update variables
name = "Jane";
age = 25;
isStudent = true;

// Display variables
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is a student: " + isStudent);

// Perform operations with variables
let birthYear = new Date().getFullYear() - age;
console.log("Birth Year: " + birthYear);

// Variable scope
function localVarExample() {
  let localVar = "I'm a local variable";
  console.log(localVar);
}

localVarExample(); // Call the function
// console.log(localVar); // This would result in an error because localVar is local to the function

// Constants
const pi = 3.14159;
console.log("The value of pi is " + pi);

// Hoisting
console.log(hoistedVar); // This will log "undefined" due to hoisting
var hoistedVar = "I'm hoisted!";

// Global variables (not recommended)
globalVar = "I'm a global variable";
console.log(globalVar);
