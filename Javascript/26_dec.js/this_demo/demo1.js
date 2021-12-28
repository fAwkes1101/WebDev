// We can use function as object in js.

function Person(name, age) { // here a function Person() will get memory in heap at say -> 12k
    this.name = name;
    this.age = age;
    this.sayHi = function(f1) {
        console.log(this.name + "[" + this.age + "] says hi to " + f1);
    }
}

let p1 = new Person("Sumeet", 34); // using new keyword with function Person() a new memory bubble(function) will get memory in heap at say-> 14k
p1.sayHi("Pankaj"); // OUTPUT: Sumeet[34] says hi to Pankaj
                    // this.name and this.age have set value of age and name in p1 memory block(object/function)
                    // so when sayHi() function of p1 will access name and age using this they will get Sumit and 34


