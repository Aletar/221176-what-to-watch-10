import { useState } from 'react';
import { FilmTabName } from '../../const';
import { ComponentWithFilmProps } from '../../types/types';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmTab from '../film-tab/film-tab';

function FilmTabs({film}: ComponentWithFilmProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(FilmTabName.Overview);

  const renderTab = (filmTab: FilmTabName): JSX.Element => {
    switch (filmTab) {
      case FilmTabName.Overview:
        return <FilmOverview film={film}/>;
      case FilmTabName.Details:
        return <FilmDetails film={film}/>;
      case FilmTabName.Reviews:
        return <FilmReviews film={film} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(FilmTabName).map((value) => (
            <FilmTab
              key={value}
              tabName={value}
              isActive={activeTab === value}
              onClickHandler={() => setActiveTab(value)}
            />))}
        </ul>
      </nav>
      {renderTab(activeTab)}
    </div>
  );
}

export default FilmTabs;
