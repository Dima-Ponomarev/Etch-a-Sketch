

//----------------FUNCTIONS----------------//

const createGrid = (parentElement, size, hoverFunction) => {
    const parentWidth = parentElement.clientWidth;
    const elementWidth = parentWidth / size;
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            const newDiv = document.createElement('div');
            newDiv.className = `grid-element line-${i}`;
            newDiv.style.cssText = 
                `display: inline-block;
                border: 1px solid #ddd;
                width: ${elementWidth}px;
                height: ${elementWidth}px;
                background-color: white;`;
            
            newDiv.addEventListener("mouseover", (e) => hoverFunction(e));
            parentElement.appendChild(newDiv);
        }
    }
}


const hoverHandlerBlack = e =>{
    e.target.style.backgroundColor = "black";
}

const hoverHandlerRainbow = e =>{
    e.target.style.backgroundColor = rainbowPalette[rainbowCounter % rainbowPalette.length];
    rainbowCounter++;   
}

const hoverHandlerShadow = e =>{
    const rgb = window.getComputedStyle(e.target).backgroundColor.match(/\d+/g);
    const newRgb =  parseInt(rgb[0], 10) - 25; 
    e.target.style.backgroundColor = `rgb(${newRgb}, ${newRgb}, ${newRgb})`; 
}

const resetClickHandler = () =>{
    const newGridSize = prompt("Enter new grid size (max: 100)", 16);
    if(newGridSize > 100){
        alert("Max grid size exceeded! New size set to 100")
        gridSize = 100;
    } else {
        gridSize = newGridSize;
    }
    gridWrapper.innerHTML = "";
    createGrid(gridWrapper, gridSize, currentHoverEvent);
}

const defaultClickHandler = () =>{
    headerText.className = "default-header";
    currentHoverEvent = hoverHandlerBlack;
    gridWrapper.innerHTML = "";
    createGrid(gridWrapper, gridSize, currentHoverEvent);
}

const rainbowClickHandler = () =>{
    headerText.className = "rainbow-header";
    currentHoverEvent = hoverHandlerRainbow;
    gridWrapper.innerHTML = "";
    createGrid(gridWrapper, gridSize, currentHoverEvent);
}

const shadowClickHandler = () =>{
    headerText.className = "shadow-header";
    currentHoverEvent = hoverHandlerShadow;
    gridWrapper.innerHTML = "";
    createGrid(gridWrapper, gridSize, currentHoverEvent);
}

//----------------EVENT LISTENERS----------------//

const gridWrapper = document.querySelector('.grid-wrapper');
const headerText = document.querySelector('h1');
const resetBtn = document.querySelector('.reset-btn');
const defaultHoverButton = document.querySelector('.default-option');
const rainbowHoverButton = document.querySelector('.rainbow-option');
const shadowHoverButton = document.querySelector('.shadow-option');
let currentHoverEvent = hoverHandlerBlack;
let gridSize = 16;
let rainbowCounter = 0;

const rainbowPalette = [
    '#ff0000', 
    '#ffa500',
    '#ffff00',
    '#008000',
    '#0000ff',
    '#4b0082',
    '#ee82ee'
]


resetBtn.addEventListener('click', resetClickHandler);
defaultHoverButton.addEventListener('click', defaultClickHandler);
rainbowHoverButton.addEventListener('click', rainbowClickHandler);
shadowHoverButton.addEventListener('click', shadowClickHandler);


createGrid(gridWrapper, gridSize, currentHoverEvent);