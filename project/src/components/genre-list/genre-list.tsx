import { Link } from 'react-router-dom';
import { changeGenre } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectGenre, selectGenres } from '../../store/app-data/selectors';

function GenreList() {
  const genres = useAppSelector(selectGenres);
  const activeGenre = useAppSelector(selectGenre);
  const dispatch = useAppDispatch();

  const clickHandler = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => (
        <li
          key={genre}
          onClick={() => clickHandler(genre)}
          data-genre={genre}
          className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
        >
          <Link to='/' className='catalog__genres-link'>
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
