// Create a new set
let mySet = new Set();

// Add elements to the set
mySet.add(1);
mySet.add("Hello");
mySet.add({ key: "value" });

// Check if an element is in the set
console.log(mySet.has(1)); // true

// Delete an element from the set
mySet.delete("Hello");

// Get the size of the set
console.log(mySet.size); // 2

// Iterate over the elements of the set
mySet.forEach((element) => {
  console.log(element);
});

// Clear all elements from the set
mySet.clear();
