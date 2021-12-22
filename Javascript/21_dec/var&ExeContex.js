//1. var is function scoped
//2. let and const before decalaration, if accessed it is in "temporal dead zone" - > gives error
//3. let is block scoped
//3. cant redeclare let variable
//4. hoisting is memory allocation before code runs concepts in js

console.log("before declaration", a); //before declaration undefined
var a;
//console.log("after declaration", a); //after declaration undefined
a=10;
//console.log("after initialisation", a); //after initialisation 10

function varIsfuncScoped(){
    var a;// if this a was not declared inside the function then the  value of a in global exe contex is used.
    console.log("1->function ke andar wala a = ",a);
    a=20;
    console.log("2->function ke andar wala a after initialization = ",a);
    if(true){  // yha jo bhi changes honge wo ek bubble -> function contex me honge to same hi  pe honge
        var a =35;
        console.log("a inside if block of func is now = ",a );
    }
}
varIsfuncScoped();
console.log("bahar wala a = ",a);