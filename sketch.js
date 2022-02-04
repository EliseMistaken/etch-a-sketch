

function generateBoard(squares=16){
    const container = document.querySelector('.container');
    for (let i = 0; i < squares; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let x = 0; x < squares; x++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${1000/squares}px`;
            row.appendChild(square);
            square.addEventListener('mouseenter', rgbColor);
        }
        container.appendChild(row);
    }
}

function colorSquare(e) {
    e.target.classList.add('fill');
}


function rgbColor(e){
    e.target.style.backgroundColor =  `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}

function resizeBoard(){
    let size = parseInt(prompt('How large would you like the '))
}

generateBoard();