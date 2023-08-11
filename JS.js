const gridContainer = document.querySelector('.grid-container');
const btnsContainer = document.querySelector('.buttons-container');
const colorPicker = document.getElementById('color-picker');
const inputNum = document.getElementById('input-num');

const rainbowBtn = document.createElement('button');
rainbowBtn.textContent = 'Toggle Rainbow Brush';
rainbowBtn.setAttribute('class', 'new-grid');
btnsContainer.appendChild(rainbowBtn);

const clearCanvas = document.createElement('button');
clearCanvas.textContent = 'Clear canvas';
clearCanvas.setAttribute('class', 'new-grid');
btnsContainer.appendChild(clearCanvas);

let bgColor = 'black';
let draw = false;
let brush = 'default';
let r = 0;
let g = 0;
let b = 0;

let newGrid = (size) => {
    let i = 0;
    const boxSize = (gridContainer.clientHeight * 10 / (size * 10));
    while (i < (Math.pow(size, 2))) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-box');
        div.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`);
        div.style.opacity = 1;
        gridContainer.appendChild(div);
        i++;
    }
}
newGrid(10);
const divList = document.querySelectorAll('.grid-box');

divList.forEach(div => div.addEventListener('click', () => {
    if (draw === true) {
        draw = false;
    } else {
        draw = true;
    }
}));

divList.forEach(div => div.addEventListener('mouseover', () => {
    if (draw === true && brush === 'default') {
        div.style.backgroundColor = bgColor;
    } else if (draw === true && brush === 'rainbow') {
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}));

colorPicker.addEventListener('input', () => {
    bgColor = `${colorPicker.value}`;
    brush = 'default';
});

rainbowBtn.addEventListener('click', () => {
    brush = 'rainbow';
});

clearCanvas.addEventListener('click', () => {
    draw = false;
    brush = 'default';
    divList.forEach(div => {
        div.style.backgroundColor = 'white';
        div.style.opacity = 1;
    });
});
