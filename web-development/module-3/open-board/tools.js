let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencilFlag = false;
let eraserFlag = false;


optionsCont.addEventListener("click", (e) => {
    // true -> tools show, false -> hide tools
    optionsFlag = !optionsFlag;
    if(optionsFlag) openTools();
    else closeTools();
});

function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display = "flex";
}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    eraserToolCont.style.display = "none";
    pencilToolCont.style.display = "none";
    toolsCont.style.display = "none";
}

pencilToolCont.addEventListener("click", (e) => {
    // true -> show pencil tool, false -> hide pencil tool
    pencilFlag = !pencilFlag;
    if(pencilFlag) pencilToolCont.style.display = "block";
    else pencilToolCont.style.display = "none";
})

eraserToolCont.addEventListener("Click", (e) => {
    eraserFlag = !eraserFlag;
    if(eraserFlag) eraserToolCont.style.display = "flex";
    else eraserToolCont.style.display = "none";
})