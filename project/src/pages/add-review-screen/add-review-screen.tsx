import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import { HeaderSpec } from '../../const';
import { selectFilms } from '../../store/app-data/selectors';

function AddReviewScreen(): JSX.Element {

  const params = useParams();
  const films = useAppSelector(selectFilms);

  const film = films.find((f) => f.id.toString() === params.id);

  return film === undefined
    ? <NotFoundScreen />
    : (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header spec={HeaderSpec.AddReview} />

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm />
        </div>

      </section>
    );
}

export default AddReviewScreen;
