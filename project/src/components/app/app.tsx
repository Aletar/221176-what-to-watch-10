import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { selectAuthorizationStatus } from '../../store/user-process/selectors';
import { selectDataLoadingInfo } from '../../store/app-data/selectors';

function App(): JSX.Element {

  const { isFilmsLoading, isPromoLoading } = useAppSelector(selectDataLoadingInfo);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (isFilmsLoading || isPromoLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
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
