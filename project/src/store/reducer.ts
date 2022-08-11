import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, RENDERED_FILMS_COUNT_PER_STEP } from '../const';
import { films } from '../mocks/films';
import { changeGenre, getFilms } from './action';

export const initialState = {
  genre: ALL_GENRES,
  films: films,
  renderedFilmsCount: RENDERED_FILMS_COUNT_PER_STEP
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.renderedFilmsCount = initialState.renderedFilmsCount;
    })
    .addCase(getFilms, (state, action) => {
      state.renderedFilmsCount += RENDERED_FILMS_COUNT_PER_STEP;
    });
});

export default reducer;
