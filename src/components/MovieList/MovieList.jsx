import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = () => {
  return (
    <div className="movies">
      <MovieCard
        description="Follows the lives of eight very different couples in
          dealing with their love lives in various loosely interrelated tales
           all set during a frantic month before Christmas in London, England."
        image="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        title="Inception"
        link="https://www.imdb.com/title/tt1375666"
      />
      <MovieCard
        description="A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting
              an idea into the mind of a C.E.O."
        image="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg"
         title="Love Actually"
          link="https://www.imdb.com/title/tt0314331"
      />

    </div>
  );
}
