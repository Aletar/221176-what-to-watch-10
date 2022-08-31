import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('app/changeGenre');

export const showMoreFilms = createAction<void>('app/showMoreFilms');
