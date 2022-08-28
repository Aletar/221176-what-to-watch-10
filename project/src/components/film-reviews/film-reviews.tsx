import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmCommentsAction } from '../../store/api-action';
import { selectDataLoadingInfo, selectReviews } from '../../store/app-data/selectors';
import { ComponentWithFilmProps } from '../../types/types';
import FilmReview from '../film-review/film-review';
import Loading from '../loading/loading';

function FilmReviews({film}: ComponentWithFilmProps): JSX.Element {

  const dispatch = useAppDispatch();

  const { isCommentsLoading } = useAppSelector(selectDataLoadingInfo);
  const reviews = useAppSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchFilmCommentsAction(String(film.id)));
  }, [dispatch, film]);

  if (isCommentsLoading) {
    return <Loading />;
  }

  if (reviews.length === 0) {
    return <p>No comments</p>;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review, index) =>
            index % 2 === 0 && <FilmReview key={review.id} review={review} />)
        }
      </div>
      <div className="film-card__reviews-col">
        {
          reviews.map((review, index) =>
            index % 2 === 1 && <FilmReview key={review.id} review={review} />)
        }
      </div>
    </div>
  );
}

export default FilmReviews;
