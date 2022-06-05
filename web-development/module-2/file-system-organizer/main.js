#!/usr/bin/env node                                                                                 // 1. #!/usr/bin/env node  [ cmd line or OS would get to know in which ent it need to run this script ]  2. $ npm init -y  [ to link this with npm. With this package.json files would be created ]  3. "bin": { "orgz": "main.js" } [ add it in package.json file ]  4. npm link [ npm link ]
let inputArr = process.argv.slice(2);                                                               // to fetch the dir path entered by user     
let fs = require("fs");
let path = require("path");
                                                /* 
                                                        node main.js tree "directoryPath"
                                                        node main.js organize "directoryPath"
                                                        node main.js help 
                                                                                                    */
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
    let destPath;
    if(dirPath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist) {
            treeHelper(dirPath, "");
        } else {
            console.log("Please enter a valid path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile();                                                            // to check if the dirPath is file or folder
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i])
            treeHelper(childPath, indent + "\t");
        }
    }
}

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
    // console.log(childNames);
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
    `);                                                                                                     // In JS, strings are single lined, we can't make multiple line string but with temperate literal - ` ` we can get the string in multiple line & in the same way as we write inside ` `.  
}