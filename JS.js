const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
const btnsContainer = document.querySelector('.buttons-container');
let draw = false;
let r = 0;
let g = 0;
let b = 0;
const newGridBtn = document.createElement('button');
newGridBtn.textContent = 'New Grid';
newGridBtn.setAttribute('class', 'new-grid');
btnsContainer.appendChild(newGridBtn);

const rainbowGridBtn = document.createElement('button');
rainbowGridBtn.textContent = 'New Rainbow Grid';
rainbowGridBtn.setAttribute('class', 'new-grid');
btnsContainer.appendChild(rainbowGridBtn);

const clearCanvas = document.createElement('button');
clearCanvas.textContent = 'Clear canvas';
clearCanvas.setAttribute('class', 'new-grid');
btnsContainer.appendChild(clearCanvas);

let newGrid = (size, color) => {
    let i = 0;
    const boxSize = (gridContainer.clientHeight * 10 / (size * 10));
    console.log(boxSize);

    while (i < (Math.pow(size, 2))) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-box');
        div.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`);
        gridContainer.appendChild(div);
        div.addEventListener('click', () => {
            if (draw === true) {
                draw = false;
            } else {
                draw = true;
            }
        });
        div.addEventListener('mouseover', () => {
            if (draw === true && color !== 'rainbow') {
                div.style.backgroundColor = `${color}`;
            } else if (draw === true && color === 'rainbow') {
                r = Math.random() * 255;
                g = Math.random() * 255;
                b = Math.random() * 255;
                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
        i++;
    }
}

newGridBtn.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let gridSize = Number(window.prompt('Enter a number', ''));
    if (gridSize === 0) {
        gridSize = 10;
    }
    newGrid(gridSize, 'white');
});

rainbowGridBtn.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let gridSize = Number(window.prompt('Enter a number', ''));
    if (gridSize === 0) {
        gridSize = 10;
    }
    newGrid(gridSize, 'rainbow');
});

clearCanvas.addEventListener('click', () => {
    draw = false;
    const divList = document.querySelectorAll('.grid-box');
    divList.forEach(div => div.style.backgroundColor = 'black');
});

newGrid(10, 'white');