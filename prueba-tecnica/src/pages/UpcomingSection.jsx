import { NewMovieCard } from "../components/NewMovies";
import "./UpcomingSection.css";
export function UpcomingSection() {
  return (
    <div>
      <h1 className="side-title">Estrenos</h1>
      <NewMovieCard />
    </div>
  );
}
