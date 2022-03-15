//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let source_path = path.join("C:\\Users\\navde\\OneDrive\\Desktop\\FJP6\\module1", "index.html");
let dest_dir = path.join("C:\\Users\\navde\\OneDrive\\Desktop\\FJP6\\module2", "html");

if(!fs.existsSync(dest_dir))
    fs.mkdirSync(dest_dir);

let dest_path = path.join(dest_dir, "index.html");

// console.log(dest_path);
// fs.readdirSync(file_dest);

fs.copyFileSync(source_path, dest_path);