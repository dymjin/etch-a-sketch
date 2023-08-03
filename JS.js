const gridContainer = document.querySelector('.grid-container');
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid-box');

    gridContainer.appendChild(div);
}