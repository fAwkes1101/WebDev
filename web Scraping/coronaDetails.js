const cheerio = require('cheerio');
const request = require('request');

request("https://www.worldometers.info/coronavirus/", cb);

function cb (error, response, html){
     if(error){
         console.log(error);
     }
     else{
         handleHtml(html);
     }
}

function handleHtml(html){
    let selTool = cheerio.load(html);
    let contentArr = selTool('#maincounter-wrap span');
    console.log("Total cases: ",selTool(contentArr[0]).text());
    console.log("Total deaths: ",selTool(contentArr[1]).text());
    console.log("Total recovered: ",selTool(contentArr[2]).text());
}


