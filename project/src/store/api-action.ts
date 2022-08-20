import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { AuthData, AuthInfo, Film } from '../types/types';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
  }>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      return data;
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
  }>(
    'user/checkAuth',
    async (_arg, { dispatch, extra: api }) => {
      await api.get(APIRoute.Login);
    }
  );

export const signInAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/login',
    async ({ email, password }, { dispatch, extra: api }) => {
      await api.post<AuthInfo>(APIRoute.Login, { email, password });
    }
  );
