
//Dark Mode toggle Start
const toggle = document.getElementById('DarkToggle');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const backButton = document.getElementById('BackButton');

backButton.style.backgroundColor = 'black';
backButton.style.color = 'white';

//adds Dark mode on img Click
toggle.addEventListener('click', function () {
    if(this.classList.toggle('DarkToggle')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        // Change border colors to black
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'black';
        });
        // Change navbar border color to black
        navbar.style.borderBottomColor = 'black';
        // Change back button background and text color
        backButton.style.backgroundColor = 'black';
        backButton.style.color = 'white';
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
        // Change navbar border color to white
        navbar.style.borderBottomColor = 'white';
        // Revert back button background and text color to default
        backButton.style.backgroundColor = 'white';
        backButton.style.color = 'black';
    }
});
//Dark Mode toggle end
