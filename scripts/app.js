const gridWrapper = document.querySelector('.grid-wrapper');
let gridSize = 16;

const createGrid = (parentElement, size, hoverFunction) => {
    const parentWidth = parentElement.clientWidth;
    const elementWidth = parentWidth / size;
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            const newDiv = document.createElement('div');
            newDiv.className = `grid-element line-${i}`;
            newDiv.style.cssText = 
                `display: inline-block;
                margin-bottom: -2px;
                border: 1px solid #ddd;
                width: ${elementWidth}px;
                height: ${elementWidth}px;`;
            
            newDiv.addEventListener("mouseover", (e) => hoverFunction(e));
            parentElement.appendChild(newDiv);
        }
    }
}

const hoverBlack = e =>{
    e.target.style.background = "black";
}


createGrid(gridWrapper, gridSize, hoverBlack);