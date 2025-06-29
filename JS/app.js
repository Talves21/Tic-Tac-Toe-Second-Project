let start = document.querySelector('.gameStart');
let reset = document.querySelector('.reset');
let board = document.querySelector('.board');
let squares = document.querySelectorAll('.squares');
let text = document.querySelector('.text');
let currentPlayer = document.querySelectorAll('.currentPlayer');
let players = 'X';
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let spots = ['' ,'' , '', '', '', '', '', '', ''];
let winner = false;
let endGame = false;

board.style.display = 'none';
reset.style.display = 'none';

start.addEventListener('click', () => {
    board.style.display = 'grid';
    reset.style.display = 'inline-block';
    start.style.display = 'none';
    text.innerText = "X's Turn";

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
            if (players === 'X') {
                squares[i].innerText = 'X';
                squares[i].style.backgroundColor = 'gray';
                for(let j = 0; j < spots.length; j++) {
                    if (i == j) {
                        spots[j] = players;
                    }
                }
                players = 'O';
                text.innerText = `${players}'s Turn`;
                checkWinner()
            } else {
                squares[i].innerText = 'O';
                squares[i].style.backgroundColor = 'gray';
                for(let j = 0; j < spots.length; j++) {
                    if (i == j) {
                        spots[j] = players;
                    }
                }
                players = 'X';
                text.innerText = `${players}'s Turn`;
                checkWinner()
            }
        })
    }
})

function oWins () {
    if (winner === true && players != 'O') {
        players = 'O';
    }
}

function xWins () {
    if (winner === true && players != 'X') {
        players = 'X'
    }
}
    
function checkWinner () {
    for(let i = 0; i < win.length; i++) {
        // win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        // spots = ['' ,'' , '', '', '', '', '', '', ''];
        let winConditon = win[i];
        let square1 = spots[winConditon[0]]
        let square2 = spots[winConditon[1]]
        let square3 = spots[winConditon[2]]

        if (square1 == "" || square2 == "" || square3 == "") {
            continue
        }

        if(square1 === square2 && square2 === square3) {
            winner = true;
           if (players != 'O') {
            oWins()
           } else {
            xWins()
           }
            break;
        }
    }

     if (winner === true) {
        text.innerText = `${players} wins!`;
    } else if (!spots.includes('')) {
        text.innerText = `It's a Draw`;
    }
    
}

reset.addEventListener('click', () => {
    window.location.reload();
})


