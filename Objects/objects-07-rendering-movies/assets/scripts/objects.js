const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

// Movie array
const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    });
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

    movies.push(newMovie);

    renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
