import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_GANRE: 'CHANGE_GENRE',
  GET_FILMS: 'GET_FILMS'
};

export const changeGenre = createAction(Action.CHANGE_GANRE, (value)=> ({
  payload:value,
}));

export const getFilms = createAction(Action.GET_FILMS);
