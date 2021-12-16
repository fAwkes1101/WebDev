let arr1= [1,2,3,4,"5"];
let arr2= [1,2, 20 ,30];


for(let i=0; i<arr1.length; i++){
    let count=0;
    for(let j =0 ; j<arr2.length; j++){
      if(arr1[i]==arr2[j])
      count++;
    }
    if(count==0)
        arr2.push(arr1[i]);
}
console.log(arr2.indexOf("5"));
