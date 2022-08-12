import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('app/changeGenre');
export const getFilms = createAction<void>('app/getFilms');
export const setDataLoadingStatus = createAction<boolean>('app/setDataLoadingStatus');

export const loadFilms = createAction('data/loadFilm', (value) => ({
  payload: value,
}));
