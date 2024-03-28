import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import FavoritesCardList from '../../components/favorites-card-list/FavoritesCardList';
import {useAppSelector} from '../../hooks/index';
import {Helmet} from 'react-helmet-async';
import {useEffect} from 'react';
import {
  getFavorites,
  getFavoritesIsLoading,
  getFavoritesIsNotFound,
} from '../../store/favorites-process/selectors';
import Spinner from '../../components/spinner/spinner';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {store} from '../../store';
import {fetchFavoritesAction} from '../../store/api-actions';
import {groupByCityOffers} from '../../utils/groupByCityOffers';

function FavoritesPage(): JSX.Element {
  const favoriteCards = useAppSelector(getFavorites);
  const favoritesIsLoading = useAppSelector(getFavoritesIsLoading);
  const favoritesIsNotFound = useAppSelector(getFavoritesIsNotFound);

  const groupedFavorites =
  favoriteCards.length > 0 ? groupByCityOffers(favoriteCards) : [];

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, []);

  return (
    <div className="page">
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesIsLoading && <Spinner />}
          {(favoritesIsNotFound || !favoriteCards.length) ? (
            <FavoritesEmpty />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {groupedFavorites.map(({city, list}) => (
                  <FavoritesCardList city={city} list={list} key={city} elementType='favorite' />
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
