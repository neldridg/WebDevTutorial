document.addEventListener('DOMContentLoaded', function() { 
    let toggleButton = document.getElementById('nav-toggle');
    toggleButton.addEventListener('click', function() {
        let listItems = document.getElementsByClassName('nav-list-item');
        console.log(listItems);
        for(let item of listItems) {
            item.classList.toggle('hidden');
        }
    });
  });