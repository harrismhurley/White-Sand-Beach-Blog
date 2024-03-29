//start of the ToggleDark

//imput values
const toggle = document.getElementById('ToggleDark');
const body = document.querySelector('body');

//adds Dark mode on img Click
toggle.addEventListener('click', function () {
    if(this.classList.toggle('DarkMode')){
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        // Change border colors to black
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'white';
        
        });
    } else{
        //Reverts back to default light mode
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        //change border colors to white
        const allElementsWithBorder = document.querySelectorAll('*');
        allElementsWithBorder.forEach(element => {
            element.style.borderColor = 'black';
        });
    }
});
//end of the ToggleDark

//Start of the Form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        storedPosts.push(formDataObject);

        localStorage.setItem('blogPosts', JSON.stringify(storedPosts));

        window.location.href = 'blog.html'; // Redirect to blog page
    });
});
