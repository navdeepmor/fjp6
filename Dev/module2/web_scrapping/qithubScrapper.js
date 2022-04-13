const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const link = "https://github.com/topics";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.error(error);
    } else {

    }
    const document = dom.window.document
}
