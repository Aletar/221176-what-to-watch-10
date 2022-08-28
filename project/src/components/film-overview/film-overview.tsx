import React from 'react';
import { ComponentWithFilmProps } from '../../types/types';
import { getTextRating } from '../../utils';

function FilmOverview({film}: ComponentWithFilmProps): JSX.Element {
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
          <span className="film-rating__level">{getTextRating(rating)}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${starring !== undefined && starring.join(', ')}`}</strong></p>
      </div>
    </React.Fragment>
  );
}

export default FilmOverview;
