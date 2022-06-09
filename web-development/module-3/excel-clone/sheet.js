let addSheetBtn = document.querySelector(".add-sheet");
let sheetList = document.querySelector(".sheets-list");
let sheetId = 0;
let firstSheet = document.querySelector(".sheet");
sheetListener(firstSheet);

addSheetBtn.addEventListener("click", function(e) {
    sheetId++;
    let activeSheet = document.querySelector(".active-sheet");
    activeSheet.classList.remove("active-sheet");
    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetId", sheetId);
    sheetDiv.innerText = `sheet ${ sheetId + 1 }`;
    sheetList.append(sheetDiv);
    sheetListener(sheetDiv);
    initUi();
})

function sheetListener(sheet) {
    sheet.addEventListener("click", function(){
        if(sheet.classList.contains("active-sheet")) {
            return;
        }
        let activeSheet = document.querySelector(".active-sheet");
        activeSheet.classList.remove("active-sheet");
        sheet.classList.add("active-sheet");
        initDb();
    })
}

function initUi() {

}

function setUi() {
    
}