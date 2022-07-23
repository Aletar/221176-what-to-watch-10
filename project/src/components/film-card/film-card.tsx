import { FilmCardProps } from '../../types/types';
import ButtonAdd from '../button-add/button-add';
import ButtonPlay from '../button-play/button-play';
import Logo from '../logo/logo';

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <section className="film-card">
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
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.previewImage} alt={`${film.name}poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <div className="film-card__buttons">
              <ButtonPlay film={film}/>
              <ButtonAdd />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
