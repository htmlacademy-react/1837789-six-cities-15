import GeneralCard from '../general-card/generalCard';

import {Offers} from '../../types/offer';


type GeneralCardListProps = {
  elementType: 'cities' | 'favorite' | 'offers';
  offers: Offers;
  onCardHover?: (id: string | null) => void;
}

function GeneralCardList({ elementType, onCardHover, offers }: GeneralCardListProps) {
  return (
    <>
      {
        offers.map((offer) => (
          <GeneralCard
            elementType={elementType}
            offer={offer}
            key={offer.id}
            onCardHover={onCardHover}
          />
        ))
      }
    </>
  );
}

export default GeneralCardList;
