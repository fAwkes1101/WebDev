
//1.
// (function(){
//     let uname = prompt("What's your name?"); // prompt returns a string, and shows a message passed in it and a space to fill in
//     alert("Hello " + uname);
// })();
// // IIFE = immediately invoked function execution

//2.
(function (){
    let timeUnits = parseInt(prompt("Count value?"));
    let interval = parseInt(prompt("Log after what interval?"));


    // setInterval(function, interval); function is called after interval time(in millisecs), it returns an id
    let iid = setInterval(handleCalls, interval * 1000); //**********imp**********//
    // returns an id used to stop calling via clearInterval(id);

    let orgTU = timeUnits; 

    function handleCalls(){
        console.log(timeUnits + "  left");
        timeUnits -= interval;

        if(timeUnits <= 0){
            clearInterval(iid);
            alert(orgTU + " has been counted.");
        }
    }
})();



// IIFE = immediately invoked function execution