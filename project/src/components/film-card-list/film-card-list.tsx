import { useState } from 'react';

import { AppProps } from '../../types/types';
import SmallFilmCard from '../small-film-card/small-film-card';

function FilmCardList({films}: AppProps): JSX.Element {

  const [, setActiveFilmId] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          film={film}
          mouseOverHandler={() => {
            setActiveFilmId(film.id);
          }}
          mouseOutHandler={() => {
            setActiveFilmId(0);
          }}
        />))}
    </div>
  );
}

export default FilmCardList;
