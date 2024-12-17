document.addEventListener("DOMContentLoaded", () => {
    const movieDetails = {
        poster: document.getElementById("movie-poster"),
        title: document.getElementById("movie-title"),
        showtime: document.getElementById("movie-showtime"),
        runtime: document.getElementById("movie-runtime"),
        tickets: document.getElementById("movie-tickets"),
    };
    const filmsList = document.getElementById("films");
    const buyTicketBtn = document.getElementById("buy-ticket");

    const baseURL = "http://localhost:3000/films";
    let selectedMovie = {};

    // Fetch and display the first movie's details
    fetchMovieDetails(1);

    // Fetch all movies and display in the sidebar
    fetch(`${baseURL}`)
        .then((res) => res.json())
        .then((movies) => {
            movies.forEach(addMovieToList);
        });

    // Fetch movie details by ID
    function fetchMovieDetails(id) {
        fetch(`${baseURL}/${id}`)
            .then((res) => res.json())
            .then((movie) => {
                selectedMovie = movie;
                displayMovieDetails(movie);
            });
    }

    // Display movie details in the main section
    function displayMovieDetails(movie) {
        movieDetails.poster.src = movie.poster;
        movieDetails.title.textContent = movie.title;
        movieDetails.showtime.textContent = movie.showtime;
        movieDetails.runtime.textContent = movie.runtime;
        const availableTickets = movie.capacity - movie.tickets_sold;
        movieDetails.tickets.textContent = availableTickets;

        // Update button text
        buyTicketBtn.textContent = availableTickets > 0 ? "Buy Ticket" : "Sold Out";
    }

    // Add movie to the sidebar list
    function addMovieToList(movie) {
        const li = document.createElement("li");
        li.textContent = movie.title;
        li.className = "film item";
        if (movie.tickets_sold >= movie.capacity) {
            li.classList.add("sold-out");
        }
        li.addEventListener("click", () => fetchMovieDetails(movie.id));
        filmsList.appendChild(li);
    }

    // Buy Ticket button event
    buyTicketBtn.addEventListener("click", () => {
        const availableTickets = selectedMovie.capacity - selectedMovie.tickets_sold;

        if (availableTickets > 0) {
            selectedMovie.tickets_sold += 1;
            movieDetails.tickets.textContent = selectedMovie.capacity - selectedMovie.tickets_sold;

            // Update button text
            if (selectedMovie.tickets_sold >= selectedMovie.capacity) {
                buyTicketBtn.textContent = "Sold Out";
                const soldOutMovie = Array.from(filmsList.children).find(
                    (li) => li.textContent === selectedMovie.title
                );
                soldOutMovie.classList.add("sold-out");
            }
        } else {
            alert("Sorry, this movie is sold out!");
        }
    });
});
