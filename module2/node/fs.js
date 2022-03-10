let fs = require("fs");
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt") // create a file 

fs.writeFileSync(filePath, "Hello I am a text file"); // it create's a file if not exist else it would Override 
