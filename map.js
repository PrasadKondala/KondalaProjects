const people=[
    {name:"Prasad",age:23,position:"Leader"},
    {name:"Rajesh",age:24,position:"Ias"},
    {name:"Bharath",age:25,position:"Actor"},
];
const position=people.map(function(person){
    return person.position;
}
    );
    //console.log(position);

    const newPeopleArray=people.map(function(person){
        return{
            firstName:person.name,
            oldAge:person.age,
        };
    }
        );
        console.log(newPeopleArray);