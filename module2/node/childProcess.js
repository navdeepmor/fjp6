let cp = require('child_process'); // tells that we would us child process module
console.log(cp);

/* open calculator with the help of this file */
// for linux replace calc with gnome-calculator 
// for mac repllace gnome-calculator with open -a Calculator
//cp.execFileSync("calc"); 
//cp.execSync("code"); // to open VS_Code 

let content = cp.execSync("node xyz.js"); // to execute the meniton file from other file.  
console.log("Output of xyz.js "+ content);

console.log(content); // o/p would be given in binary form by defalut, then to convert it to String add empty String with it
console.log(""+content); 