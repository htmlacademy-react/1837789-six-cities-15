import {useState} from 'react';
import {Offer} from '../../types/offer';
import {handleStars} from '../../const';

type CitiesCardProps = {
  offerCard: Offer;
  setCardHoverId(id: string | null): void;
}

function CitiesCard({offerCard, setCardHoverId}: CitiesCardProps): JSX.Element {
  const {title, price, type, isFavorite, id, isPremium, previewImage, rating} = offerCard;
  const [favorite, setFavorite] = useState(isFavorite);

  const handleMouseOver = () => {
    setCardHoverId(id);
  };

  const handleMouseOut = () => {
    setCardHoverId(null);
  };

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button onClick = {() => setFavorite(!favorite)}
            className={`place-card__bookmark-button ${favorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${handleStars(rating)}`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
