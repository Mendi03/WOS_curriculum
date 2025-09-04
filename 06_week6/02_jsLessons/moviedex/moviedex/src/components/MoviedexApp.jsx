import { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieCard from "./MovieCards";


function MoviedexApp() {

  const [movies, setMovies] = useState([]);
  const [watchedFilter, setWatchedFilter] = useState(false);

  let movieList = movies;

  const handleAddMovie = (title, year) => {
    // Simple ID generation: find max ID or start at 1 if list is empty
    const newId =
      movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1;
    const newMovie = {
      id: newId,
      title: title,
      year: year,
      watched: false,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]); // Add immutably
  };

  const handleToggleWatched = ((idToMark) => {
    setMovies((prevMovies) => 
      prevMovies.map((movie) => movie.id === idToMark ? {...movie, watched: !movie.watched} : movie)
    )
  })

  const handleDeleteMovie = ((idToDelete) => {
    setMovies((prevMovies) => 
      prevMovies.filter((movie) => movie.id !== idToDelete)
    )
  })

  const handleWatchedFilter = (() => setWatchedFilter(!watchedFilter));

  if(watchedFilter){
    const unwatchedMovies = movies.filter((movie) => movie.watched === false);
    movieList = unwatchedMovies;
  }

  return (
    <div>
      <header>
        <h1>My Moviedex</h1>
        <button 
        onClick={handleWatchedFilter}>
          {watchedFilter ? "Show All" : "Show Unwatched"}
        </button>
      </header>
      <AddMovieForm onAddMovie={handleAddMovie} />
      {movieList.length === 0 ? (
        <p>Your Moviedex is empty! Add a movie below.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}>
          {movieList.map((movie) => (
            <MovieCard 
            key={movie.id} 
            movie={movie}
            onToggleWatched={handleToggleWatched}
            onDeleteMovie={handleDeleteMovie}  />
          ))}
        </div>
      )}
    </div>
  )
}

export default MoviedexApp