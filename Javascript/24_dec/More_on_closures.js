//Inner function makes closure on variable of outer function which can be distroyed as outer function gets poped from stack

function powerCreator(obj){
    if(typeof obj.exp != 'number'){
        console.log("exp must be a number");
        return null;
    } 

    let fun = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }

    return fun;
}

let o1 = {
    exp: 2
}

let squarer = powerCreator(o1); // we can pass o1 to make changes in exp later
let val = squarer(8);
console.log(val);

o1.exp = 3;// object me changes jo powerCreator me pass hua hai will be in closure, which whenever used by squarer will persist

let val2 = squarer(7);
console.log(val2);


// change powerCreator
// to make it a producer of such functions
// whose exponent we can change on a later date
