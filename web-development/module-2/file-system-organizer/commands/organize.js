let fs = require("fs");
let path = require("path");
let typesObj = require("../utility");
let types = typesObj.typeskey;

function organizeFn(dirPath) {
                                                    /* ---- check directory path given ---- */
    let destPath;
    if(dirPath == undefined) {
        destPath = path.join(process.cwd(), "organized-files");
        if(!fs.existsSync(destPath)){
            fs.mkdirSync(destPath);                                                                         // create organized-files dir
        }
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            destPath = path.join(dirPath, "organized-files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);                                                                     // create organized-files dir
            }
        } else {
            console.log("Please enter a valid path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
                                                /* identify categories of all the files present in the i/p dir */
    let childNames = fs.readdirSync(src);
    console.log(childNames);
    for(let i = 0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile) {
            let category = getCategory(childNames[i]);
            console.log(childNames[i], "belong to -->", category);
                                                /* copy / cut files to organized-file in repective catogery dir */
            sendfile(childAddress, dest, category);
        }
    }
}  

function sendfile(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    console.log(fileName, "copied to", category);
    fs.unlinkSync(srcFilePath);
}

function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types) {
        let cTypeArr = types[type];
        for(let i = 0; i < cTypeArr.length; i++) {
            if(ext == cTypeArr[i]) {
                return type;
            }
        }
    }
    return "others";
}

module.exports = {
    organizeKey: organizeFn
}