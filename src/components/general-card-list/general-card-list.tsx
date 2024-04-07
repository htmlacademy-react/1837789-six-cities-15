import GeneralCard from '../general-card/general-card';
import {Card} from '../../types/card';
import {Offers} from '../../types/offer';
import {memo, useMemo} from 'react';


type GeneralCardListProps = {
  elementType: Card;
  offers: Offers;
  setActivePlaceCard?: (id: string | null) => void;
}

function GeneralCardList({elementType, setActivePlaceCard, offers}: GeneralCardListProps): JSX.Element {
  const className = (type : Card)=>{
    switch(type){
      case 'cities':
        return 'cities__places-list places__list tabs__content';
      case 'offers':
        return 'near-places__list places__list';
    }
  };

  const cards = useMemo(() => offers.map((offer) =>
    (<GeneralCard key={offer.id} offer={offer} setActivePlaceCard={setActivePlaceCard} elementType={elementType}/>)), [offers, setActivePlaceCard, elementType]);

  return (
    <div className={className(elementType)}>
      {cards}
    </div>
  );
}

const MemorizedGeneralCardList = memo(GeneralCardList);
export default MemorizedGeneralCardList;
