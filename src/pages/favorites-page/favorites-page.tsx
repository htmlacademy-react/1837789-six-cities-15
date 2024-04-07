import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {Helmet} from 'react-helmet-async';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  getFavoritesLength
} from '../../store/favorites-process/selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Favorites from '../../components/favorites/favorites';
import {store} from '../../store';
import {fetchFavoritesAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';

function FavoritesPage(): JSX.Element {
  const isFavoritesEmpty = !useAppSelector(getFavoritesLength);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, [dispatch]);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--favorites-empty">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <Nav/>
          </div>
        </div>
      </header>

      {!isFavoritesEmpty && <Favorites />}
      {isFavoritesEmpty && <FavoritesEmpty />}

      <footer className="footer container">
        <Logo/>
      </footer>
    </div>
  );
}

export default FavoritesPage;
