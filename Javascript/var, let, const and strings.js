////Variable declartion with let var and const

var a; //Variable is initialized with undefined if not initialised during declaration
console.log(a); //To print on console
a = 20; // Initialization after declaration
console.log(a)

a = 'Hello'// Dynamic Behaviour of JavaScript
a = null  //  We can update values with differnt 
a = true //   data types after single declation of variable using "var" keyword
console.log(a); 
//JavaScript is a Synchronus Language and a single threaded language


//// "let" keyword for declaration of variables

// First Problem with "var" - Redecalration (declaration with same varibale name again)
// "var" keyword allows us to redeclare a variable
var b = 2 // dec 1
console.log(b)
var b = 'I am a string' // dec 2
console.log(b)


// "let" keyword does not allows us to redeclare a variable
let b = 2
console.log(b)
let b = 'I am a string'; // This line will show error
console.log(b)

////"const" keyword 
const module = require("fs");
//The value of module will be remain same (constant) in entire program 
//It cannot be updated


//// Loops and if else

let flag = true
var num = 13

for(let i = 2 ; i*i<=num ; i++){   //"let i" -> We have to declare i 
       if(num%i==0){
              flag = false;
              break;
       }
}

if(flag)
{
       console.log(num ,'is Prime');
}
else{
       console.log('The number is not Prime');
}


////2nd Problem with "var"-> SCOPING -> function scoping and block scoping

//// "var" is function scoped
if(10%2==0){
    var c = 2
    console.log(c)   
}
console.log(c) //--> This will print 2 on console


////Let is blocked scope
if(10%2==0){
       let c = 2
       console.log(c)   
   }
   
   console.log(c); //--> error (not defined)



//// Redeclartion is not allowed in let
let a = 2
let a = 3 // not allowed redcalring


////Reassigning is Allowed
let a = 2
a = 3 // -->allowed re assinging


////--xx--Environment , variables(let , var and const), loops , if else , problems with var --xx--////


//// Strings and string methods -->

let str = 'pepcoders'; //single or double quotes can be used
console.log(str);

////String Methods->

1.// .length
console.log(str.length); // This will print lentgth of the string on console

2.// Extracting a part of string -> slice() 
slice(start , end); //Returns sliced array from starting index to (end-1)
let slicedStr = str.slice(3 ,7) // last index is excluded -> (returns string/array from index 3 to 6)
console.log(slicedStr);

3.// Extracting a part of string -> substring() method
str.substring(start , length) // start is begning of returned string and length is length of that string from start
let subString = str.substring(3 , 4 ) // This returns a string from index 3 to index (3+4)
console.log(subString)


//// replace() method --> expects the word to be replaced as first argument 
//// and the replacement as second argument
//// THIS DOSENT METHOD DOSENT MAKE CHANGES TO ORIGINAL STRING -> we have to store the returned string and use that ****imp****

let sayHello = 'Hello Mukesh';
console.log(sayHello); // hello Mukesh

let sayBye = sayHello.replace('Hello' , 'bye')
console.log(sayBye) // Bye Mukesh
console.log(sayHello); // hello Mukesh ******imp*******


//// toUppercase()  and toLowerCase()

let text1 = 'Hello World'
let text2 = text1.toUpperCase()
console.log(text2)//HELLO WORLD
console.log(text1)//Hello World --> Changes will not be made in original string ******imp*****

let text1 = 'Hello World'
let text2 = text1.toLowerCase()
console.log(text2)//hello world
console.log(text1)//Hello World --> Changes will not be made in original string ******imp*****


//// concatenation method

let firstStr = 'Hello'
let secondStr = 'World'

let concatenatedStr = firstStr.concat(' ' ,secondStr)
console.log(concatenatedStr); //Hello World

//// Trim Method
//// Spaces between the words remains undisturbed
let text = '   Hello World      '
console.log(text)//    Hello World      --> with extra spaces
let trimmedText = text.trim()

console.log(trimmedText);//Hello World







