import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCardSide } from "./MovieCardSide";
import "../components/ContextMovieCard.css";

export function NewMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/movie/upcoming").then((data) => {
      SetMovies(data.results);
      console.log(data);
    });
  }, []);
  return (
    <ul className="container">
      {movies.map((item) => (
        <MovieCardSide movie={item} key={item.id} />
      ))}
    </ul>
  );
}
