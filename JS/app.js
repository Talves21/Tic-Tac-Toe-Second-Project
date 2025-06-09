let start = document.querySelector('.gameStart');
let reset = document.querySelector('.reset');
let board = document.querySelector('.board');
let squares = document.querySelectorAll('.squares');
let text = document.querySelector('.text');
let players = ['X', 'O'];
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let spots = ['' ,'' , '', '', '', '', '', '', ''];

board.style.display = 'none';
reset.style.display = 'none';

start.addEventListener('click', () => {
    board.style.display = 'grid';
    reset.style.display = 'block';
    start.style.display = 'none';
    players = 'X';
    text.innerText = "X's Turn";
    let winner = false


    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
            if (players === 'X') {
                let x = document.createElement('p');
                x.classList.add('x');
                squares[i].appendChild(x);
                x.textContent = 'x';
                players = 'O';
                squares[i].style.backgroundColor = 'gray';
                text.innerText = `${players}'s Turn`;
            } else {
                let o = document.createElement('p');
                o.classList.add('o');
                squares[i].appendChild(o);
                o.textContent = 'o';
                players = 'X';
                squares[i].style.backgroundColor = 'gray';
                text.innerText = `${players}'s Turn`;
            }
        })
    }

    for(let i = 0; i < win.length; i++) {
        let winConditon = win[i];
        let square1 = spots[winConditon[0]]
        let square2 = spots[winConditon[1]]
        let square3 = spots[winConditon[2]]

        if(square1 == square2 && square2 == square3) {
            let winner = true
            break;
        }
    }

    if(winner == true) {
        text.textContent = `${players} wins!`;
    }
})
    


reset.addEventListener('click', () => {
    window.location.reload();
})


