let start = document.querySelector('.gameStart');
let reset = document.querySelector('.reset');
let board = document.querySelector('.board');
let squares = document.querySelector('.squares');
let result = document.querySelector('.resultText');

board.style.display = 'none';
reset.style.display = 'none';

start.addEventListener('click', () => {
    board.style.display = 'grid';
    reset.style.display = 'block';
})

reset.addEventListener('click', () => {
    board.style.display = 'none';
    reset.style.display = 'none';
})


