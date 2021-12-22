//->Function closure means when function is poped from stack but its inner 
//  function can access the outer function variables using closures.

function outer(num1){
    console.log("before returing inner");

    return function inner(num2){
        return num1*num2;
    }
}

let val1 = outer(5);
let val2 = val1(3);
console.log(val2); //15 -> because of closures inner function ke pass 
                   //outer ke variables ka access hamesha rhta hai jab tk inner ka kam khatam na ho jae
                   //and outer wala function is removed from stack