const container = document.createElement('div');
let row;
document.body.appendChild(container);

const btn = document.createElement('button');
btn.textContent = 'Reset';
btn.classList.add('reset');
document.body.append(btn);


function rows(){
    for(let i = 0; i < 16; i++){
        row = document.createElement('row');
        row.classList.add('rower');
        container.appendChild(row);
        row.addEventListener('mouseenter', handleMouseEnter);
    }

}

function grid(){
    for(let i = 0; i < 16; i++){
        rows();
        row.addEventListener('mouseenter', handleMouseEnter);
    }
}

function handleMouseEnter(event){
event.target.style.backgroundColor = 'blue';
}

grid();




    



