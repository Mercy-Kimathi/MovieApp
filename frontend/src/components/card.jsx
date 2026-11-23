import { useState } from "react"
import "../css/Moviecard.css"
export default function MovieCard({movie}){
  const [isLiked, setIsLiked] = useState(false);

  return(
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div className="movie-overlay">
          <button
            className="favorite-btn"
            aria-pressed={isLiked}
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? "♥" : "♡"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
};