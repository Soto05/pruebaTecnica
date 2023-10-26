import { ContextTrendingMovieCard } from "../components/TrendingMovieCard";
import { ContextMovieGenero } from "../components/MovieGenero";
export function LandingPage() {
  return (
    <div>
      <div>
        <h1>Acción</h1>
        <ContextMovieGenero />
      </div>
      <div>
        <h1>Trending</h1>
        <ContextTrendingMovieCard />
      </div>
    </div>
  );
}
