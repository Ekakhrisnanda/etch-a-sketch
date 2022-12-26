const container = document.querySelector('.board-container')

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