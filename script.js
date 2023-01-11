const container = document.querySelector('.board-container');
const btnBlack = document.createElement('button');
const btnEraser = document.createElement('button');
const btnRgb = document.createElement('button');
const btnsContainer = document.querySelector('.color-buttons');

const board = function(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid blue';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('grid');
    }
}

board(16, 16);

const blackColor = function() {
    const grids = container.querySelectorAll('.grid');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        grids.forEach((grid) => grid.addEventListener('mouseover', () => {
            grid.style.background = 'black';
        }))

    })

    btnsContainer.appendChild(btnBlack).classList.add('btn');
}

blackColor();