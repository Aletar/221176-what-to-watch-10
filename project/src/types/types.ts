import { MouseEvent } from 'react';

export type ComponentWithFilmProps = {
  film: Film
};

export type RatingStarProps = {
  id: string,
  checked: boolean,
  onClickHandler: (evt: MouseEvent<HTMLInputElement>) => void
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

export type NewReview = {
  comment: string;
  rating: number;
};

export type VideoPlayerProps = {
  poster: string,
  src: string
};

export type TabProps = {
  tabName: string,
  isActive: boolean,
  onClickHandler: (evt: MouseEvent<HTMLAnchorElement>) => void
};

export type AuthData = {
  email: string
  password: string
};

export type AuthInfo = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
};

export type Favorite = {
  id: string;
  status: boolean | undefined;
};
