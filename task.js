let name="prasad"
var age= 23;

let i=10;
for (i=10;i<name.length;i++);
{
    //console.log(name[i]+":"+name.charAt(i));

}
let g=0;
while(g< age && age <=30){
    console.log(name);
    g++
}
let j=0;
do{
    console.log(name);
    j++;

}
while(j ===1 || (j % 2=== 0 && age & 2 ===0))


if (age<30){
    console.log("cricket tournament eligible");

}else if (age>30){
    console.log("not eligible for cricket tournament");
}else{
    console.log("last chance for cricket tournament")
}