let fruitNames=["apple","berries","cherry","orange","strawberris"];
//length

console.log(fruitNames.length);
console.log(fruitNames.length-1);

// pop

console.log(fruitNames.pop());

//push

fruitNames.push("grapes");
fruitNames.push("banana");

//slice

console.log(fruitNames);
console.log(fruitNames.slice(0,3));

//reverse

console.log(fruitNames.reverse());

//unshift

fruitNames.unshift("berries");
fruitNames.unshift("cherry");
console.log(fruitNames);

//shift

fruitNames.shift();
fruitNames.shift();
console.log(fruitNames);

//concat

const fruitsNames=["papaya","kiwi","watermelon","mango"];
const allNames=fruitNames.concat(fruitsNames);
console.log(allNames);
 //include

  console.log(fruitsNames.includes("papaya"));
  console.log(fruitNames.includes("apple"));
  console.log(fruitsNames.includes("orange"));




// let numbers=[1,2,3,4,5];
// console.log(fruitNames=numbers);
// console.log(numbers);
// console.log(fruitNames);