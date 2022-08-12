import { useAppDisptach } from '../../hooks';
import { getFilms } from '../../store/action';

function ShowMoreButton(): JSX.Element {

  const dispatch = useAppDisptach();

  const clickHandler = () => (
    dispatch(getFilms())
  );

  return (
    <div className="catalog__more">
      <button onClick={clickHandler} className='catalog__button' type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
