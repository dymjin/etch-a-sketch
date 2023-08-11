const gridContainer = document.querySelector('.grid-container');
const btnsContainer = document.querySelector('.buttons-container');
const colorPicker = document.getElementById('color-picker');
const inputNum = document.getElementById('input-num');

const rainbowBtn = document.createElement('button');
rainbowBtn.textContent = 'Toggle Rainbow Brush';
rainbowBtn.setAttribute('class', 'new-grid');
btnsContainer.appendChild(rainbowBtn);

const darkenBtn = document.createElement('button');
darkenBtn.textContent = 'Toggle Darken Brush';
darkenBtn.setAttribute('class', 'new-grid');
btnsContainer.appendChild(darkenBtn);

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
        div.style.backgroundColor = 'white';
        gridContainer.appendChild(div);
        i++;
    }
}
newGrid(10);
let divList = document.querySelectorAll('.grid-box');

divList.forEach(div => div.addEventListener('click', () => {
    if (draw === true) {
        draw = false;
    } else {
        draw = true;
    }
}));

divList.forEach(div => div.addEventListener('mouseover', () => {
    divStyles = getComputedStyle(div);
    if (draw === true && brush === 'default') {
        div.style.backgroundColor = bgColor;
        div.style.opacity = 1;
    } else if (draw === true && brush === 'rainbow') {
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (draw === true && brush === 'darken') {
        div.style.opacity = (divStyles.opacity * 10 - 0.1 * 10) / 10;
    }
}));

colorPicker.addEventListener('input', () => {
    bgColor = `${colorPicker.value}`;
    brush = 'default';
});

inputNum.addEventListener('input', () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    newGrid(inputNum.value);
    let divList = document.querySelectorAll('.grid-box');
    divList.forEach(div => div.addEventListener('click', () => {
        if (draw === true) {
            draw = false;
        } else {
            draw = true;
        }
    }));

    divList.forEach(div => div.addEventListener('mouseover', () => {
        divStyles = getComputedStyle(div);
        if (draw === true && brush === 'default') {
            div.style.backgroundColor = bgColor;
            div.style.opacity = 1;
        } else if (draw === true && brush === 'rainbow') {
            r = Math.random() * 255;
            g = Math.random() * 255;
            b = Math.random() * 255;
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else if (draw === true && brush === 'darken') {
            div.style.opacity = (divStyles.opacity * 10 - 0.1 * 10) / 10;
        }
    }));
});

rainbowBtn.addEventListener('click', () => {
    draw = false;
    if (brush === "rainbow") {
        brush = "default";
    } else {
        brush = 'rainbow';
    }
});

darkenBtn.addEventListener('click', () => {
    draw = false;
    if (brush === "darken") {
        brush = "default";
    } else {
        brush = 'darken';
    }
});

clearCanvas.addEventListener('click', () => {
    draw = false;
    brush = 'default';
    divList = document.querySelectorAll('.grid-box');
    divList.forEach(div => {
        div.style.backgroundColor = 'white';
        div.style.opacity = 1;
    });
});
