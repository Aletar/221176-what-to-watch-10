import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES, NameSpace, RENDERED_FILMS_COUNT_PER_STEP } from '../../const';
import { Film, Review } from '../../types/types';
import { changeGenre, showMoreFilms } from '../action';
import { addReviewAction, changeFavoriteStatusAction, fetchFavoritesAction, fetchFilmAction, fetchFilmCommentsAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../api-action';


type InitialState = {
  genre: string,
  films: Film[],
  renderedFilmsCount: number,
  isFilmsLoading: boolean,
  isPromoLoading: boolean,
  isFilmInfoLoading: boolean,
  isSimilarFilmsLoading: boolean,
  isCommentsLoading: boolean,
  isCommentSending: boolean,
  isFavoriteLoading: boolean,
  changingFavoriteStatus: boolean
  promoFilm: Film,
  film: Film,
  similarFilms: Film[],
  reviews: Review[] | [],
  favoriteFilms: Film[] | []
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  renderedFilmsCount: RENDERED_FILMS_COUNT_PER_STEP,
  isFilmsLoading: false,
  isPromoLoading: false,
  isFilmInfoLoading: false,
  isSimilarFilmsLoading: false,
  isCommentsLoading: false,
  isCommentSending: false,
  isFavoriteLoading: false,
  changingFavoriteStatus: false,
  promoFilm: {} as Film,
  film: {} as Film,
  reviews: [],
  similarFilms: [],
  favoriteFilms: []
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.renderedFilmsCount = RENDERED_FILMS_COUNT_PER_STEP;
      })
      .addCase(showMoreFilms, (state, action) => {
        state.renderedFilmsCount += RENDERED_FILMS_COUNT_PER_STEP;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmInfoLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmInfoLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchFilmCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchFilmCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isCommentsLoading = false;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isCommentSending = true;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isCommentSending = false;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.isCommentSending = false;
        state.reviews = action.payload;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isFavoriteLoading = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state, action) => {
        state.changingFavoriteStatus = true;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.changingFavoriteStatus = false;
        if (state.film.id === action.payload.id) {
          state.film = action.payload;
        }
        if (state.promoFilm.id === action.payload.id) {
          state.promoFilm = action.payload;
        }
      });
  }
});
