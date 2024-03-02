import {Offer} from '../../types/offer';
import {handleStars} from '../../const';
import {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type NearPlacesCardProps = {
  nearbyOffer: Offer;
  onCardHover?: (id: string | null) => void;
}

function NearPlacesCard({nearbyOffer, onCardHover}: NearPlacesCardProps): JSX.Element {
  const {title, price, type, isFavorite, id, isPremium, previewImage, rating} = nearbyOffer;
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);

  const handleMouseOver = () => {
    onCardHover?.(id);
  };

  const handleMouseOut = () => {
    onCardHover?.(null);
  };

  return (
    <article className="near-places__card place-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to = {id}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button onClick = {() => setIsFavoriteCard(!isFavoriteCard)}
            className={`place-card__bookmark-button ${isFavoriteCard ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${handleStars(rating)}`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {id}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default NearPlacesCard;
