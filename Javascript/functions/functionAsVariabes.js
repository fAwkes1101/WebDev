

function sayHi(name){
    console.log("My name is " , name); // in place of name a key value pair will be printed [Function: chotaFunction]
    name(); // This will make call to name() function i.e. chotaFunction() ka address 
}



function chotaFunction(){
  console.log("ye kya ho gya");
}

sayHi(chotaFunction);