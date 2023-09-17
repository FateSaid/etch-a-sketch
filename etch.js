const container = document.createElement('container');
container.classList.add('container');
document.body.appendChild(container);

const userBtn = document.createElement('button');
userBtn.classList.add('userBtn');
userBtn.textContent = 'Enter Number';
document.body.insertBefore(userBtn, container);

userBtn.addEventListener('click', ()=>{
    let number = prompt('Enter a Number: ');
    createGrid(number);

});

 //

function createGrid(number){
    
    container.innerHTML = '';
    

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
    
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Reset';
clearBtn.classList.add('resetBtn');
document.body.appendChild(clearBtn);

clearBtn.addEventListener('click', () => {
    const clear = document.querySelectorAll('.cell');
    clear.forEach(clear =>{
        clear.style.backgroundColor = 'white';
    });
});

const blueBtn = document.createElement('button');
blueBtn.classList.add('blueBtn');
blueBtn.textContent = 'blue';
document.body.appendChild(blueBtn);


