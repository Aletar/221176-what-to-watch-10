import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import FilmCardList from '../../components/film-card-list/film-card-list';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonAdd from '../../components/button-add/button-add';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { useAppSelector } from '../../hooks';

function MoviePageScreen(): JSX.Element {

  const params = useParams();
  const films = useAppSelector((state) => state.films);

  const film = films.find((f) => f.id.toString() === params.id);

  return film === undefined
    ? <NotFoundScreen />
    : (
      <React.Fragment>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <Logo light={false} />

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </li>
                <li className="user-block__item">
                  <a className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <ButtonPlay film={film}/>
                  <ButtonAdd />
                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>
              <FilmTabs film={film} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmCardList films={films}/>
          </section>

          <footer className="page-footer">
            <Logo light />

            <Copyright />
          </footer>
        </div>
      </React.Fragment>
    );
}

export default MoviePageScreen;
