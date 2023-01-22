const container = document.querySelector('.board-container');
const btnBlack = document.createElement('button');
const btnEraser = document.createElement('button');
const btnRgb = document.createElement('button');
const btnRezise = document.createElement('button');
const resizeContainer = document.querySelector('.resize-button');
const btnsContainer = document.querySelector('.color-buttons');

const board = function(col, row) {
    for (let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('grid');
    }
}

board(16, 16);

const reset = function() {
    const grids = container.querySelectorAll('.grid');
    grids.forEach(box => box.remove())
}

const resizeButton = function() {
    btnRezise.textContent = 'Resize';
    btnRezise.addEventListener('click', () => {
        let size = prompt('Input size of your grid? (Max = 100)')
        if (isNaN(size) || size < 1 || size > 100) {
            reset()
            board(16, 16);
            blackColor();
            eraser();
            rgbColor();
        } else {
            reset()
            board(size, size);
            blackColor();
            eraser();
            rgbColor();
        }
    })
    resizeContainer.appendChild(btnRezise).classList.add('btn');
}

resizeButton()

// color buttons
const blackColor = function() {
    const grids = container.querySelectorAll('.grid');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        grids.forEach(grid => grid.addEventListener('mouseover', () => {
            grid.style.background = 'black';
        }))

    })

    btnsContainer.appendChild(btnBlack).classList.add('btn');
}

blackColor();

const eraser = function() {
    const grids = container.querySelectorAll('.grid');
    btnEraser.textContent = 'Eraser';
    btnEraser.addEventListener('click', () => {
        grids.forEach(grid => grid.addEventListener('mouseover', () => {
            grid.style.background = 'white';
        }))

    })

    btnsContainer.appendChild(btnEraser).classList.add('btn');
}

eraser();

const rgbColor = function() {
    const grids = container.querySelectorAll('.grid');
    btnRgb.textContent = 'RGB';
    btnRgb.addEventListener('click', () => {
        grids.forEach((grid) => grid.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            grid.style.background = `rgb(${R},${G},${B})`;
        }))

    })

    btnsContainer.appendChild(btnRgb).classList.add('btn');
}

rgbColor();