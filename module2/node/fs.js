let fs = require("fs");
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt") // create a file path by joining dir. path of current dir with given file name

// C-create
fs.writeFileSync(filePath, "This file if overridden"); // it create's a file if not exist else it would Override 

// R-read
let r = fs.readFileSync(filePath, 'utf-8');
console.log(r);

// U-update
fs.appendFileSync(filePath, " This is new content added"); // appdends new content in the mentioned file.

//console.log(fs.readFileSync(filePath, 'utf-8'));

// D-delete
fs.unlinkSync(filePath);