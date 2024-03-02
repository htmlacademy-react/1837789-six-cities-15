import NearPlacesCard from '../../components/near-places-card/near-places-card';
import {Offers} from '../../types/offer';

type NearPlacesListProps = {
  nearbyOffers: Offers;
  hoveredOfferId:(id: string | null) => void;
}

function NearPlacesList({nearbyOffers, hoveredOfferId}: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((offer) => {
        const keyValue = offer.id;
        return (
          <NearPlacesCard key={keyValue} nearbyOffer = {offer} onCardHover={hoveredOfferId}/>
        );
      })}
    </div>
  );
}

export default NearPlacesList;
