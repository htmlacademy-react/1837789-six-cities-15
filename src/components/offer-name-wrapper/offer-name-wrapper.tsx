import {useFavorites} from '../../hooks/useFavorites';
import {Offer} from '../../types/offer';

type OfferNameWrapperProps = {
  cardId: string | undefined;
  offerActive: Offer | null;
}

function OfferNameWrapper({cardId, offerActive}: OfferNameWrapperProps): JSX.Element {
  const currentStatus = offerActive && offerActive.isFavorite ? 0 : 1;
  const onChangeFavorites = useFavorites(
    String(cardId),
    currentStatus,
  );

  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {offerActive?.title}
      </h1>
      <button onClick={onChangeFavorites} className={`offer__bookmark-button button ${offerActive?.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button" >
        <svg className="offer__bookmark-icon" width={31} height={33}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default OfferNameWrapper;
