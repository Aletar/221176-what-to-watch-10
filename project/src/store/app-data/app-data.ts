import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES, NameSpace, RENDERED_FILMS_COUNT_PER_STEP } from '../../const';
import { Film } from '../../types/types';
import { changeGenre, getFilms } from '../action';
import { fetchFilmsAction } from '../api-action';


type InitialState = {
  genre: string,
  films: Film[],
  renderedFilmsCount: number,
  isDataLoading: boolean
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  films: [],
  renderedFilmsCount: RENDERED_FILMS_COUNT_PER_STEP,
  isDataLoading: false,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.renderedFilmsCount = RENDERED_FILMS_COUNT_PER_STEP;
      })
      .addCase(getFilms, (state, action) => {
        state.renderedFilmsCount += RENDERED_FILMS_COUNT_PER_STEP;
      });
  }
});
