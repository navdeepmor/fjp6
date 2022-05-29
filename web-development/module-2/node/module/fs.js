let fs = require("fs");
//console.log(fs);

// let path = require("path");
// let filePath = path.join(__dirname, "file.txt")        ;                                                        // create a file path by joining dir. path of current dir with given file name
                                                        /* ---------- C-create ---------- */ 
fs.openSync("abc.txt", 'w');
// fs.writeFileSync(filePath, "This file if overridden");                                                          // it create's a file if not exist else it would Override 
//                                                         /* ----------- R-read ----------- */ 
// let buffer = fs.readFileSync(filePath, 'utf-8');
// // console.log("bin data ", buffer);
//                                                          /* ---------- U-update ----------- */ 
// fs.appendFileSync(filePath, " This is new content added");                                                      // appdends new content in the mentioned file.
// //console.log(fs.readFileSync(filePath, 'utf-8'));
//                                                         /* ----------- D-delete  ----------- */ 
// fs.unlinkSync(filePath);

/* ---------------------------------------------------------------- */

// //create dir
// if(!fs.existsSync("ourDirectory")) // checking if dir exists 
//     fs.mkdirSync("ourDirectory"); // gives error if dir already exits

// // read dir
// let folderPath = "C:\\Users\\navde\\OneDrive\\Desktop\\FJP6\\module2";

// let contentOfFolder = fs.readdirSync(folderPath);
// console.log(contentOfFolder);

// // delete dir
// fs.rmdirSync("ourDirectory"); // deletes only non-empty dir
// fs.rmdirSync("ourDirectory", {recursive: true}); // deletes only empty dir

// // copy a file
// let sourcePath = path.join(__dirname,"text.txt");
// let destinationPath = path.join(__dirname,"ourDirectory","text.txt"); 
// console.log(sourcePath);
// console.log(destinationPath);

// fs.copyFileSync(sourcePath,destinationPath);
