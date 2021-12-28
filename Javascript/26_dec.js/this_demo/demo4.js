function fun() {
    let a = 10;  // let use karne se a fun ka local variable banega and outside fun "a" agar a ko access karenge then error
        console.log(a);
}

fun(); //10
console.log(a); //ReferenceError: a is not defined