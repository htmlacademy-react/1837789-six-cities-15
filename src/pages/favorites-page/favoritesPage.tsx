import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {Helmet} from 'react-helmet-async';
import {useEffect} from 'react';
import {
  getFavoritesLength
} from '../../store/favorites-process/selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Favorites from '../../components/favorites/favorites';
import {store} from '../../store';
import {fetchFavoritesAction} from '../../store/api-actions';

function FavoritesPage(): JSX.Element {
  const isFavoritesEmpty = !useAppSelector(getFavoritesLength);
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, [dispatch]);

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
