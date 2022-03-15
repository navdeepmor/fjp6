//move a file
let fs = require("fs");
let path = require("path");

let dest_dir = path.join(path.resolve(__dirname, '..'), "move_folder");

if(!fs.existsSync(dest_dir))
    fs.mkdirSync(dest_dir)

let source_path = path.join("C:\\Users\\navde\\OneDrive\\Desktop\\FJP6\\module2\\html", "index.html");
let dest_path = path.join(dest_dir, "index.html");


fs.copyFileSync(source_path, dest_path);
fs.unlinkSync(source_path);
