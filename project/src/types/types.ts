export type AppProps = {
  films: Film[]
}

export type FilmCardProps = {
  film: Film,
  mouseOverHandler?: () => void,
  mouseOutHandler?: () => void
};

export type MoviePageProps = {
  currentFilm: Film,
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
