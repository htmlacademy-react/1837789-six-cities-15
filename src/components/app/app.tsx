import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/mainPage';
import FavoritesPage from '../../pages/favorites-page/favoritesPage';
import OfferPage from '../../pages/offer-page/offerPage';
import LoginPage from '../../pages/login-page/loginPage';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';
import PrivateRoute from '../private-route/privateRoute';


type AppPageProps = {
  placesCount: number;
}

function App({placesCount}: AppPageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage placesCount={placesCount} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
