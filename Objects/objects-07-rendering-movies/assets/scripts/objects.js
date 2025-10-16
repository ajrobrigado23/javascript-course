const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

// Movie array
const movies = [];

// Function that render movies - output all movies in our page (has a default argument)
const renderMovies = (filter = '') => {
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

    // Tweak the movies object
    const filteredMovies = !filter // (if it's not truthy, falsy value)
        //  If the filter is not truthy, return the original movies array
        ? movies
        // If the filter is truthy, return the filtered movies array (use a filter function)
        : movies.filter((movie) => movie.info.title.includes(filter));

    // Loop through movies (refactor instead of movie array, we used the filteredMovies)
    filteredMovies.forEach((movie) => {
        // Create a new DOM node (list of element)
        const movieEl = document.createElement('li');

        // Object destructuring
        const { info, ...otherProps } = movie;

        // It will store the other properties in a new object (which id in our object)
        console.log(otherProps);

        // Object destructuring adding a new name
        const { title: movieTitle } = info;

        // Set the text content
        movieEl.textContent = movie.info.title;

        // Problem we had is we don't know the input of the user in our object key [extraName]
        let text = movie.info.title + ' - ';

        // Go through key value pairs in our object (Solution)
        for (const key in movie.info) {
            // We don't want to include the title in our output, all the key beside the title will be included.
            if (key !== 'title') {
                // Keys are strings (accessing the dynamic property the user inputs)
                text = text + key + ': ' + movie.info[key];
            }
        }

        // Set the new text content after our loop
        movieEl.textContent = text;

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

// Function that search movie (using the filter search)
const searchMovieHandler = () => {
    // Read whenever the user types something in the search box
    const filterTerm = document.getElementById('filter-title').value;
    // It also triggers render movies function (it should be only render the filter movies)
    renderMovies(filterTerm);
};

// Button that add movie
addMovieBtn.addEventListener('click', addMovieHandler);
// Button that search movie (filtered search)
searchBtn.addEventListener('click', searchMovieHandler);