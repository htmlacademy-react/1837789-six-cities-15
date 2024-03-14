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
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import ScrollToTop from '../scroll-to-top/scrollToTop';
import Spinner from '../../components/spinner/spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppPageProps = {
  offers: Offers;
  nearbyOffers: Offers;
  reviews: Reviews;
  citiesList: string[];
}

function App({nearbyOffers, offers, reviews, citiesList}: AppPageProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.offersIsLoading);

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
                <FavoritesPage offers = {offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route path={AppRoute.Offer}>
            <Route index element={
              <OfferPage nearbyOffers = {nearbyOffers} reviews = {reviews}
                onReview={(rating, comment) => {
                  // eslint-disable-next-line no-console
                  console.log(rating, comment);
                }}
              />
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
