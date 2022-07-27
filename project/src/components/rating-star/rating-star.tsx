import React from 'react';
import { RatingStarProps } from '../../types/types';

function RatingStar({id, checked, clickHandler}: RatingStarProps): JSX.Element {
  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${id}`}
        type="radio"
        name="rating"
        value={id}
        checked={checked}
        onClick={clickHandler}
      />
      <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
    </React.Fragment>
  );
}

export default RatingStar;
