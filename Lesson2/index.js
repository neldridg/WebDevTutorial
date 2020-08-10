// wait for the DOM to signal that it's done loading
document.addEventListener('DOMContentLoaded', function() { 
    // find the toggle button
    let toggleButton = document.getElementById('nav-toggle');

    // add an event listener for 'click' events
    toggleButton.addEventListener('click', function() {

        // get all the nav items
        let listItems = document.getElementsByClassName('nav-list-item');

        // For each class item, toggle the hidden class
        for(let item of listItems) {
            item.classList.toggle('hidden');
        }
    });

    // We want to grab data from the API and load it into the page.
    // fetch() returns a Promise, so we must say .then() to resolve that
    // Promise.
    fetch('http://localhost:8080')
        .then(response => response.json())
        // We have to handle the body response of the last message as .then()
        // always returns a promise. So we say that whatever is returned from 
        // the previous .then(), JSON.stringify it, and put it in the body
        .then(json => setBodyContent(JSON.stringify(json)));
    
});

// This is just moving some code to make the other parts more readable.
// In JavaScript, some code blocks can be made much more readible if you
// seperate out your logic in a clear and concise way.
function setBodyContent(data) {
    let content = document.getElementById('content');
    content.innerText = data;
}