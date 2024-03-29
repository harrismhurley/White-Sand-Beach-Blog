//start of the ToggleDark
//imput values
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
        allElementsWithBorder.foAEach(element => {
            element.style.borderColor = 'white';
        });
    } else{
        //Reverts back to default light mode
        body.style.background = 'black';
        body.style.color = 'white';
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
const form = document.querySelector('form');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Convert FormData to object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Store the form data in local storage
    localStorage.setItem('submittedData', JSON.stringify(formDataObject));

    // Redirect user to submitted.html
    window.location.href = 'blog.html';
});
