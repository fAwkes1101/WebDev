var inquirer = require('inquirer');
const childProcess= require("child_process");

function details(){

inquirer
  .prompt([
     {
         type : 'list',
         name : 'Selection',
         choices: ['About', 'Skills', 'Projects', 'Academics']

     } 

     
  ])
  .then((choices) => {

  if(choices.Selection=='About'){
    console.log(`I am Abhishek`);
    Goback();
  }
  else if(choices.Selection=='Skills')
{
  console.log('C, C++'); 
  Goback();
}    
else if(choices.Selection== 'Projects'){
  childProcess.execSync('start chrome https://github.com/fAwkes1101')
  Goback();
}
else
  {
    console.log("FULL 100%");
  }



  })
}

details();

function Goback(){

  details();
  
}