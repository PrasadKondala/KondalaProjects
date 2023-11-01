class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  // Create an instance of the Person class
  const person1 = new Person('prasad', 'kondala');
  
  // Access the properties and methods of the instance
  console.log(person1.firstName); // Output: John
  console.log(person1.getFullName()); // Output: John Doe
  