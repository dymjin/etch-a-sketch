let gridSize;
const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < 400; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-box');
    div.setAttribute('style', 'width: 20px; height: 20px');

    gridContainer.appendChild(div);
}