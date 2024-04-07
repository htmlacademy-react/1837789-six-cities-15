import FavoritesCardList from '../favorites-card-list/favorites-card-list';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {
  getFavorites,
  getFavoritesLength
} from '../../store/favorites-process/selectors';
import {groupByCityOffers} from '../../utils/group-by-city-offers';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavoritesAction} from '../../store/api-actions';

function Favorites(): JSX.Element {
  const favoriteCards = useAppSelector(getFavorites);
  const favoritesLength = useAppSelector(getFavoritesLength);
  const groupedFavorites =
  favoritesLength ? groupByCityOffers(favoriteCards) : [];
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {groupedFavorites.map(({city, list}) => (
              <FavoritesCardList city={city} list={list} key={city} elementType='favorite' />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
