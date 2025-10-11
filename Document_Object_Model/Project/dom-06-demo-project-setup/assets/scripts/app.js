// First goal is to show the modal
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

// Next one is opening the modal
startAddMovieButton.addEventListener('click', () => {
    // Check the class if it's visible or not (the other class will remain it will just add the new class)
    addMovieModal.classList.toggle('visible');
    // Call the function (backdrop)
    toggleBackdrop();
});

// Toggle the id backdrop
const backdrop = document.getElementById('backdrop');

// Create a function that will toggle the backdrop
function toggleBackdrop() {
    backdrop.classList.toggle('visible');
}
