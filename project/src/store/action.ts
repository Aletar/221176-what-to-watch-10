import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('app/changeGenre');
export const getFilms = createAction<void>('app/getFilms');
