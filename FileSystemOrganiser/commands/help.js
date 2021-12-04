function helpFn(){
    console.log(`List of all the commands:
                 1. Tree command- node FO.js tree <dirName>
                 2. Organise command- node FO.js organise <dirName>
                 3. Help command- node FO.js help`)
    console.log("Help command Implemented");

}

module.exports = {
   helpKey : helpFn, 
}

