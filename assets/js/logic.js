const toggle = document.getElementById('ToggleDark');
const body = document.querySelector('body');

//adds Dark mode on img Click
toggle.addEventListener('click', function () {
    if(this.classList.toggle('DarkMode')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        // Change border colors to black
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'black';
        });
    } else{
        //Reverts back to default light mode
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        //change border colors to white
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'white';
        });
    }
});
