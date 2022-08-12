import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/types';

export const changeGenre = createAction<string>('app/changeGenre');
export const getFilms = createAction<void>('app/getFilms');
export const setDataLoadingStatus = createAction<boolean>('app/setDataLoadingStatus');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setAuthStatus = createAction<AuthorizationStatus>('user/setAuthStatus');
