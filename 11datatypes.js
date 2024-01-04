// Number data type
let num = 42;

// String data type
let str = "Hello, World!";

// Boolean data type
let isTrue = true;
let isFalse = false;

// Array data type
let fruits = ["apple", "banana", "cherry"];

// Object data type
let person = {
  name: "John",
  age: 30,
  isStudent: false,
};

// Undefined data type
let notDefined;

// Null data type
let empty = null;

// Function data type
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Display the values and their data types
console.log("Number: " + num, typeof num);
console.log("String: " + str, typeof str);
console.log("Boolean (true): " + isTrue, typeof isTrue);
console.log("Boolean (false): " + isFalse, typeof isFalse);
console.log("Array: " + fruits, typeof fruits);
console.log("Object: " + JSON.stringify(person), typeof person);
console.log("Undefined: " + notDefined, typeof notDefined);
console.log("Null: " + empty, typeof empty);
console.log("Function: " + greet, typeof greet);
