"C:\Users\navde\OneDrive\Desktop\FJP6\module2\node\path.js"

let path = require("path"); // path is object
console.log(path);

let extensionName = path.extname("C:\Users\navde\OneDrive\Desktop\FJP6\module1\index.html");
console.log(extensionName);

let baseName = path.basename("C:\Users\navde\OneDrive\Desktop\FJP6\module2\node\childProcess.js");
console.log(baseName);

console.log(__dirname);
console.log(__filename);