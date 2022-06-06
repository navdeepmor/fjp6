let addSheetBtn = document.querySelector(".add");
let sheetList = document.querySelector(".sheets-list");
let sheetId = 0;

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
})