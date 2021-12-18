//forEach -> it does the task for every elemnt of array
const arr1 = ["a","b", "c"];
function print(value){
    console.log(value);
}
arr1.forEach(print);

//"every" -> returns true if result of operation on all elements is true
function allEven(value){
    return value%2==0;
}
const arr2 = [2,4,6,8];
console.log(arr2.every(allEven));

//"some" -> returns true if operation on any element returns true
function anyEven(val){
    return val%2==0;
}
arr3 = [2,4,6,5,7,8];
console.log(arr3.some(anyEven));

//"findIndex" ->The findIndex() method returns the index of the first element in the 
//array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

function isLargeNumber(value){
    return value>13;
}
arr4 = [10,20,30,40];
console.log(arr4.findIndex(isLargeNumber));

