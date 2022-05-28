const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const xlsx = require("json-as-xlsx");

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderBoard = [];
let counter = 0;

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        // let allScorecardTags = document.querySelectorAll('a[data-hover="Scorecard"]'); //attribute
        let allScorecardTags = document.querySelectorAll('.ds-border-b.ds-border-line'); //attribute
        // console.log(allScorecardTags.length);
        for (let i = 0; i < 60; i++) {
            //let completeLink = "https://www.espncricinfo.com" + allScorecardTags[i].href;
            let anchorTagAll = allScorecardTags[i].querySelectorAll("a");
            let link = anchorTagAll[2].href;
            let completeLink = "https://www.espncricinfo.com" + link;
            //console.log(completeLink);
            request(completeLink, cb2);
            counter++;
        }
        // console.log("Line 22: ", leaderBoard);
    }
}

function cb2(error, response, html) {
    if (error) {
        console.error("error: ", error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        // let batsmenRow = document.querySelectorAll(".table.batsman tbody tr");
        let batsmenRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for (let i = 0; i < batsmenRow.length; i++) {
            let cells = batsmenRow[i].querySelectorAll("td");
            if (cells.length == 8) {
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixs = cells[6].textContent;
                //console.log("Name: ", name, " |  Runs: ", runs, "  |  Balls: ", balls, "  |  Fours: ", fours, "  |  Sixs: ", sixs);
                processPlayer(name, runs, balls, fours, sixs);
            }
        }
        counter--;
        if (counter == 0) {
            // console.log("Line 44: ", leaderBoard);
            let data = JSON.stringify(leaderBoard);
            fs.writeFileSync('BatsmenStats.json', data); // error: as it accepts string
            

            let dataExcel = [
                {
                    sheet: "IPL 2021",
                    columns: [
                        { label: "Name", value: "Name" }, // Top level data
                        { label: "Innings", value: "Innings" }, 
                        { label: "Runs", value: "Runs" },
                        { label: "Balls", value: "Balls" },
                        { label: "Fours", value: "Fours" },
                        { label: "Sixs", value: "Sixs" }
                    ],
                    content: leaderBoard 
                },
            ]

            let settings = {
                fileName: "BatsmenDetails", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
            }

            xlsx(dataExcel, settings) // Will download the excel file
        }
        // console.log("Line 44: ", leaderBoard);
    }
}

// processPlayer('Virat', '50', '20', '4', '3');
// processPlayer('Virat', '2', '2', '0', '0');

function processPlayer(name, runs, balls, fours, sixs) {
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixs = Number(sixs)
    for (let i = 0; i < leaderBoard.length; i++) {
        let playerObj = leaderBoard[i];
        if (playerObj.Name == name) {
            // will do some work here
            playerObj.Innings += 1;
            playerObj.Runs += runs;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixs += sixs;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name: name,
        Innings: 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixs: sixs
    }
    leaderBoard.push(obj);
}

// console.log("Line 79: ", leaderBoard);

// https://www.jsv9000.app/