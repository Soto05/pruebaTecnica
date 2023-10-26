const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTczNDY0MzllMmEwYTMzODkzNmYzNTYzY2VlYmYzZCIsInN1YiI6IjY1MzkxNzkyOTQ2MzE4MDExZDBhNGM0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uglrfbbL_Hf53yPfTGSMW1nzs5nQ94vcKbONzo39BXQ",
      "Content-Type": "aplication/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
