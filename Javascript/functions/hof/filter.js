//
//original array me koi change nhii hoga

let array =[2,6, 1, 7, 13, 17];

function oddTest(x){
  if(x%2!=0){
      return x;
  }
}
function evenTest(x){
    if(x%2==0){
        return x;
    }

}

let oddArray = array.filter(oddTest);
let evenArray = array.filter(evenTest);

console.log(oddArray);
console.log(evenArray);