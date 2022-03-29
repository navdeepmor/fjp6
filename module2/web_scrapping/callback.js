const fs = require("fs");


console.log("Before");

let content = fs.readFileSync("file.txt"); /* file.txt is been readed till then further line wouldn't run */
console.log(content+"");

console.log("After");


/* -------------------------------------------- */
console.log("--------------------------------------------");


console.log("Before");

fs.readFile("file.txt", cb); /* mean while file.txt is been read, it executes further lines & once remaining lines are executed then it calls the function cb - to remember say it call-after */

function cb(error, data){
    console.log(data+"");
}

console.log("After");