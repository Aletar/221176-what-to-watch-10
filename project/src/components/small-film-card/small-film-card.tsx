import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

function SmallFilmCard({film}: FilmCardProps): JSX.Element {
  const [isActive, setActive] = useState(false);

  const mouseOverHandler = () => {
    setActive(true);
  };

  const mouseOutHandler = () => {
    setActive(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div key={film.id} className="small-film-card__image">
        {isActive
          ? <VideoPlayer poster={film.previewImage} src={film.previewVideoLink}/>
          : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
