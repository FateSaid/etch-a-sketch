const container = document.createElement('container');
document.body.appendChild(container);

function createGrid(){
    container.innerHTML = '';
    for(let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < 16; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter',handleMouse )
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function handleMouse(event){
    event.target.style.backgroundColor = 'blue';
}
    
const btn = document.createElement('button');
btn.textContent = 'Reset';
document.body.appendChild(btn);

btn.addEventListener('click', createGrid);

createGrid();


