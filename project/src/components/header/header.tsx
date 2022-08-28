import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, HeaderSpec } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import AddReviewInHeader from '../add-review-in-header/add-review-in-header';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import { signOutAction } from '../../store/api-action';
import { selectFavoriteFilms, selectFilm } from '../../store/app-data/selectors';
import React from 'react';
import MyListHeader from '../my-list-header/my-list-header';

type HeaderProps = {
  spec?: HeaderSpec,
}

function Header({spec}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const film = useAppSelector(selectFilm);
  const favoriteFilmsCount = useAppSelector(selectFavoriteFilms).length;

  const dispatch = useAppDispatch();

  return (
    <header className="page-header film-card__head">
      <Logo light={false} />

      {spec === HeaderSpec.MyList && <MyListHeader count={favoriteFilmsCount} />}

      {spec === HeaderSpec.AddReview && film !== undefined && <AddReviewInHeader film={film}/>}

      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppRoute.MyList}>
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(signOutAction());
              }}
              to="#"
              className="user-block__link"
            >
            Sign out
            </Link>
          </li>
        </ul> :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}

export default Header;
