Array.prototype.sum = function(){
    let sum=0;
    for(let i=0 ;i<this.length;i++){  // Jo . lga ke call krta hai wo "this" ban jata hai, this is predefined keyword
        sum = sum + this[i];
    }
    return sum;
}
Array.prototype.myMap = function(traverse){ // Implementing "map" explicitly
    let res = [];
        for(let i=0; i<this.length;i++){
        let val = traverse(this[i]);
        res.push(val);
    }
    return res;
}
function twiced(val){
    return 2*val;
}


let arr =[1,2,3];
let sum =arr.sum();
let twice = arr.myMap(twiced);
console.log(sum);
console.log(twice);
