import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, RENDERED_FILMS_COUNT_PER_STEP } from '../const';
import { changeGenre, getFilms, setDataLoadingStatus, loadFilms } from './action';
import { InitialState } from '../types/types';

export const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  renderedFilmsCount: RENDERED_FILMS_COUNT_PER_STEP,
  isDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.renderedFilmsCount = initialState.renderedFilmsCount;
    })
    .addCase(getFilms, (state, action) => {
      state.renderedFilmsCount += RENDERED_FILMS_COUNT_PER_STEP;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    });
});

export default reducer;
