import { AppProps } from '../../types/types';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmCardList({films}: AppProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          film={film}
        />))}
    </div>
  );
}

export default FilmCardList;