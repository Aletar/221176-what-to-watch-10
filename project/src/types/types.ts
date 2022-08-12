import { MouseEvent } from 'react';

export type FilmCardListProps = {
  films: Film[]
};

export type FilmCardProps = {
  film: Film
};

export type MoviePageProps = {
  currentFilm: Film,
  films: Film[]
}

export type RatingStarProps = {
  id: string,
  checked: boolean,
  clickHandler: (evt: MouseEvent<HTMLInputElement>) => void
}

export type GenreListProps = {
  films: Film[]
}

export type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: [string],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean
};

type ReviewUser = {
  id: number,
  name: string
};

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: ReviewUser
};

export type VideoPlayerProps = {
  poster: string,
  src: string
}

export type TabProps = {
  tabName: string,
  isActive: boolean,
  clickHandler: (evt: MouseEvent<HTMLAnchorElement>) => void
}

export type InitialState = {
  genre: string,
  films: Film[],
  renderedFilmsCount: number,
  isDataLoading: boolean
}
