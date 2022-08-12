import { Link } from 'react-router-dom';
import { changeGenre } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GenreListProps } from '../../types/types';
import { ALL_GENRES } from '../../const';

function GenreList({films}: GenreListProps) {
  const genres = [ALL_GENRES, ...[...new Set((films.map((film) => film.genre)))].sort()];
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

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
