const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard"; 

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log('error: ', error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenLink = document.querySelectorAll(".table.batsman .batsman-cell.text-truncate.out a");
        const hostname = "https://www.espncricinfo.com"; 
        batsmenLink.forEach(element => {
            let batsmenDetailsLink = hostname + element.href;
            //console.log(batsmenDetailsLink);
            request(batsmenDetailsLink, cd2)
        });
    }
}

function cd2(error, response, html){
    if(error){
        console.log("error: ", error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenDetails = document.querySelectorAll(".player_overview-grid h5"); 
        console.log("Batsmen Name: ", batsmenDetails[0].textContent, "    Born : ", batsmenDetails[1].textContent);
        console.log("---------------------------------------------");
    }
}