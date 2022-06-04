let inputArr = process.argv.slice(2);                                                               // to fetch the dir path entered by user     
let fs = require("fs");
let path = require("path");

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'pkg', "deb"]
}

let command = inputArr[0];
switch(command) {
    case "tree": 
        treeFn(inputArr[1]);
        break;
    case "organize": 
        organizeFn(inputArr[1]);
        break;
    case "help":;
        helpFn();
        break;
    default: 
        console.log("Please enter validate command ");
}

function treeFn(dirPath) {
    console.log("Tree command is implemented for path -> ", dirPath);
}

function organizeFn(dirPath) {
    // console.log("Organize command is implemented for path -> ", dirPath);
    // 1. input directory path given
    let destPath;
    if(dirPath == undefined) {
        console.log("Please enter the directory path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            // 2. create organized-files dir
            destPath = path.join(dirPath, "organized-files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Please enter a valid path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
    // 3. identify categories of all the files present in the i/p dir
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for(let i = 0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile) {
            let category = getCategory(childNames[i]);
            console.log(childNames[i], "belong to -->", category);
            // 4. copy / cut files to organized-file in repective catogery dir
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
    // console.log(ext);
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

// help fn 
function helpFn() {
    console.log(`
    usage: node main.js [tree <path>]
                        [organize <path>] 
                        [help]
    `);                                                                                             // In JS, strings are single lined, we can't make multiple line string but with temperate literal - ` ` we can get the string in multiple line & in the same way as we write inside ` `.  
}