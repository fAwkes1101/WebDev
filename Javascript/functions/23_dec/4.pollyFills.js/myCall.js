
Function.prototype.myCall = function(){
    let orgFunc = this;
    let args = Array.from(arguments);
    let mythis = args[0];
    let myargs = args.slice(1);
    orgFunc.apply(mythis, myargs);
 
}
let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ".");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");

        console.log(arguments);
    },
    fullName: "Sumeet Malik",
    age: 34
};

// obj.fun1("Navdeep", "Vikas");
let o2 = {
    fullName: "Neha",
    age: 33
};
obj.fun1.myCall(o2, "Mehwish", "Shailja", "Supriya");
