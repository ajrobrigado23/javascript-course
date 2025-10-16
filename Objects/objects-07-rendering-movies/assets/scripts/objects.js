const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

// Movie array
const movies = [];

// Function that render movies - output all movies in our page
const renderMovies = () => {
    // Get movie list element (ul)
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    // Clear movie list whenever we add a new movie (and it renders it again)
    movieList.innerHTML = '';

    // Loop through movies
    movies.forEach((movie) => {
        // Create a new DOM node (list of element)
        const movieEl = document.createElement('li');
        // Set the text content
        movieEl.textContent = movie.info.title;
        // Append the new DOM node to the movie list (add li element to our ul)
        movieList.append(movieEl);
    });

    console.log(movieList.innerHTML);

};

// Function that add movie to the array
const addMovieHandler = () => {
    // Get user input (input element so use .value to get the actual value)
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            // same as title: title
            title,
            // dynamic property name [extraName] - the user is the one who enters the name of the object key
            [extraName]: extraValue
        },
        // Get random number
        id: Math.random()
    };

    // Add new movie to our array
    movies.push(newMovie);
    // Render movies to our webpage
    renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
