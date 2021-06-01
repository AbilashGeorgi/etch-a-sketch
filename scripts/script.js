function initialise() {
    const gridElements = document.querySelectorAll('.grid div');
    gridElements.forEach((element)=> {
        element.addEventListener('mouseenter',(e) => {
            e.target.classList.add('chosen');
        }, {once:true})
    });
}

initialise();