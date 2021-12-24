
Function.prototype.myApply = function(){
     let orgFun = this;
     let args = Array.from(arguments);
     let mythis = args[0];
     //orgFun.call(mythis, )
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
obj.fun1.myApply(o2, ["Mehwish", "Shailja", "Supriya"]);
