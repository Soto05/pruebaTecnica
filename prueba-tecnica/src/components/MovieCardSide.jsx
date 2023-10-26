import "../components/MovieCard.css";
export function MovieCardSide({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <li className="movieCard">
      <img
        width={250}
        height={350}
        src={imageUrl}
        alt={movie.title}
        className="movieImage"
      />
    </li>
  );
}
