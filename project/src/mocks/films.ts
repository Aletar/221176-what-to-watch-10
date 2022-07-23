import { Film } from '../types/types';

export const films: Film[] = [
  {
    id: 1,
    name: 'Всё везде и сразу',
    posterImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fb/%D0%92%D1%81%D1%91%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%D0%B8%D1%81%D1%80%D0%B0%D0%B7%D1%83.jpg/1920px-%D0%92%D1%81%D1%91%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%D0%B8%D1%81%D1%80%D0%B0%D0%B7%D1%83.jpg',
    previewImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fb/%D0%92%D1%81%D1%91%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%D0%B8%D1%81%D1%80%D0%B0%D0%B7%D1%83.jpg/630px-%D0%92%D1%81%D1%91%D0%B2%D0%B5%D0%B7%D0%B4%D0%B5%D0%B8%D1%81%D1%80%D0%B0%D0%B7%D1%83.jpg?20220310102056',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'Судьба мультивселенной — в руках владелицы прачечной. Самый изобретательный и остроумный боевик года',
    rating: 7.4,
    scoresCount: 176713,
    director: 'Дэн Кван, Дэниэл Шайнерт',
    starring: ['Мишель Йео'],
    runTime: 139,
    genre: 'фантастика, комедия, боевик, приключения, драма',
    released: 2022,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Наши матери, наши отцы',
    posterImage: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/a168a22d-97fa-47ec-9ed3-8fdceac9b093/3840x',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: '',
    description: 'Пятеро молодых берлинцев — в мясорубке Второй мировой. Драматичный взгляд на войну с другой стороны фронта',
    rating: 8.2,
    scoresCount: 47548,
    director: 'Филипп Кадельбах',
    starring: ['Фолькер Брух'],
    runTime: 270,
    genre: 'военный, боевик, драма, история',
    released: 2013,
    isFavorite: false
  }
];
