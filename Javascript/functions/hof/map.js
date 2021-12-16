//functions are availabe on arrays
//it dosent change the original array

let array =[1, 2, 3, 4, 5];

function square(x){
  return x*x;
}
function cube(x){
    return x*x*x;
}

let squaredArray = array.map(square);
let cubedArray = array.map(cube);

console.log(squaredArray);
console.log(cubedArray);