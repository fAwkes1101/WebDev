let arr = [ 5, 10 ,13 ,19];
//cant use extra space
//cant use hof

for(let i =arr.length-1 ;i>=0; i--){
  let count =0;
   for(let j=2 ;j<= arr[i]-1 ;j++){
       if(arr[i]%j==0){
           count++;
       }
   }
   if(count==0){
       arr.splice(i,1);
   }

}
console.log(arr);