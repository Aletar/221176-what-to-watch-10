import { TabProps } from '../../types/types';

function FilmTab({tabName, isActive, clickHandler}: TabProps): JSX.Element {
  return (
    <li className={`film-nav__item ${isActive ? 'film-nav__item--active' : ''}`}>
      <a className="film-nav__link" onClick={clickHandler} style={{cursor: 'pointer'}}>{tabName}</a>
    </li>
  );
}

export default FilmTab;
