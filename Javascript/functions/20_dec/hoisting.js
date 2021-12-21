//Jo sabse last me function same name wala hoga exicute hoga
//No function overloding

//1. first this function will get memory in heap say at 8k and stack me iamReam variable me 8k store ho jaega
function iamReal(){     
    console.log("I am real");
}
//2. second as again a function will get memory in heap at 16k and this 16k address of func will get stored in iamReal variabe in stack
function iamReal(){
    console.log("I am real -> he isnt");
}

iamReal(); // 2nd function will we exicuted as in iamReal variable of stack 16k will be stored