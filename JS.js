const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
let draw = false;
let boxes = [];
let r = 0;
let g = 0;
let b = 0;
const newGridBtn = document.createElement('button');
newGridBtn.textContent = 'New Grid';
newGridBtn.setAttribute('class', 'new-grid');
body.insertBefore(newGridBtn, gridContainer);

const rainbowGridBtn = document.createElement('button');
rainbowGridBtn.textContent = 'New Rainbow Grid';
rainbowGridBtn.setAttribute('class', 'new-grid');
body.insertBefore(rainbowGridBtn, gridContainer);

let newGrid = (size, color) => {
    let i = 0;
    const boxSize = gridContainer.clientHeight / size;
    while (i < (Math.pow(size, 2))) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-box');
        div.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`);
        gridContainer.appendChild(div);
        boxes.push(div);
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
    console.log(gridSize);
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

newGrid(10, 'white');