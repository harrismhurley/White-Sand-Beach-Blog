const toggle = document.getElementById('ToggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    if(this.classList.toggle('DarkMode')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        // Change border colors to white
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'black';
        });
    } else{

        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        // Change border colors to black
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'white';
        });
    }
});
