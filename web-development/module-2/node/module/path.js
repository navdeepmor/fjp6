"C:\Users\navde\OneDrive\Desktop\FJP6\module2\node\path.js"

let path = require("path");                                                                                     // path is object
// console.log(path);
let extensionName = path.extname("C:\Users\navde\OneDrive\Desktop\FJP6\module1\index.html");
// console.log(extensionName);
let baseName = path.basename("C:\Users\navde\OneDrive\Desktop\FJP6\module2\node\childProcess.js");              // it will take \n as next line to avid it we should \\
// console.log(baseName);                                                                                       // wrong o/p
let baseName2 = path.basename(__filename);                                                                      // gives the base name for the current file 
// console.log(baseName2);
// console.log(__dirname);
// console.log(__filename);

let newFilePath = path.join(__dirname, "inner-dir", "test.js");                                                  // appends test.js to dirPath of current file
// console.log(newFilePath);

