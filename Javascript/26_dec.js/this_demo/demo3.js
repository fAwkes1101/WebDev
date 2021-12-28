//demo 2 uses this.a here without using same will process will happen i.e. global-object me "a" banega usme 10 set ho jaega.

function fun() {
    a = 10;
    console.log(a); //10
}

fun();
console.log(a); // 10 -> yha jab a ko access karege to wo phle too opean me a dhundega then in global-object wale pool me.