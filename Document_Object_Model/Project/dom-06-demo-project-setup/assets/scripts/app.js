// First goal is to show the modal
const addMovieModalElement = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

// Step-2 Toggle the id backdrop
const backdropElement = document.getElementById('backdrop');

// Select the cancel button
const cancelAddMovieButton = addMovieModalElement.querySelector('.btn--passive');

// Create a function that will toggle the backdrop
function toggleBackdrop() {
    backdropElement.classList.toggle('visible');
}

function toggleMovieModal() {
    // Check the class if it's visible or not (the other class will remain it will just add the new class)
    addMovieModalElement.classList.toggle('visible');
    // Call the function (backdrop)
    toggleBackdrop();
}

function backdropClickHandler() {
    // Close the modal and Close the backdrop
    toggleMovieModal();
}

// Next one is opening the modal
startAddMovieButton.addEventListener('click', toggleMovieModal);

// Close the modal when cancel is clicked
cancelAddMovieButton.addEventListener('click', backdropClickHandler);

//  Close the modal when backdrop is clicked
backdropElement.addEventListener('click', backdropClickHandler);