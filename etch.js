const container = document.createElement('container');
container.classList.add('container');
document.body.appendChild(container);

const userInput = document.createElement('button');
userInput.classList.add('userInput');
userInput.textContent = 'Enter Number';
document.body.insertBefore(userInput, container);

userInput.addEventListener('click', ()=>{
    createGrid();
});

 //

function createGrid(){
    container.innerHTML = '';
    let number = prompt('Enter a Number: ');
    for(let i = 0; i < number; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < number; j++){
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



