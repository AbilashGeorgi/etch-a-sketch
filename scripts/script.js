//number of elements in one edge.
let gridColumns = 10;
//chosen class gives the elements colour;
const gridElementListener = (e) => {e.target.classList.add('chosen')};

//clears the grid and adds new divs with the listener and all.
function initialiseGrid() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridColumns}, auto)`;
    for (let i=1; i<=gridColumns*gridColumns; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseenter', gridElementListener);
        //,{once:true} for once executing listener
        grid.appendChild(div);
    }
}

//clear the chosen class from all elements.
function clearGridElements() {
    const gridElements = document.querySelectorAll('.grid div');
    gridElements.forEach((element)=>{
        element.classList.remove('chosen');
    });
}

function initialise() {
    initialiseGrid()
    const reset = document.querySelector('button#reset');
    reset.addEventListener('click', () => {clearGridElements()});
}

initialise();