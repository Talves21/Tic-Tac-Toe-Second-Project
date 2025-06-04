let start = document.querySelector('.gameStart');
let reset = document.querySelector('.reset');
let board = document.querySelector('.board');
let squares = document.querySelectorAll('.squares');
let text = document.querySelector('.text');
let players = ['x', 'o'];
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let spots = [0 ,1 , 2];
console.log(win[0] == spots);
console.log(spots);

board.style.display = 'none';
reset.style.display = 'none';

start.addEventListener('click', () => {
    board.style.display = 'grid';
    reset.style.display = 'block';
    start.style.display = 'none';
    players = 'x';

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
            if (players == 'x') {
                let x = document.createElement('p');
                x.classList.add('x');
                squares[i].appendChild(x);
                x.innerText = 'x';
                players = 'o';
                squares[i].style.backgroundColor = 'gray';
            
                for(let i = 0; i < win.length; i++) {
                    for(let j = 0; j < spots.length; j++) {
                        // console.log(spots[j])
                        // console.log(win[i][j])
                        // console.log(spots[j] == win[i][j]);
                        
                    }
                    // How to incorporate the player variable into for loop
                }
            } else {
                let o = document.createElement('p');
                o.classList.add('o');
                squares[i].appendChild(o);
                o.innerText = 'o';
                players = 'x';
                squares[i].style.backgroundColor = 'gray';
            }
        })
    }

     if (players == 'x') {
        text.innerText = "X's Turn"
    } else {
        text.innerText = "O's Turn"
    }
})
    


reset.addEventListener('click', () => {
    window.location.reload();
})


