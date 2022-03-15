// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let arr = ["audio", "video", 'image', "software", "documents", "applications", "other"]

let file_extention = {
    audio: ".mp3",
    video: ".mp4",
    image: ".png",
    software: ".zip",
    document: ".txt",
    application: ".exe",
    other: ""
}

let fs = require("fs");
let path = require("path");

// let pathFolder = path.join(__dirname, "q2Folder", arr[i]);

for(let i=0;i<arr.length;i++){
    fs.mkdirSync(arr[i]);
    let filePath = path.join(__dirname, arr[i], file_extention.arr[i])
    for(let j=0;j<4;j++){
        fs.writeFileSync(filePath ,"this is the content inside new file");
    }
}