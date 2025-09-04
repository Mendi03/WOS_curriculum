

function MovieCard({ movie, onToggleWatched, onDeleteMovie }) {
  // Expects a 'movie' object as a prop
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}>
      <h3>
        {movie.title} ({movie.year})
      </h3>
      <p>Status: {movie.watched ? "Watched" : "Unwatched"}</p>
      <button
      onClick={() => onToggleWatched(movie.id)}>
        {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
      </button>
      <button
      onClick={() => onDeleteMovie(movie.id)}>
        Delete Movie
      </button>
    </div>
  );
}

export default MovieCard;