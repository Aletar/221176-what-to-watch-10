import React from 'react';
import { Film } from '../../types/types';
import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import FilmCardList from '../../components/film-card-list/film-card-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { ALL_GENRES } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectFilms, selectGenre, selectRenderedFilmsCount } from '../../store/app-data/selectors';

function filterFilms(films: Film[], activeGenre: string): Film[] {
  return activeGenre === ALL_GENRES
    ? films
    : films.filter((film) => film.genre === activeGenre);
}

function MainScreen(): JSX.Element {

  const genre = useAppSelector(selectGenre);
  const films = useAppSelector(selectFilms);
  const renderedFilmsCount = useAppSelector(selectRenderedFilmsCount);

  const filteredFilms = filterFilms(films, genre);
  const renderedFilms = filteredFilms.slice(0, renderedFilmsCount);

  return (
    <React.Fragment>
      <FilmCard film = {films[0]} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} />

          <FilmCardList films={renderedFilms} />

          {filteredFilms.length > renderedFilmsCount && <ShowMoreButton /> }
        </section>

        <footer className="page-footer">
          <Logo light />

          <Copyright />
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
