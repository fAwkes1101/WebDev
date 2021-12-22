// Important interview question
//1.We have to print 0 1 2
function outer(){
    var arr =[];
    for(var i=0;i<3;i++){
       
        arr.push(function() {
            console.log(i);
        })
    }
    return arr;
}
var arr = outer();
arr[0]();//3 ->outer function when poped from stack value of i in 
arr[1]();//3   closure will be saved as 3 while calling inner function i will be therefore passed as 3.
arr[2]();//3

//2. In first case 3 3 3 is printed this can be improved like this
function outer(){
    var arr =[];
    for(var i=0;i<3;i++){
       function outerKaInner(){
            var j = i;         // j will be get memory every time outerKaInner is called and initially with value as undefined
            return function(){
                console.log(j);
            } 
       }
       arr.push(outerKaInner());

    } 
    return arr;
}
var arr = outer();
arr[0](); 
arr[1]();
arr[2]();



