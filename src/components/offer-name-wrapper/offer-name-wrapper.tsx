import {useFavorites} from '../../hooks/use-favorites';
import {Offer} from '../../types/offer';
import classNames from 'classnames';

type OfferNameWrapperProps = {
  cardId: string | undefined;
  offerActive: Offer | null;
}

function OfferNameWrapper({cardId, offerActive}: OfferNameWrapperProps): JSX.Element {
  const currentStatus = offerActive && offerActive.isFavorite ? 0 : 1;
  const handleChangeFavorites = useFavorites(
    String(cardId),
    currentStatus,
  );

  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name" data-testid="offer-title">
        {offerActive?.title}
      </h1>
      <button onClick={handleChangeFavorites}
        className={classNames('offer__bookmark-button button', {'offer__bookmark-button--active' : offerActive?.isFavorite})}
        type="button"
      >
        <svg className="offer__bookmark-icon" width={31} height={33}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default OfferNameWrapper;
