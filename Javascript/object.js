//// Object

//object in javascript is "key value pair" 

//Declaration

let obj = {} // All key values in curly braces also no ";" at end of braces as it in req in object of c++ 


let captain = {
       firstName : 'Steve', //"," is used before next key-value pair, no need to use it in case of last key-value pair
       lastName  : 'Rogers',
       friends   : ['Bucky' , 'Tony Stark' , 'Dr Banner'], //Array of strings as member
       isAvenger : true, 
       age       : 150,
       address   : {   //Object as a member
                   state : 'New York', 
                   city : "Manhatten"
                    },

       sayHi     : function fn(){ // Member function
                   console.log('Cap says Hi')
                     },
  
}
console.log(captain) ; //OUTPUT on console given below /*
/*{
  firstName: 'Steve',
  lastName: 'Rogers',
  friends: [ 'Bucky', 'Tony Stark', 'Dr Banner' ],
  isAvenger: true,
  age: 150,
  address: { state: 'New York', city: 'Manhatten' },
  sayHi: [Function: fn]
} *//


////Dot notation

console.log(captain.friends) // OUTPUT ON CONSOLE: [ 'Bucky', 'Tony Stark', 'Dr Banner' ]

////Bracket Notation (object_name['key_name'])
console.log(captain['age'])            // 'age' is passed here it will be matched will all keys of
//OUTOUT: 150                          //  object " captain ", if found will return corresponding value.


//// captain.sayHi() // cap says hi


////UPDATE Object
captain.isAvenger = 'False' // this will update value of key "isAvenger" in object "captain"
console.log(captain) //False


////Create something inside an object
captain.movies = ['first Avenger' , "Age of Ultron" , 'Endgame']
console.log(captain) // This will create a key movies with value as ['first Avenger' , "Age of Ultron" , 'Endgame']

////Delete a property
delete captain.age 
console.log(captain) // age key and its value deleted


////Special loop (For in loop)
for(let key in captain){
       console.log("Key->" , key , 'Value->' , captain[key])
} 

