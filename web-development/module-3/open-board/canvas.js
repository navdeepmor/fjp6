let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");
let download = document.querySelector(".download");
let redo = document.querySelector(".redo");
let undo = document.querySelector(".undo");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let undoRedoTracker = [];                               // Data
let track = 0;                                          // Represent which action from tracker array

let mouseDown = false;

// API
let tool = canvas.getContext("2d");
tool.strokeStyle = penColor;
tool.lineWidth = penWidth; 

// mousedown -> start new path, mousemove -> path fill (graphic)
canvas.addEventListener("mousedown", (e) => {
    mouseDown = true;
    beginPath({ 
        x: e.clientX, 
        y: e.clientY 
    });
})
canvas.addEventListener("mousemove", (e) => {
    if(mouseDown) drawStrock({ 
        x: e.clientX, 
        y: e.clientY,
        color: eraserFlag ? eraserColor : penColor,
        width: eraserFlag ? eraserWidth : penWidth 
    });
})
canvas.addEventListener("mouseup", (e) => {
    mouseDown = false;

    let url = canvas.toDataURL();
    undoRedoTracker.push(url);
    track = undoRedoTracker.length - 1;
})

undo.addEventListener("click", (e) => {
    
})

redo.addEventListener("click", (e) => {

})

function beginPath(strokeObj) {
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}

function drawStrock(strokeObj) {
    tool.strokeStyele = strokeObj.color;
    tool.lineWidth = strokeObj.width;
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}

pencilColor.forEach((colorElem) => {
    colorElem.addEventListener("click", (e) => {
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = color;
    });
})

pencilWidthElem.addEventListener("change", (e) => {
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})
eraserWidthElem.addEventListener("change", (e) => {
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})
eraser.addEventListener("click", (e) => {
    if(eraserFlag) {
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    } else {
        tool.strokeStyle = penColor;
        tool.lineWidth = penWidth;
    };
});

download.addEventListener("click", (e) => {
    let url = canvas.toDataURL();

    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
})

// tool.beginPath();                                   // new graphic (path) (line)
// tool.moveTo(10, 10);                                // start point
// tool.lineTo(100, 150);                              // end point
// tool.stroke();                                      // fill color (fill graphic)

// tool.lineTo(200, 200);
// tool.stroke();  