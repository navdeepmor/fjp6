let cellsContentDiv = document.querySelector(".cells-content");

function initCells(){
    let cellsContent = "<div class='top-left-cell'></div>"
                                                /* ---------- top-row ---------- */
    cellsContent += "<div class='top-row'>";                                                                          
    for(let i = 0; i < 26; i++){
        cellsContent += `<div class='top-row-cell'>${ String.fromCharCode(65 + i) }</div>`;
    }
    cellsContent += "</div>";
                                                /* ---------- left-col --------- */                                                                    
    cellsContent += "<div class='left-col'>";
    for(let i = 0; i < 100; i++){
        cellsContent += `<div class="left-col-cell">${ i + 1 }</div>`;
    }
    cellsContent += "</div>";
                                                /* ------------ cells ------------ */    
    cellsContent += "<div class='cells'>";
    for(let i = 0; i < 100; i++){
        cellsContent += "<div class='row'>";                                                                    // each row 
        for(let j = 0; j < 26; j++){
            cellsContent += `<div class='cell' rowid='${ i }' colid='${ j }' contentEditable > </div>`;    // using rowid & colid later we would identify then when click event is trigger on it.
        }
        cellsContent += "</div>";
    }
    cellsContent += "</div>";
    
    cellsContentDiv.innerHTML = cellsContent;
}
initCells();

let db;                                                                                                         // to store the front end value & later use them
function initDb(){
    db = [];
    for(let i = 0; i < 100; i++){
        let row = [];
        for(let j = 0; j < 26; j++){
            let name = String.fromCharCode(65 + j) + (i + 1) + "";
            let cellObject = {
                name: name,
                value: "",
                formula: "",
                children: []
            }
            row.push(cellObject);
        }
        db.push(row);
    }
}
initDb();