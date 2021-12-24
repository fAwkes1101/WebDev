//function hoisting effects the function expression
//First parsing and hoisiting is done
// Function exp me variable define ho jaega prr assignment nhii hoga hoisting ke time
//parsing -> js ka engine saare code ke through jana
//hoisting -> memory me code chadna
//parsing ke time pe hoisting hoti hai, parsing ke time function declaration hoist hoga, and function expression me variable me undifined assign hoga
// .call is used to replace the default this passed, only when .call used 

let obj = {
    f1 : function(par2,par3){
        console.log(par2,par3,"and " + this.Name);
    },
    Name : "Rahul"
}

Function.prototype.Mycall = function (o2,par2,par3){
    
    o2.f1(par2,par3,o2);

}
let o2 = {
    Name : "Sumit"
}
obj.f1.Mycall(o2, "Hi ","Abhishek");

console.log(obj.Name);