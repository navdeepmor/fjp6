// read content of unorganised folder and make  an array which has extension name of each file

let fs = require('fs');
let path = require("path");

let dirPath = "C:\\Users\\navde\\Downloads";
let arr = fs.readdirSync(dirPath);

for(let i=0;i<arr.length;i++){
    arr[i] = path.extname(arr[i]);
}
console.log(arr);
