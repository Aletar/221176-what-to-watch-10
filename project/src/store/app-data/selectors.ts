import { State } from '../../types/state';
import { ALL_GENRES, MAX_GENRES_COUNT, MAX_SIMILAR_FILMS, NameSpace } from '../../const';

export const selectFilms = (state: State) => state[NameSpace.AppData].films;
export const selectGenre = (state: State) => state[NameSpace.AppData].genre;
export const selectRenderedFilmsCount = (state: State) => state[NameSpace.AppData].renderedFilmsCount;
export const selectPromoFilm = (state: State) => state[NameSpace.AppData].promoFilm;
export const selectFavoriteFilms = (state: State) => state[NameSpace.AppData].favoriteFilms;
export const selectFilm = (state: State) => state[NameSpace.AppData].film;
export const selectReviews = (state: State) => state[NameSpace.AppData].reviews;
export const selectSimilarFilms = (state: State) => state[NameSpace.AppData].similarFilms.slice(0, MAX_SIMILAR_FILMS);
export const selectChangingFavoriteStatus = (state: State) => state[NameSpace.AppData].changingFavoriteStatus;
export const selectIsCommentSending = (state: State) => state[NameSpace.AppData].isCommentSending;

export const selectDataLoadingInfo = (state: State) => {
  const s = state[NameSpace.AppData];
  return {
    isFilmsLoading: s.isFilmsLoading,
    isPromoLoading: s.isPromoLoading,
    isFilmInfoLoading: s.isFilmInfoLoading,
    isSimilarFilmsLoading: s.isSimilarFilmsLoading,
    isFavoriteLoading: s.isFavoriteLoading,
    isCommentsLoading: s.isCommentsLoading
  };
};

export const selectGenres = (state: State) => {
  const films = state[NameSpace.AppData].films;
  return [ALL_GENRES, ...[...new Set((films.map((film) => film.genre)))].sort()].slice(0, MAX_GENRES_COUNT);
};
