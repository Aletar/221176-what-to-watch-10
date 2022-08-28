export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmTabName {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const ALL_GENRES = 'All genres';

export const RENDERED_FILMS_COUNT_PER_STEP = 8;

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Films = '/films',
  Promo = '/promo',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum HeaderSpec {
  AddReview = 'WITH_ADD_REVIEW',
  MyList = 'MY_LIST',
}

export enum NameSpace {
  User = 'USER',
  AppData = 'APP_DATA'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum TextRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum DurationTemplate {
  HoursMinutesSeconds = 'H[:] m[:] s',
  HoursMinutes = 'H[h] m[m]',
  Minutes = 'm[m]',
  MinutesSeconds = 'm[:] s',
  Seconds = 's'
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 400;
