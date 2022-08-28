import { Link } from 'react-router-dom';
import { TabProps } from '../../types/types';

function FilmTab({tabName, isActive, onClickHandler}: TabProps): JSX.Element {
  return (
    <li className={`film-nav__item ${isActive ? 'film-nav__item--active' : ''}`}>
      <Link to="#" className="film-nav__link" onClick={onClickHandler} style={{cursor: 'pointer'}}>{tabName}</Link>
    </li>
  );
}

export default FilmTab;
