const fs = require("fs");
const path= require("path");
function organiseFn(dirpath){
    let destpath;

    if(dirpath==undefined){
        console.log("Please enter directory path");

    }
    else{
    let doesExits = fs.existsSync(dirpath);
    //console.log(doesExits);

    if(doesExits){
        destpath= path.join(dirpath, "organised_file");
        //console.log(destpath);
        if(fs.existsSync(destpath)==false){ //We will only create directory if it does not Exits
            fs.mkdirSync(destpath);
        }
        else{
            console.log("File already Exists");
        }
        //console.log("Organise command Implemented");

    }else {
        console.log("Please Enter a valid path");
    }
}

organiseHelper(dirpath, destpath);
    
}
function organiseHelper(src, dest){

       let childNames = fs.readdirSync(src);
       console.log(childNames);

       for(let i=0; i<childNames.length; i++){

        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        
        if(isFile == true){ 
            let fileCategory = getCategory(childNames[i]);
            console.log(childNames[i] + " belongs to "+ fileCategory );
            sendFiles(childAddress, dest, fileCategory );
        }
       }
}
function getCategory(names){
        let ext = path.extname(names);
        console.log(ext);
        ext = ext.slice(1); //this will remove . from ext
        //console.log(ext);

    for(let type in types){
        let cTypeArr = types[type];
        //console.log(cTypeArr);

        for(let i=0; i<cTypeArr.length; i++){
             if(ext==cTypeArr[i]){
                 return type;
             }
        }
    }

}
function sendFiles(srcFilePath, dest, fileCategory){
    let catPath = path.join(dest, fileCategory);

    if(fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catPath,fileName );
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);


}
module.exports = {
    organiseKey : organiseFn, 
 }

