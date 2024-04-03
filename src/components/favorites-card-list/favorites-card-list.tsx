import GeneralCard from '../general-card/general-card';
import {Card} from '../../types/card';
import {Offers} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks';
import {setCityActive, setChangeMap, setOffers} from '../../store/offers-process/offers-process';


type FavoritesCardListProps = {
  city: string;
  list: Offers;
  elementType: Card;
}

function FavoritesCardList({city, list, elementType}: FavoritesCardListProps) {

  const dispatch = useAppDispatch();

  function onCityButton (cityActive:string) {
    dispatch(setCityActive(cityActive));
    dispatch(setOffers());
    dispatch(setChangeMap());
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {city && (
            <Link className="locations__item-link" to={AppRoute.Main} onClick={() => onCityButton(city)}>
              <span>{city}</span>
            </Link>
          )}
        </div>
      </div>
      <div className="favorites__places">
        {!!list.length &&
          list.map((offer) => (
            <GeneralCard
              elementType={elementType}
              offer={offer}
              key={offer.id}
            />
          ))}
      </div>
    </li>
  );
}

export default FavoritesCardList;
