const container = document.querySelector("#container");
const button = document.querySelector('.setGrid');

button.addEventListener('click', () => {
    const gridSize = +prompt('Enter Grid Size');
    
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `calc(${100}% / ${gridSize}`;
        square.style.width = `calc(${100}% / ${gridSize})`;
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black'
        })
        container.appendChild(square);
        
    }
}

})

