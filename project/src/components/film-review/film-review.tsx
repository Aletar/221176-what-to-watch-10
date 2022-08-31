import { Review } from '../../types/types';
import { getHumanazeDate } from '../../utils';

type FilmReviewProps = {
  review: Review
};

function FilmReview({review}: FilmReviewProps): JSX.Element {
  const { comment, user, date, rating } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{getHumanazeDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1)}</div>
    </div>
  );
}

export default FilmReview;
