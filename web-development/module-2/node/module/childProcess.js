let cp = require('child_process');                                                                              // tells that we would us child process module
// console.log(cp);
                                                    /* open calculator with the help of this file */
cp.execFileSync("calc");                                                                                        // for linux replace calc with gnome-calculator // for mac repllace gnome-calculator with open -a Calculator
cp.execSync("code");                                                                                            // to open VS_Code 
                                                    /* ---------------- open url ---------------- */
cp.execSync("start Brave https:\\www.pepcoding.com");
                                                    /* ------------- execute js file ------------- */           
let output = cp.execSync("node xyz.js");                                                                        // to execute the meniton file from other file. With this we can also execute js, python & other language files.  
// console.log("Output of xyz.js -> "+ output);




                                                    /* ------------------ Ref ------------------ */                     
// console.log(output);                                                                                         // o/p would be given in binary formate  by defalut, then to convert it to String add empty String with it
// console.log(""+output); 