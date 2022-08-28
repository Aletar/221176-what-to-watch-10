import { useAppDispatch } from '../../hooks';
import { showMoreFilms } from '../../store/action';

function ShowMoreButton(): JSX.Element {

  const dispatch = useAppDispatch();

  const clickHandler = () => (
    dispatch(showMoreFilms())
  );

  return (
    <div className="catalog__more">
      <button onClick={clickHandler} className='catalog__button' type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
