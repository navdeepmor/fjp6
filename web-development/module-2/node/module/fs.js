let fs = require("fs");
//console.log(fs);

let path = require("path");
let filePath = path.join(__dirname, "file.txt");                                                                // create a file path by joining dir. path of current dir with given file name
                                                            /* ---------- C-create ---------- */ 
fs.openSync("abc.txt", 'w');                                                                                    // 'w' -> is to tell it to open it in write mode
fs.writeFileSync(filePath, "This file if overridden");                                                          // it create's a file if not exist else it would Override 
                                                            /* ----------- R-read ----------- */ 
let buffer = fs.readFileSync(filePath, 'utf-8');                                                                // without 'utf-8' it will give content in binary
//console.log("bin data ", buffer);
                                                            /* ----------- U-update ------------ */ 
fs.appendFileSync(filePath, " This is new content added");                                                      // appdends new content in the mentioned file.
// console.log(fs.readFileSync(filePath, 'utf-8'));
                                                            /* ----------- D-delete  ----------- */ 
fs.unlinkSync(filePath);


let folderPath = "C:\\Users\\navde\\OneDrive\\Desktop\\FJP6\\web-development\\module-2";
                                                            /* ----------- create dir ----------- */
if(!fs.existsSync("our-directory"))                                                                              // checking if dir exists 
    fs.mkdirSync("our-directory");                                                                               // gives error if dir already exits
                                                            /* ------------ read dir ------------ */
let contentOfFolder = fs.readdirSync(folderPath);
// console.log(contentOfFolder);
                                                           /* ------------- delete dir ------------- */
fs.rmdirSync("ourDirectory");                                                                                   // deletes only empty dir
fs.rmdirSync("ourDirectory", {recursive: true});                                                                // deletes only non-empty dir

let sourcePath = path.join(__dirname, "text.txt");                                                              // __dirname -> is global keyword 
let destinationPath = path.join(__dirname, "our-directory", "text.txt"); 
// console.log(sourcePath);
// console.log(destinationPath);
                                                            /* ------------ copy a file ------------ */
fs.copyFileSync(sourcePath, destinationPath);

                                                            /* ------------ check path ------------- */
let detailsObj = fs.lstatSync(folderPath);                                                                      // it tells is the path given path is of dir or file?
// console.log(detailsObj.isFile());
// console.log(detailsObj.isDirectory());

                                                            /* --------------- Ref --------------- */  

                                                        /* -------- create ten dir & a file in each -------- */
for(let i = 1; i <= 10; i++){
    let dirPath = `dir-${ i }`;
    fs.mkdirSync(dirPath);
    fs.writeFileSync(dirPath + "\\" +  "read-me.md", ` # I'm in dir dir-${ i } `);                              // inside ` `, # is used for heading  
}

                                                        /* --------- to delete a non-empty dir --------- */
// fs.writeFileSync(__dirname+"\\our-directory\\file-1", "You are looking content of file-1");                              

// let dirContent = fs.readdirSync("our-directory");  
// console.log(dirContent);                                                  
// for(let i = 0; i < dirContent.length; i++){
//     console.log(dirContent[i], "is delete", "in dir our-directory");
//     fs.unlinkSync(__dirname+"\\our-directory"+"\\"+dirContent[i]);                                           // to make it platform independent we can user path module here: fs.unlinkSync(path.join(__dirname, "our-directory", dirContent[i]));
// }
// fs.rmdirSync("our-directory");

