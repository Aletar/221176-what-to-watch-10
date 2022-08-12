import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/types';
import { loadFilms, setDataLoadingStatus } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
      dispatch(setDataLoadingStatus(false));
    },
  );
