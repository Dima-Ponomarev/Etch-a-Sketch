const gridWrapper = document.querySelector('.grid-wrapper');


const createGrid = (parentElement, size) => {
    const parentWidth = parentElement.clientWidth;
    const elementWidth = parentWidth / size;
    for(i = 0; i < size; i++){
        for(j = 0; j < size; j++){
            const newDiv = document.createElement('div');
            newDiv.className = `grid-element line-${i}`;
            newDiv.style.cssText = 
                `display: inline-block;
                margin-bottom: -2px;
                border: 1px solid #aaa;
                width: ${elementWidth}px;
                height: ${elementWidth}px;`; 
            console.log(newDiv.clientWidth);
            parentElement.appendChild(newDiv);
        }
    }
}


createGrid(gridWrapper, 24);