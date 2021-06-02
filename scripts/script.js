let gridColumns = 10;

function initialiseGridElements(doResetOnly=false) {
    const gridElements = document.querySelectorAll('.grid div');
    if (doResetOnly) {
        gridElements.forEach((element)=>{
            element.classList.remove('chosen');
        });
    } else {
        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', (e) => {
                e.target.classList.add('chosen');
            })
            //,{once:true} for once executing listener
        });
    }
}

function initialiseGrid() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridColumns}, auto)`;
    for (let i=1; i<=gridColumns*gridColumns; i++) {
        grid.innerHTML += '<div></div>';
    }
    initialiseGridElements();
}

function initialise() {
    initialiseGrid()
    const reset = document.querySelector('button#reset');
    reset.addEventListener('click', () => {setTimeout(()=>{initialiseGridElements(true)}, 0)});
}

initialise();