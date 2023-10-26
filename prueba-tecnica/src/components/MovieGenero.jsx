import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../data/httpClientGenero";
import { MovieCard } from "./MovieCard";
import "../components/ContextMovieCard.css";

export function ContextMovieGenero() {
  const [movies, SetMovies] = useState([]);
  const genreId = 27;
  useEffect(() => {
    getMoviesByGenre(genreId).then((data) => {
      SetMovies(data.results);
      console.log(data);
    });
  }, [genreId]);
  return (
    <div className="container">
      {movies.map((item) => (
        <div className="movie-card" key={item.id}>
          <MovieCard movie={item} />
        </div>
      ))}
    </div>
  );
}
