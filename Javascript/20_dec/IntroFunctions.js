// Function defination
function sayHi(name){
    console.log("Hello ",name );
}

sayHi("Abhishek");  //Function invocation
console.log(sayHi("Abhishek")); // "undefined" will be printed as sayHi() returns nothing

sayHi(); // when no parameter is passed in place of name in sayHi() function undefined is assigned to name

console.log(sayHi); //[Function: sayHi] -> function is to be printed this way when we ask to print the function not call it.