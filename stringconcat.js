// Define two strings
var firstName = "John";
var lastName = "Doe";

// Concatenation using the + operator
var fullName = firstName + " " + lastName;
console.log("Full Name (using + operator): " + fullName);

// Concatenation using the concat() method
var greeting = "Hello, ";
var message = greeting.concat(firstName, " ", lastName, "!");
console.log("Greeting (using concat() method): " + message);

// Concatenation with additional text
var intro = "My name is " + fullName + " and I'm learning JavaScript.";
console.log("Introduction: " + intro);
