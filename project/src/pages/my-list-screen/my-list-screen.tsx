import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import FilmCardList from '../../components/film-card-list/film-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { AuthorizationStatus, HeaderSpec } from '../../const';
import { selectDataLoadingInfo, selectFavoriteFilms } from '../../store/app-data/selectors';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-action';
import Loading from '../../components/loading/loading';

function MyListScreen(): JSX.Element {

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const { isFavoriteLoading } = useAppSelector(selectDataLoadingInfo);
  const favoriteFilms = useAppSelector(selectFavoriteFilms);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth && favoriteFilms.length === 0) {
      dispatch(fetchFavoritesAction());
    }
  }, [favoriteFilms.length, authorizationStatus, dispatch]);

  return (
    <div className="user-page">
      <Header spec={HeaderSpec.MyList} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {isFavoriteLoading ? <Loading /> : <FilmCardList films={favoriteFilms} />}
      </section>

      <footer className="page-footer">
        <Logo light />

        <Copyright />
      </footer>

    </div>
  );
}

export default MyListScreen;
