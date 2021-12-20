//Anonymous function

//1.Funcion expression.
let funcVar = function sayHi(){
    console.log("hello");
}
funcVar(); //function ko ek variable me store kr liya then uss variable ko use karke func ko call lg liya

//2.
//IIFE -> immidiately invoked function, jaise call kraa waise chll gya
(function drawBoard(){
    console.log("Board is drwan");
})();
