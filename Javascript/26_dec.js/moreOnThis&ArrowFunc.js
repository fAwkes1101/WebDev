//this and arrow function.
a=100;
b=200;
c=300;

function fun(){
    console.log(this.a +" "+ this.b +" "+ this.c);
}

Object.prototype.a=1000;//
Object.prototype.b=2000;// this of => function can be used like this in node
Object.prototype.c=3000;//

let obj ={
    a : 10,
    b : 20,
    c : 30,
    fun1 : function(){ 
        console.log(this.a +" "+ this.b +" "+ this.c);
    },
    fun2 : fun,

    fun3 : () => {
        console.log(this.a +" "+ this.b +" "+ this.c);
    }


};
o2 = {
    a : 1000,
    b :2000,
    c : 3000,
};

obj.fun1(); // 10, 20, 30
fun(); // 100, 200, 300 -> khulla call kiya to this global window a, b ,c hoga
obj.fun2();// 10, 20, 30 -> this will be equal to obj, fun2 is fun but obj is calling so this is obj
obj.fun3();// *********undefined undefined undefined-> arrow functions ke ander this, call, bind, apply, arguments use nhii krna,as constructor bhi nhi krna

fun.call(o2); //// 1000 2000 3000
obj.fun1.call(o2); // 1000 2000 3000
obj.fun2.call(o2); // 1000 2000 3000
obj.fun3.call(o2); // ********undefined undefined undefined-> arrow functions ke ander this, call, bind, apply, arguments use nhii krna ,as constructor bhi nhi krna
                   // arrow function ko map, filter ese chote kaam ke use krna hota hai, object ke ander =>  na use kare