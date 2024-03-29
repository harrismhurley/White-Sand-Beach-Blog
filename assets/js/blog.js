
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

//retrieve stored data and produce a BlogPost
document.addEventListener('DOMContentLoaded', function() {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const contentDiv = document.getElementById('content');

    // Reverse the order of stored posts
    storedPosts.reverse();

    storedPosts.forEach(post => {
        const blogPostContainer = document.createElement('container');
        blogPostContainer.classList.add('BlogPost');

        const titleElement = document.createElement('h4');
        titleElement.classList.add('BlogTitle');
        titleElement.textContent = post.Title;

        const contentElement = document.createElement('p');
        contentElement.classList.add('BlogText');
        contentElement.textContent = post.Content;

        const footerElement = document.createElement('p');
        footerElement.classList.add('BlogFooter');
        footerElement.textContent = `Posted by: ${post.Username}`;

        blogPostContainer.appendChild(titleElement);
        blogPostContainer.appendChild(contentElement);
        blogPostContainer.appendChild(footerElement);

        contentDiv.appendChild(blogPostContainer);
    });
});


