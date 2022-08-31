import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { AuthData, AuthInfo, Favorite, Film, NewReview, Review } from '../types/types';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  });

export const signInAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: {token} } = await api.post<AuthInfo>(APIRoute.Login, { email, password });
    saveToken(token);
  });

export const signOutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  });

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    return data;
  });

export const fetchPromoFilmAction = createAsyncThunk<Film, void, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  });

export const fetchFilmAction = createAsyncThunk<Film, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    return data;
  });

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    const filteredData = data.filter((film) => film.id !== Number(filmId));
    return filteredData;
  });

export const fetchFilmCommentsAction = createAsyncThunk<Review[] | [], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  });

export const addReviewAction = createAsyncThunk<Review[], [(string | undefined), NewReview], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ([filmID, { comment, rating }], { extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${filmID}`, { comment, rating });
    return data;
  });

export const fetchFavoritesAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  });

export const changeFavoriteStatusAction = createAsyncThunk<Film, Favorite, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFavoriteStatus',
  async ({ id, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<Film>(`${APIRoute.Favorite}/${id}/${Number(!status)}`);
    return data;
  });
