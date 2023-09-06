// let amount=0
// do{
//     console.log("you have a "+ amount +" dollars")
//     amount++;
//     //console.log("hey hello")
// }
// while(amount<20);

// let i;
// for(i=10;i<=20;i++){ // increment
//     console.log("the numnber is:"+i);
// } 
let arr=[
    {
        id:'1',
        name:'prasad',
        age:'23'

    },
    {
        id:'2',
        name:'hemanth',
        age:'25'
    },
    {
        id:'3',
        name:'surya',
        age:'34'
    },
    {
        id:'4',
        name:'vamsi',
        age:'31'
    },
    {
        id:'5',
        name:'madhu',
        age:'30'
    },
]
function check(){
    for(i=0;i<=arr.length-1;i++){
        //console.log(arr[i].age)
        if (arr[i].age>30){
            console.log("eligible")
        }else{
            console.log("not eligible")
        }
    }
}
check();