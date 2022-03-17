/* Input */
//let input = process.argv[2];  // takes input given after cmd --> node fileOrganizer.js myInput
//console.log(input);  // o/p: ['pathToNode','pathToFile','input_passed_in_terminal']
// or console.log(input[2])

let fs = require("fs");
let path = require("path");
let ipFolderPath = process.argv[2];

let extensions = {
    Audio: [".mp3"],
    Video: [".mp4",".mkv"],
    Document: [".doc","xlsx",".pdf",".txt"],
    Image: [".jpeg",".jpg",".png",".gif"],
    Software: [".exe"]
}

if(fs.existsSync(ipFolderPath)){
    let files = fs.readdirSync(ipFolderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let folderName = giveFolderName(ext);
        //console.log(files[i]+" | Folder -- "+giveFolderName(ext));
        let createFolderPath = path.join(ipFolderPath, folderName);
        if(!fs.existsSync(createFolderPath))
            fs.mkdirSync(createFolderPath);
        
        moveFile(ipFolderPath, createFolderPath, files[i]);
    }
}else{
    console.log("Please enter a vail path!");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }
    return 'Others'
}

function moveFile(ipFolderPath, createFolderPath, fileName){
    let sourceFilePath = path.join(ipFolderPath, fileName);
    let destFilePath = path.join(createFolderPath, fileName)
    //console.log(sourceFilePath+"  |  "+destFilePath);
    fs.copyFileSync(sourceFilePath, destFilePath);
    fs.unlinkSync(sourceFilePath);
}

// project add on --> if folder are also there in i/p folder path