const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom; 

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb);
let leaderBoard = [];

function cb(error, response, html){
    if(error){
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll('a[data-hover="Scorecard"]'); //attribute
        for(let i = 0; i < allScorecardTags.length; i++){
            let completeLink = "https://www.espncricinfo.com" + allScorecardTags[i].href;
            //console.log(completeLink);
            request(completeLink, cb2);
        }
    }
}

function cb2(error, response, html){
    if(error){
        console.error("error: ", error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll(".table.batsman tbody tr");
        for(let i = 0; i < batsmenRow.length; i++){
            let cells = batsmenRow[i].querySelectorAll("td");
            if(cells.length==8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixs = cells[6].textContent;
                //console.log("Name: ", name, " |  Runs: ", runs, "  |  Balls: ", balls, "  |  Fours: ", fours, "  |  Sixs: ", sixs);
            }
        }
    }
}

processPlayer('Virat', '50', '20', '4', '3');
processPlayer('Virat', '2', '2', '0', '0');
console.log(leaderBoard);

function processPlayer(name, runs, balls, fours, sixs){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixs = Number(sixs)
    for(let i = 0; i < leaderBoard.length; i++){
        let playerObj = leaderBoard[i];
        if(playerObj.Name==name){
            // will do some work here
            playerObj.Runs += runs;
            playerObj.Balls += balls;
            playerObj.fours += fours;
            playerObj.Sixs += sixs;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name: name,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixs: sixs
    }
    leaderBoard.push(obj);
}