import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import FilmCardList from '../../components/film-card-list/film-card-list';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonAddToFavorites from '../../components/button-add-to-favorites/button-add-to-favorites';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { selectDataLoadingInfo, selectFilm, selectSimilarFilms } from '../../store/app-data/selectors';
import { fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-action';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import Loading from '../../components/loading/loading';

function MoviePageScreen(): JSX.Element {

  const params = useParams();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const { isFilmInfoLoading, isSimilarFilmsLoading } = useAppSelector(selectDataLoadingInfo);
  const film = useAppSelector(selectFilm);
  const similarFilms = useAppSelector(selectSimilarFilms);

  const id = params.id;

  useEffect(() => {
    dispatch(fetchFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
  }, [dispatch, id]);

  if (isFilmInfoLoading) {
    return <LoadingScreen />;
  }

  if (film === undefined) {
    return <NotFoundScreen />;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <ButtonPlay film={film} />
                <ButtonAddToFavorites film={film} />
                {authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
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
          { isSimilarFilmsLoading ? <Loading /> : <FilmCardList films={similarFilms} />}
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

