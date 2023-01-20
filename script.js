const container = document.querySelector('.board-container');
const btnBlack = document.createElement('button');
const btnEraser = document.createElement('button');
const btnRgb = document.createElement('button');
const btnRezise = document.createElement('button');
const btnsContainer = document.querySelector('.color-buttons');
let columns = 0;
let rows = 0;

const board = function(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('grid');
    }
}

board(16, 16);

// const resizeButton = function() {
//     const btn = container.querySelector('.resize-button');
//     btnRezise.textContent = 'Resize';
//     btnRezise.addEventListener('click', () => {
//         rows = alert('Insert number of ROW!');
//         columns = alert('Insert number of COLUMN!');
//         // validate the input is number
//         if (!typeof rows === 'number' && !typeof columns === 'number') {
//             return alert('Insert number please!');
//         } else {
//             return true;
//         }
//         // set the limit
//         if (columns > 100 && < 1 && rows > 100 && < 1 ) {
//             return false;
//         } else {
//             return true;
//         }
//     })

// }

// resizeButton()

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