import React from 'react';
import { FilmCardProps } from '../../types/types';

function FilmOverview({film}: FilmCardProps): JSX.Element {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring
  } = film;

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${starring.join(', ')}`}</strong></p>
      </div>
    </React.Fragment>
  );
}

export default FilmOverview;
