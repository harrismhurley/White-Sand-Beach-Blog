
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

//Local Storage
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const blogContainer = document.getElementById('content');

    if (form && blogContainer) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            const blogPost = createBlogPost(formDataObject);
            blogContainer.appendChild(blogPost);

            // Store the form data in local storage
            localStorage.setItem('submittedData', JSON.stringify(formDataObject));

            // Redirect user to submitted.html
            window.location.href = 'submitted.html';
        });
    } else {
        console.error('Form or blog container not found.');
    }

    function createBlogPost(data) {
        const blogPost = document.createElement('div');
        blogPost.classList.add('BlogPost');

        const title = document.createElement('h4');
        title.textContent = data.Title;
        title.classList.add('BlogTitle');
        blogPost.appendChild(title);

        const content = document.createElement('p');
        content.textContent = data.Content;
        content.classList.add('BlogText');
        blogPost.appendChild(content);

        const footer = document.createElement('p');
        footer.textContent = `Posted by: ${data.Username}`;
        footer.classList.add('BlogFooter');
        blogPost.appendChild(footer);

        return blogPost;
    }
});

