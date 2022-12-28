const container = document.querySelector('.board-container');
const btnBlack = document.createElement('button');
const btnEraser = document.createElement('button');
const btnRgb = document.createElement('button');
const btnsContainer = document.querySelector('.color-buttons');

const board = function(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black'
        container.style.gridTemplateColumns = 'repeat(${cols}, 1fr)';
        container.style.gridTemplateRows = 'repeat(${rows}, 1fr)';
        container.appendChild(div).classList.add('grid');
    }
}

board(16, 16);

const blackColor = function() {
    const grids = container.querySelectorAll('.grid');
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        grids.forEach(grid => grid.addEventListener('mouseover', () => {
            let colorCode = Math.floor(Math.random() * 255) + 1;
            grid.style.background = 'rgb(${colorCode}, ${colorCode}, ${colorCode})';
        }))

    })

    btnsContainer.appendChild(btnBlack);
}

// const rgbColor =  function() {
//     const grids = container.querySelectorAll('.grid');
//     btnBlack.textContent = 'RGB';
//     btnBlack.addEventListener('click', () => {
//         grids.forEach(grid => grid.addEventListener('mouseover', () => {
//             grid.style.background =
//         }))

//     })

//     btnsContainer.appendChild(btnRgb);
// }

const eraser =  function() {
    const grids = container.querySelectorAll('.grid');
    btnBlack.textContent = 'Eraser';
    btnBlack.addEventListener('click', () => {
        grids.forEach(grid => grid.addEventListener('mouseover', () => {
            grid.style.background = 'white'
        }))

    })

    btnsContainer.appendChild(btnEraser);
}