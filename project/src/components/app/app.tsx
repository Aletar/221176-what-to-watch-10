import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

import { AppProps } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';

function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen films = {films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen film={films[0]} />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen currentFilm={films[0]} films={films} />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen film={films[0]} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
