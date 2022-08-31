import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction, fetchFavoritesAction } from '../../store/api-action';
import { selectChangingFavoriteStatus, selectDataLoadingInfo, selectFavoriteFilms } from '../../store/app-data/selectors';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import { Favorite, ComponentWithFilmProps } from '../../types/types';

function ButtonAddToFavorites({film}: ComponentWithFilmProps): JSX.Element {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const favoriteFilmsCount = useAppSelector(selectFavoriteFilms).length;

  const { isFavoriteLoading } = useAppSelector(selectDataLoadingInfo);
  const changingFavoriteStatus = useAppSelector(selectChangingFavoriteStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [film.isFavorite, authorizationStatus, dispatch]);

  const clickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const data: Favorite = {
        id: String(film.id),
        status: film.isFavorite,
      };
      dispatch(changeFavoriteStatusAction(data));
    } else {
      navigate(`${AppRoute.SignIn}`);
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      disabled={changingFavoriteStatus || isFavoriteLoading}
      onClick={clickHandler}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{authorizationStatus === AuthorizationStatus.Auth ? favoriteFilmsCount : 0 }</span>
    </button>
  );
}

export default ButtonAddToFavorites;

