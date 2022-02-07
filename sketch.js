

function generateBoard(squares=16){
    const container = document.querySelector('.container');
    container.innerHTML = '';
    for (let i = 0; i < squares; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let x = 0; x < squares; x++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${window.innerHeight/(squares+1)}px`;
            square.style.backgroundColor = 'rgb(255,255,255)';
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

function darkenColor(e){
    const colorCSS = e.target.style.backgroundColor;
    const color = colorCSS.substring(4, colorCSS.length-1);
    console.log(color);
    const parsedColor = parseInt(color.split(',')[0]);
    console.log(parsedColor);
    e.target.style.backgroundColor = `rgb(${parsedColor - 10}, ${parsedColor - 10}, ${parsedColor - 10})`;
}

function resizeBoard(){
    let size = parseInt(prompt('How many squares would you like on each side? 0 < x < 100', '16'));
    if(size && size > 0 && size < 100);
    generateBoard(size);
    
}

function clearBoard() {
    const container = document.querySelector('.container');

}
generateBoard();