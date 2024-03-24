import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/mainPage';
import FavoritesPage from '../../pages/favorites-page/favoritesPage';
import OfferPage from '../../pages/offer-page/offerPage';
import LoginPage from '../../pages/login-page/loginPage';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';
import PrivateRoute from '../private-route/privateRoute';
import ScrollToTop from '../scroll-to-top/scrollToTop';
import Spinner from '../../components/spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getOffersIsLoading} from '../../store/offers-process/selectors';

type AppPageProps = {
  citiesList: string[];
}

function App({citiesList}: AppPageProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersIsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop/>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage citiesList = {citiesList} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route path={AppRoute.Offer}>
            <Route index element={
              <OfferPage />
            }
            />
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
