
let arr = [1,2,3,4,5,6];

function checkOdd(val){
    
    if(val%2==1){
        return true;
    }
}
function checkEven(val){
    
    if(val%2==0){
        return true;
    }
}

function myFilter(arr,test){ // pollyFill of filter
    let res =[];
   for(let i=0; i<arr.length;i++){
       let check =test(arr[i]);  // it works on returned true/false values
       if(check==true){       
           res.push(arr[i]);
       }
   }
   return res;

}

let res = myFilter(arr,checkeven);
console.log(res);