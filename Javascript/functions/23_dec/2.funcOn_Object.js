// Whenever a object calls its function then a "this" is passed
// automatically which represents the object whoever called the function.

let obj = {
    fun1: function(){
        console.log("This man is called " + this.fullName + ". His age is " + this.age);
    },
    fun2: function(){
        console.log("This man is called " + obj.fullName + ". His age is " + obj.age);
    },
    fun3: function(){
        console.log("This man is called " + fullName + ". His age is " + age);
    },
    fullName: "Sumeet Malik",
    age: 34
};

//  object "obj" ne apna function "f1" call kiya, then f1 ke andar object ki 
//  koi value access karni hoo to "this.key" or "obj.key" ka use kr sakte hai
obj.fun1(); // is same in java and js


obj.fun2(); // works in js but not in java
obj.fun3(); // works in java but not in JS