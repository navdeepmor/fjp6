const jsdom = require("jsdom");
const { JSDOM } = jsdom; //using { JSDOM } we are selecting the mention key 

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"