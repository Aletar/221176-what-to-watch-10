import React from 'react';
import { MouseEvent } from 'react';

export type RatingStarProps = {
  id: string,
  checked: boolean,
  onClickHandler: (evt: MouseEvent<HTMLInputElement>) => void
}

function RatingStar({id, checked, onClickHandler}: RatingStarProps): JSX.Element {
  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${id}`}
        type="radio"
        name="rating"
        value={id}
        checked={checked}
        onClick={onClickHandler}
        readOnly
      />
      <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
    </React.Fragment>
  );
}

export default RatingStar;
