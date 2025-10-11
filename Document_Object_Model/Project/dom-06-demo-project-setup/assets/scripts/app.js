// First goal is to show the modal
const addMovieModalElement = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

// Step-2 Toggle the id backdrop
const backdropElement = document.getElementById('backdrop');

// Select the cancel button
const cancelAddMovieButton = addMovieModalElement.querySelector('.btn--passive');

// Select the confirm button
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

// Get all the user inputs
const userInputs = addMovieModalElement.querySelectorAll('input');
// const userInputs = addMovieModalElement.getElementsByTagName('input');

// Go to the entry section
const entryTextElement = document.getElementById('entry-text');

// Store all the valid movies input
const movies = [];

// Create a function that will display the movies
function updateUi () {
    //  Check if there are any movies
    if (movies.length === 0) {
        entryTextElement.style.display = 'block';
    } else {
        entryTextElement.style.display = 'none';
    }

}

// Create a function that will display the movies elements
function renderNewMovieElement(title, imageUrl, rating) {
    // Create a new element
    const newMovieElement = document.createElement('li');
    // Add a class
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

    // Get the list element (ul)
    const listRoot = document.getElementById('movie-list');
    // Append the new element inside of this element (ul)
    listRoot.append(newMovieElement);
}

// Clear the inputs after confirming and closing the modal
function clearMovieInputs () {
    for (const input of userInputs) {
        input.value = '';
    }
}

// Create a function that will toggle the backdrop
function toggleBackdrop() {
    backdropElement.classList.toggle('visible');
}

function toggleMovieModal() {
    // Check the class if it's visible or not (the other class will remain it will just add the new class)
    addMovieModalElement.classList.toggle('visible');
    // Call the function (backdrop)
    toggleBackdrop();
    // Clear the inputs
    clearMovieInputs();
}

function backdropClickHandler() {
    // Close the modal and Close the backdrop
    toggleMovieModal();
}

function addMovieHandler() {
    // Retrieve all the user inputs
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    // Remove excess whitespaces trim()
    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        // Check the numbers if it's too small and too big
        parseInt(ratingValue) < 1 ||
        parseInt(ratingValue) > 5) {

        alert("Please enter valid values (rating between 1 and 5)");
        return;
    }

    // Create a new movie object
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    // Add the new movie to the movies array
    movies.push(newMovie);
    console.log(movies);
    // Close the modal and clear the inputs
    toggleMovieModal();
    clearMovieInputs();
    //  Render the new movie to the UI
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
    // Update the UI
    updateUi();
}

// Next one is opening the modal
startAddMovieButton.addEventListener('click', toggleMovieModal);

// Close the modal when cancel is clicked
cancelAddMovieButton.addEventListener('click', backdropClickHandler);

//  Close the modal when backdrop is clicked
backdropElement.addEventListener('click', backdropClickHandler);

confirmAddMovieButton.addEventListener('click', addMovieHandler);