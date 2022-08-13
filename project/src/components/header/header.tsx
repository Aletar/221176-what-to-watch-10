import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AuthorizationStatus, HeaderSpec } from '../../const';
import { useAppSelector } from '../../hooks';
import { HeaderProps } from '../../types/types';
import AddReviewInHeader from '../add-review-in-header/add-review-in-header';

function Header({spec, film, favoriteCount}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="page-header film-card__head">
      <Logo light={false} />

      {spec === HeaderSpec.MyList && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteCount}</span></h1>}

      {spec === HeaderSpec.AddReview && film !== undefined && <AddReviewInHeader film={film}/>}

      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul> :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}

export default Header;
