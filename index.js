// Create Grid of boxs
const container = document.querySelector("#container");
for( let i = 0; i < 16; ++i ) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    
    for( let j = 0; j < 16; ++j ) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        row.appendChild(column);
    }
    container.appendChild(row);
}





