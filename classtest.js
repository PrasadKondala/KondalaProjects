class test{
    constructor(number1,number2){
        this.number1=10;
        this.number2=20;
    }
    addition(){
 console.log(this.number1+this.number2)       
    }
}
let ref=new test(10,20)
ref.addition();