//constructor function
function person(name,age,city,){
    this.name=name,
    this.age=age,
    this.city=city,
    this.greet=function(){
        if(this.name==="rajesh"){
            return ('hii')
        }else{
     return ('hello');
     } 
    }
}
//create objects
 const person1=new person("prasad", 23,"hyderabad");
 const person2=new person("rajesh", 23,"tekkali");
 const person3=new person("bharath" ,23,"hyderabad");
//  person2.greet=function(){
//     return('hii')
//  }

 //access properties
  console.log(person1.name,person1.age,person1.city,person1.greet());
  console.log(person2.name,person1.age,person2.city,person2.greet());

