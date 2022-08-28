import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ComponentWithFilmProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

function SmallFilmCard({film}: ComponentWithFilmProps): JSX.Element {
  const [isActive, setActive] = useState(false);

  const path = `/films/${film.id}`;

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
          ? <VideoPlayer poster={film.previewImage} src={film.previewVideoLink} />
          : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={path} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
