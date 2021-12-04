// No return type or the data type of formal argments needs to be declared

function sayHi(){ // Simple functon to print hi
       console.log("hi");
}
sayHi(); // function call by passing no value


function add(a , b){ // addition function that takes 2 argments, print there sum and returns their sum
      console.log(a+b);
      return a+b;
}

let sum = add(4 ,3) // function call by passing values



//In JavaScript functions are known as first class Citizens
// because you can treat functions as variables in JavaScript


// Anonymous function (first class citizens)
let sayHi = function(a){   //
        console.log(a);   //This whole is also known as function Expression
}                        //

sayHi(2) // prints 2 // This how we pass value in an anonymous function


// IIFE (Immediately invoked function expression)
//here the whole function body is in () and as the function ends
//arguments are passed immediately in()

let add = (function(a,b){
       return a+b
})(10 , 20)

console.log(add)
