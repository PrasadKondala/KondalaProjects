//creating an object literal
let person = {
    name : "prasad",
    age: 24,
    place: "Hyderabad",
    job : {
        companyName: "tcs",
        salary : 30000,
        companyLocation: "Hyderabad"

    },
    greet: function() { return ("Hello")},
    get getName() {
        return this.greet();
    }
}

console.log(person.getName);

console.log(person);

//Accessing properties using dot notation 

console.log(person.name, person.place);
console.log(person.job.salary);
person.greet();

//Accessing properties using bracket notation 

console.log(person["age"]);

//Parsing

let number = "18";
let result1 = parseFloat(number);

console.log(result1);

let floatNum = "52.96";
let result2 = parseInt(floatNum);

console.log(result2);

let bool = "true";
let result3 = parseInt(bool);

console.log(result3);

//using constructor function

function Person(name,age,gender,greeting) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    this.greet = function() {
        this.greeting = greeting;
        return greeting;
    }
}

//creating 2 objects using new keyword with different arguments

let person1 = new Person("prasad", 20,"male","hello");
let person2 = new Person("rajesh", 35,"male","hi");

//adding new property to the newly created objects

person1.salary = 35000;
person2.salary = 40000;

console.log(person1.salary);
console.log(person2.salary);

//we cannot add new properties to the constructor function 

Person.salary = 60000;

//to add new property or method we will use prototype 

Person.prototype.salary = 60000;

//By Using Object literal we can create only single object but by using constructor function we can create multiple objects.
