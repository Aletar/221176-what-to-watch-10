import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { AppDispatch, State } from '../types/state';
import { AuthData, AuthInfo, Film } from '../types/types';
import { loadFilms, setAuthStatus, setDataLoadingStatus } from './action';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
  }>(
    'user/checkAuth',
    async (_arg, { dispatch, extra: api }) => {
      try {
        await api.get(APIRoute.Login);
        dispatch(setAuthStatus(AuthorizationStatus.Auth));
      } catch {
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
      }
    },
  );

export const signInAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/login',
    async ({ email, password }, { dispatch, extra: api }) => {
      await api.post<AuthInfo>(APIRoute.Login, { email, password });
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    }
  );
