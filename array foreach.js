const people=[
    {name:"Prasad",age:23,position:"Leader"},
    {name:"Rajesh",age:23,position:"Ias"},
    {name:"Bharath",age:23,position:"Actor"},
];
function showPerson(person){
    console.log(person)
}
//people.forEach(showPerson);
people.forEach(function(item){
    console.log(item.name)
}
    );

