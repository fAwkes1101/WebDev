// When variable declared without let/var/const(inside a function) they automatically get in the Global-Window object pool.
// Opeanly declared variable (with or without using let,var, const) will get into Global-Window object pool.

function fun() {
    this.a = 10; //Global object me jake a banega then usme 10 set ho jaega "this" here denotes global object
    console.log(a); 10
}

fun();
console.log(a); //10 -> yha jab a ko access karege to wo phle too opean me a dhundega then in global-object wale pool me.
