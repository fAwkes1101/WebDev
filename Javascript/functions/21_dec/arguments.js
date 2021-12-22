//1. In javaScript actual argumnets are passed in an array, 
    //whose copy is stored in "arguments"  keyword
function printArgs(){
    console.log(arguments);  
}

printArgs("Hello", "Arguments"); // an array type value with all passed arguments will be printed

//2."undefined" will be printed in case corresponding actual argument is not passed
// although "arguments" keyword will have copy of all the passed arguments in case formal arguments are less in no than actual passed
function args(arg1, arg2, arg3){
  console.log(arg1, arg2, arg3);
}

args("hello");
args("hello", "arg2");
args("hello", "arg2", "and arg3");