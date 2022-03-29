//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File
let fs = require("fs");
let path = require("path");

let ext = {
    mp3: "Audio File",
    mp4: "Vidoe File",
    jpeg: "Image File",
    jpg: "Image File",
    png: "Image File",
    pdf: "PDF File",
    txt: "Text File",
    docx: "Document File",
    exe: "Software File",
    apk: "Application File",
    zip: "Compressed File"
}

let dir_path = "C:\\Users\\navde\\Downloads";
let arr = fs.readdirSync(dir_path);

for(let i=0;i<arr.length;i++){
    let fileExt = (path.extname(arr[i])).split(".")[1];
    console.log(ext[fileExt]);
}