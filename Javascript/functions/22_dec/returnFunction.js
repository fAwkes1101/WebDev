//1. a function can be returned in javascript
function returnsFunc(){
    console.log("before returning");
    return function returnedFunc(){
        console.log("waps krr diss");
    }
}

let temp = returnsFunc();
console.log(temp); //[Function: returnedFunc]