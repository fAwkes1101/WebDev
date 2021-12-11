const cheerio = require('cheerio');
const request = require('request');

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary", cb);
console.log("before");
function cb (error, response, html){
     if(error){
         console.log(error);
     }
     else{
         handleHtml(html);
     }
}

function handleHtml(html){
    let $ = cheerio.load(html);
    let contentArr = $('.d-flex.match-comment-padder.align-items-center .match-comment-long-text');
    console.log("Last Comentary:", $( contentArr[0]).text());
}
console.log("after");

