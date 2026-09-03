const container = document.querySelector("#container");

// create 16 by 16 grid of square divs
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black'
        })
        container.appendChild(square);
        
    }
}

