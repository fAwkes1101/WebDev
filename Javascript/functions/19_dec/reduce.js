//reduce is a hof that takes function with 1st parameter as storage 
//that initially contains value at 0th element of arr who is calling reduce
// -> CASE 1
let arr = [5,10, 30, 50];
function product(storage, ele){
    return storage*ele;  // storage me initially by default 0th index value and ele me initially 1st index ki value 
}                        // ye returned value storage me save ho jaega then ele 1st to last index tak iterate hoga

console.log(arr.reduce(product));

// ->CASE 2
// when storage value is passed
console.log(arr.reduce(product,10)); //10 will be in storage  intailly and ele will start from 0th index
