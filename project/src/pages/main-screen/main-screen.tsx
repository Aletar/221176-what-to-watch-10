import React from 'react';
import { FilmCardProps } from '../../types/types';
import FilmCard from '../../components/film-card/film-card';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';

function MainScreen({title, genre, year}: FilmCardProps): JSX.Element {
  return (
    <React.Fragment>
      <FilmCard title={title} genre={genre} year={year}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
            <SmallFilmCard />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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
