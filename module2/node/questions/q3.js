//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let source_path = path.join(__dirname, "..", "..", "..", "module1", "index.html"); // we are using .. to move back one folder 
let dest_dir = path.join(__dirname, "..", "..", "html");

if(!fs.existsSync(dest_dir))
    fs.mkdirSync(dest_dir);

let dest_path = path.join(dest_dir, "index.html");

// console.log(source_path);
// console.log(dest_dir);
// fs.readdirSync(file_dest);

fs.copyFileSync(source_path, dest_path);