import GeneralCard from '../general-card/generalCard';
import {Card} from '../../types/card';
import {Offers} from '../../types/offer';


type GeneralCardListProps = {
  elementType: Card;
  offers: Offers;
  setActivePlaceCard?: (id: string | null) => void;
}

function GeneralCardList({ elementType, setActivePlaceCard, offers }: GeneralCardListProps) {
  return (
    <>
      {
        offers.map((offer) => (
          <GeneralCard
            elementType={elementType}
            offer={offer}
            key={offer.id}
            setActivePlaceCard={setActivePlaceCard}
          />
        ))
      }
    </>
  );
}

export default GeneralCardList;
