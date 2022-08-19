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
  Films = '/films',
  Login = '/login',
}

export enum HeaderSpec {
  AddReview = 'WITH_ADD_REVIEW',
  MyList = 'MY_LIST',
}

export enum NameSpace {
  User = 'USER',
  AppData = 'APP_DATA'
}
