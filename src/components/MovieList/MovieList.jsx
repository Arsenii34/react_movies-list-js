import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({movies}) => {
  return (
    <div className="movies">
      {movies.map(movie =>
        <MovieCard
          key = {movie.imdbId}
          description = {movie.description}
          title = {movie.title}
          image = {movie.imgUrl}
          link ={movie.imdbUrl}
        />
      )}
    </div>
  );
}
