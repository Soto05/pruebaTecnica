import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "../components/ContextMovieCard.css";

export function ContextTrendingMovieCard() {
  const [movies, SetMovies] = useState([]);
  const genreId = 28;
  useEffect(() => {
    get("/movie/top_rated").then((data) => {
      SetMovies(data.results);
      console.log(data);
    });
  }, []);
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
