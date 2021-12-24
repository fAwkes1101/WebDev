Function.prototype.myBind = function(){
    let orgFun = this;
    let args = Array.from(arguments); // will return an array of args

    let boundFun = function(){
        let thisForOrgFun = args[0];
        let argsForOrgFun = args.slice(1);// except 0th element->new this object, whole array of args only
        let argsFromInvocation = Array.from(arguments); // args passed in boundFun when returned and called
        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation);

        orgFun.apply(thisForOrgFun, argsForOrgFun);
    }

    return boundFun;
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
let boundFunction = obj.fun1.myBind(o2, "Mehwish", "Shailja", "Supriya");
boundFunction("Sumeet");