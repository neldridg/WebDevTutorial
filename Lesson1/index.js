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
  });