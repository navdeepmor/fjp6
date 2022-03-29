/* npm(node package manager) - is like a playstore */

/* npm i request */
/* npm i jsdom */

const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

/* callback - Can we pass fun as argument to in other fun?YES */

const link = "https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles";

request(link, cb);

function cb(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } else {
        //console.log('body:', body); // Print the HTML for the Google homepage.
        //const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        const dom = new JSDOM(html);
        //console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
        const document = dom.window.document;
        let teamsName = document.querySelectorAll("p.name"); // querySelectorAll gives array
        console.log(teamsName[0].textContent);
        console.log(teamsName[1].textContent);
    }
}

// browser pr inspect ke baad queryrun krne ke liye control+f press kre
