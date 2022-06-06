#!/usr/bin/env node                                                                                 // 1. #!/usr/bin/env node  [ cmd line or OS would get to know in which ent it need to run this script ]  2. $ npm init -y  [ to link this with npm. With this package.json files would be created ]  3. "bin": { "peppy": "main.js" } [ add it in package.json file ]  4. npm link [ npm link ]                                                                    
let inputArr = process.argv.slice(2);                                                               // to fetch the dir path entered by user   
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize")
                                                /* 
                                                        node main.js tree "directoryPath"
                                                        node main.js organize "directoryPath"
                                                        node main.js help 
                                                                                                    */


let command = inputArr[0];
switch(command) {
    case "tree": 
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize": 
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":;
        helpObj.helpKey();
        break;
    default: 
        console.log("Please enter validate command ");
}