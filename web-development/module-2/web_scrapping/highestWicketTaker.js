const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    } else {
        //console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamBowlersTable = document.querySelectorAll(".table.bowler");
        let maxWicketBowlerName = "";
        let maxWicket = -1;
        for(let n = 0 ; n < teamBowlersTable.length ; n++){
            let bowlersTable = teamBowlersTable[n].querySelectorAll("tbody tr");
            for(let r = 0 ; r < bowlersTable.length ; r++){
                let tdCount = bowlersTable[r].querySelectorAll("td");
                if(tdCount.length>1){
                    let name = tdCount[0].textContent;
                    let wicket = tdCount[4].textContent;
                    //console.log(name, " | wicket: ", wicket);
                    if(parseInt(wicket) > maxWicket){
                        maxWicketBowlerName = name;
                        maxWicket = wicket;
                    }
                }
            }
        }
        console.log("Highest Wicket taker :  ", maxWicketBowlerName);
        console.log("No of wicket taken   :  ", maxWicket);
    }
}