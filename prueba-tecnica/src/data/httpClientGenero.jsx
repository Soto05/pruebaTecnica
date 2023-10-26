const API = "https://api.themoviedb.org/3";

export function getMoviesByGenre(genreId) {
  const apiKey = "957346439e2a0a338936f3563ceebf3d";
  const url = `${API}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

  return fetch(url, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
