const title = document.createElement('h1');
title.textContent = 'Etch a Sketch';
document.body.appendChild(title);


const container = document.createElement('container');
container.classList.add('container');
document.body.appendChild(container);
container.style.backgroundColor = 'lightgray';

const userBtn = document.createElement('button');
userBtn.classList.add('userBtn');
userBtn.textContent = 'Enter Number';
document.body.insertBefore(userBtn, container);

userBtn.addEventListener('click', ()=>{
    let size = prompt('Enter a Number: ');
    createGrid(size);

});

 //

function createGrid(size){
    
    container.innerHTML = '';
    

    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter',(event)=>{
                event.target.style.backgroundColor = currentColor;
            } )
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}







const containerBtn = document.createElement('button');
containerBtn.classList.add('containerBtn');
document.body.appendChild(containerBtn);
    
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Reset';
clearBtn.classList.add('resetBtn');
containerBtn.appendChild(clearBtn);

clearBtn.addEventListener('click', () => {
    const clear = document.querySelectorAll('.cell');
    clear.forEach(clear =>{
        clear.style.backgroundColor = 'lightgray';
    });
});

const blueBtn = document.createElement('button');
blueBtn.classList.add('blueBtn');
blueBtn.textContent = 'blue';
containerBtn.appendChild(blueBtn);

const redBtn = document.createElement('button');
redBtn.classList.add('redBtn');
redBtn.textContent = 'red';
containerBtn.appendChild(redBtn);

redBtn.addEventListener('click', ()=>{
    currentColor = 'red';
});

blueBtn.addEventListener('click', ()=>{
    currentColor = 'blue';
});


