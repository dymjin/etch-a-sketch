const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
const gridSize = Number(window.prompt('Enter a number', ''));
const boxSize = gridContainer.clientHeight / gridSize;
let draw = false;
let i = 0;
while (i < (Math.pow(gridSize, 2))) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-box');
    div.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`);
    gridContainer.appendChild(div);
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
    i++;
}
