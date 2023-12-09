// program to merge property of two objects

// object 1
const person = {
    name: 'prasad',
    age:23
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = {...person, ...student};

console.log(newObj);