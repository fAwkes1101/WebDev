// Functions as Objects and Function callbacks.
let fs = require("fs");

function primeSieve (primeHandler, nonPrimeHandler) {
    let oarr = this;
    primeHandler.calledForTheFirstTime = true; //function as object 
    nonPrimeHandler.calledForTheFirstTime = true; // function as object

    for (let i = 0; i < oarr.length; i++) {
        let num = oarr[i];

        let isPrime = true;
        for (let div = 2; div * div <= num; div++) {
            if (num % div == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            primeHandler(num);
        } else {
            nonPrimeHandler(num);
        }
    }
}
Array.prototype.sieve = primeSieve; //now all arrays in this file will have a pre defined function sieve

let arr = [11, 18, 34, 37, 49, 53, 71, 84, 97];
arr.sieve(logAllPrimes, logAllNonPrimes);

function logAllPrimes(num){

    if (logAllPrimes.calledForTheFirstTime == true){ // this will run only 1 time to create file
        if (fs.existsSync("primes.txt")) {
            fs.rmSync("primes.txt");
        }
    logAllPrimes.calledForTheFirstTime = false;
    }
    fs.appendFileSync("primes.txt", num + "->", "utf-8");
}

function logAllNonPrimes(num) {
    if (logAllNonPrimes.calledForTheFirstTime == true){ // this will run only 1 time to create file
        if (fs.existsSync("non-primes.txt")) {
            fs.rmSync("non-primes.txt");// if file already exists remove it, and this will happen only once
        }
    logAllNonPrimes.calledForTheFirstTime = false;
    }
    fs.appendFileSync("non-primes.txt", num + "->", "utf-8"); // this will create a file with name the name and append num as string
                                                              // "utf-8" is used to define it is a text file, if not passed code will still work
}

//OUTPUT:- 2 files created with primes in ->"primes.txt"  and non_primes in -> "non-primes.txt", from the given array