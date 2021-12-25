// Simmilar approach as myCall except line 7 for params extraction

Function.prototype.myApply = function(){
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args[1];

    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    // arr = [10, 20, 30, 40, 50]
    // ...arr = 10, 20, 30, 40, 50
    delete thisForCall.fun;
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

let o2 = {
    fullName: "Neha",
    age: 33
};


obj.fun1.myCall(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
