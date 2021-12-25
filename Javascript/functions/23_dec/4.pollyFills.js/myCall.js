Function.prototype.myCall = function(){
    let orgFun = this; // this here is fun1 who called myCall using "."
    let args = Array.from(arguments); // Array.from(arrayLike) is used on array like strucutures 
                                      //(exp.Strings), and returns each element filled in an array
    let thisForCall = args[0];// gives the explicit this object (o2).
    let params = args.slice(1);

    thisForCall.fun1_of_o2 = orgFun;// makes an function in o2 and assign the f1 of original object in it,
                                    
    thisForCall.fun1_of_o2(...params); // Note: (...arrayName) -> array ko fod ke saare elements ko coma seperated provide krta hai
                                // arr = [10, 20, 30, 40, 50]
                                // ...arr = 10, 20, 30, 40, 50
    delete thisForCall.fun1_of_o2; // deleting "fun1_of_o2" as originally it dosent exists in o2.

    
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
