const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
let draw = false;
let boxes = [];
const newGridBtn = document.createElement('button');
newGridBtn.textContent = 'New Grid';
newGridBtn.setAttribute('class', 'new-grid');
body.insertBefore(newGridBtn, gridContainer);

let newGrid = (size) => {
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
            if (draw === true) {
                div.style.backgroundColor = 'black';
            }
        });
        i++;
    }
}

newGridBtn.addEventListener('click', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    const gridSize = Number(window.prompt('Enter a number', ''));
    newGrid(gridSize);
});

newGrid(10);