// Element references:
const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size-popup");

// Create Grid of boxs
function createCanvas( size ) {

    for( let i = 0; i < size; ++i ) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for( let j = 0; j < size; ++j ) {
            const column = document.createElement("div");
            column.setAttribute("class", "column");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

function clearCanvas() {
    container.textContent = "";
}

// Create trail
container.addEventListener("mouseover", (evt) => {
    const el = evt.target;
    if( el.className == "column" ) {
        el.classList.add("trail");
    }
});

sizeBtn.addEventListener("click", (evt) => {
    let input = parseInt(prompt("What size do you want your canvas? (Limit: 100):"));
    console.log(input);

    if(input === NaN || input > 100) {
        alert("Invalid Input");
        return;
    }
    clearCanvas();
    createCanvas(input);
});

createCanvas(16);



