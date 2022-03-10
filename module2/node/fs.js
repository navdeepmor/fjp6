let fs = require("fs");
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt") // create a file 

fs.writeFileSync(filePath, "This file if overridden"); // it create's a file if not exist else it would Override 

// read
let r = fs.readFileSync(filePath, 'utf-8');
console.log(r);
// update
fs.appendFileSync(filePath, " This is new content added");

//console.log(fs.readFileSync(filePath, 'utf-8'));

// delete
fs.unlinkSync(filePath);