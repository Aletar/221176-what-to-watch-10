import { FilmCardProps } from '../../types/types';
import ButtonAdd from '../button-add/button-add';
import ButtonPlay from '../button-play/button-play';
import Header from '../header/header';

function FilmCard({film}: FilmCardProps): JSX.Element {

  const {
    backgroundImage,
    name,
    posterImage,
    genre,
    released
  } = film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={`${name}poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
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
