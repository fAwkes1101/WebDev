// var is function scoped
// let and const before decalaration, if accessed it is in temporal dead zone- > gives error
// let is block scoped
// cant redeclare let variable
// hoisting is memory allocation before code runs concepts in js
console.log("before declaration", a); //before declaration undefined
var a;
console.log("after declaration", a);  //after declaration undefined
a=10;
console.log("after initialisation", a); //after initialisation 10