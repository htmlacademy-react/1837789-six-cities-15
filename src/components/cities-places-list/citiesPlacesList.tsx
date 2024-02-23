import CitiesCard from '../../components/cities-card/citiesCard';
import {Offers} from '../../types/offer';

type CitiesPlacesListProps = {
  offerList: Offers;
  setCardHoverId(id: string | null): void;
}

function CitiesPlacesList({offerList, setCardHoverId}: CitiesPlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerList.map((offer) => {
        const keyValue = offer.id;
        return (
          <CitiesCard key={keyValue} offerCard = {offer} setCardHoverId = {setCardHoverId} />
        );
      })}
    </div>
  );
}

export default CitiesPlacesList;
