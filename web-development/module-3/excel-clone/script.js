let cellsContainer = document.querySelector(".cells-container");

function initCells(){
    let topRow = "<div class='top-row'>";
    topRow += "<div class='top-left-cell'></div>";

    for(let i = 0; i < 26; i++){
        topRow += `<div class='top-right-cell'>${ String.fromCharCode(65 + i) }</div>`;
    }
    topRow += "</div>";

    topRow += "<div class='lower-row'>";
    topRow += "<div class='left-col'>";
    for(let i = 1; i <= 100; i++){
        topRow += `<div class="cell">${ i }</div>`;
    }
    topRow += "</div>";

    topRow += "<div class='right-col'>";
    for(let i = 1; i <= 26; i++){
        topRow += `<div class="cells-row">`;
        console.log(i)
        for(let i = 1; i <= 100; i++){
            topRow += `<div class="cell">cell</div>`;
        }
        topRow += `</div>`;
    }
    topRow += "</div>";
    topRow += "</div>";
    
    cellsContainer.innerHTML = topRow;
}

initCells();