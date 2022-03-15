// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let arr = ["audio", "video", 'image', "software", "documents", "applications", "other"]

let nameArr = ["abc", "xyz", "efg", "def"];
let extArr = ['.mp3', '.mp4', '.png', '.exe', '.pdf', '.apk', '.rar'];    

let fs = require("fs");
let path = require("path");

let dirPath = path.join(__dirname, "organise");
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

for(let i=0;i<arr.length;i++){
    let folderPath = path.join(dirPath, arr[i]);
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    for(let j=0;j<nameArr.length;j++){
        let fileName = nameArr[j]+extArr[i];
        let filePath = path.join(folderPath, fileName);
        fs.writeFileSync(filePath, "");
    }
}