// Create an empty list
var myList = [];

// Add elements to the list
myList.push("Item 1");
myList.push("Item 2");
myList.push("Item 3");

// Access and print elements in the list
console.log("List elements:");
for (var i = 0; i < myList.length; i++) {
  console.log("Element " + i + ": " + myList[i]);
}

// Modify an element in the list
myList[1] = "Updated Item 2";

// Remove an element from the list
myList.pop(); // Removes the last element

// Print the updated list
console.log("Updated list elements:");
for (var i = 0; i < myList.length; i++) {
  console.log("Element " + i + ": " + myList[i]);
}
