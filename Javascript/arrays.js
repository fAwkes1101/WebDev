Arrays 

let arr = [1 , 'Hello', 3, true] 
// array is initialized with square brackets
// In JS you can put any kind of data in the array 
console.log(arr)  // prints array on console

//Array Methods
let cars = ["BMW" , "Jaguar" , "Mercedes"]
console.log(cars)

//replace an Element in an array
cars[1] = 'Bentley'
console.log(cars) 

//Add a new elemnet to an Array
cars[5] = 'Audi'
console.log(cars)

//lenghth of an Array
console.log(cars.length) //

//Array Manipulation Methods-
pop() // it takes out elemnet from the end of the array

let cars = ['BMW', "Jaguar" , "Mercedes"]

let poppedCar = cars.pop()
console.log(poppedCar)

console.log(cars)

// push - it adds an elemnet at the end of an array
cars.push('alto')
console.log(cars)


//shift - it removes element from the starting of the array
let shiftedCar = cars.shift()
console.log(shiftedCar)
console.log(cars)

//unshift - it adds an element at the start of an array
cars.unshift('alto')
console.log(cars)

//Delete a elements : splice function 
cars.splice(2,3); //This will delete elements of index 2,3 and 4. i.e. 3 elements from index 2

//indexof(value) //"value" is it is string
cars.indexOf("alto"); //returns index of alto if present in array else returns -1

//inclues(value) function
let find = cars.includes(alto); //returns true or false 












