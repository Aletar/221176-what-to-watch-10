import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { AppRoute, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-action';
import { selectIsCommentSending } from '../../store/app-data/selectors';
import RatingStar from '../rating-star/rating-star';

function AddReviewForm(): JSX.Element {

  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const isCommentSending = useAppSelector(selectIsCommentSending);

  const [formData, setFormData] = useState({
    rating: 1,
    comment: ''
  });

  const ratingStars = [];
  for(let i = 10; i >= 1; i--) {
    ratingStars.push(
      <RatingStar
        id={i.toString()}
        checked={i === formData.rating}
        onClickHandler={({currentTarget}: MouseEvent<HTMLInputElement>) => {
          setFormData({...formData, rating: Number(currentTarget.value)});
        }}
      />);
  }
  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.rating && formData.comment) {
      dispatch(addReviewAction([params.id, formData]));
      navigate(generatePath(AppRoute.Film, {id: params.id}));
    }
  };

  const isCommentValid = (comment: string): boolean => {
    const commentLength = comment.length;
    return commentLength >= MIN_COMMENT_LENGTH && commentLength <= MAX_COMMENT_LENGTH;
  };

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
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
          disabled={isCommentSending}
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            setFormData({...formData, comment: target.value});
          }}
          value={formData.comment}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isCommentSending || !isCommentValid(formData.comment)}
          >Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
