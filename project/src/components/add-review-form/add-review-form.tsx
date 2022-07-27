import { useState, ChangeEvent, MouseEvent } from 'react';
import { FilmCardProps } from '../../types/types';
import RatingStar from '../rating-star/rating-star';

function AddReviewFrom({film}: FilmCardProps): JSX.Element {

  const [formData, setFormData] = useState({
    rating: 0,
    textReview: ''
  });

  const ratingStars = [];
  for(let i = 10; i >= 1; i--) {
    ratingStars.push(
      <RatingStar
        id={i.toString()}
        checked={i === formData.rating}
        clickHandler={({currentTarget}: MouseEvent<HTMLInputElement>) => {
          setFormData({...formData, rating: Number(currentTarget.value)});
        }}
      />);
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            setFormData({...formData, textReview: target.value});
          }}
          value={formData.textReview}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewFrom;
