// Importand question to understand function callbacks

Array.prototype.processStrings = function(sscb, lscb, criteria) {
    let oarr = this;

    for (let i = 0; i < oarr.length; i++) {
        let str = oarr[i];
        if (str.length > criteria) {
            lscb(str);
        } else {
            sscb(str);
        }
    }

    return this;
}

let arr = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "India won in Australia. England won't.",
    "India has gone to SA. India started well. But it rains.",
    "Lorem ipsum dolor. ipsum dolor lorem.",
];

arr.processStrings(handleShortString, handleLongString, 40);

function handleShortString(str) {
    let res1 = str.split("."); // split the string at each "." and assign them in an array of strings, that will not contain "." in it.

    let res2 = res1.filter(s => s.length > 0); //s is passed in function, where s is splited string on each
                                               //index, if s.length >0 true then, s will me included in res2 array
    let res3 = res2.map(s => s.trim()); // remove spaces from start and end of strings
    let res4 = res3.map(s => s.split(" "));// strings jo . se seperate hoke array ke indices oe the, ab wo as words ke array indices pe aa jaenge
    let res5 = res4.map(a => a.reverse()); 
    let res6 = res5.map(a => a.join(" ")); // changes word to strings with " "
    let res7 = res6.join(". ");// join strings, (sentences), array to string conv
    let res8 = res7 + ".";
    console.log("Short string = " + res8);
}

function handleLongString(str) {
    let res1 = str.split(".");
    let res2 = res1.filter(s => s.length > 0);
    let res3 = res2.map(s => s.trim());
    let res4 = res3.reverse();
    let res5 = res4.join(". ");
    let res6 = res5 + ".";
    console.log("Long string = " + res6);
}

// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50 in length) and the other for long strings

// short string callback should do the following
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should to the following
// I teach programming. I am a teacher. My name is Sumeet Malik.