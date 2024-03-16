import {useParams, Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useState, useEffect} from 'react';
import {useAppSelector} from '../../hooks/index';
import Logo from '../../components/logo/logo';
import ReviewsList from '../../components/reviews-list/reviewsList';
import Map from '../../components/map/map.tsx';
import GeneralCardList from '../../components/general-card-list/generalCardList';
import Nav from '../../components/nav/nav';
import {fetchOfferAction, fetchReviewsAction, fetchNearPlacesAction} from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import { store } from '../../store';

const DEFAULT_BEGIN = 0;
const MAX_IMAGES_SHOW = 6;
const NEAR_PLACES_COUNT = 3;

function OfferPage(): JSX.Element {
  const cityMapActive = useAppSelector((state) => state.city);
  const params = useParams();
  const cardId = params.id;

  useEffect(() => {
    store.dispatch(fetchOfferAction(cardId));
    store.dispatch(fetchReviewsAction(cardId));
    store.dispatch(fetchNearPlacesAction(cardId));
  }, [cardId]);


  const offerActive = useAppSelector((state) => state.offer);
  const offerIsLoading = useAppSelector((state) => state.offerIsLoading);
  const reviewsActive = useAppSelector((state) => state.reviews);
  const offerIsNotFound = useAppSelector((state) => state.offerIsNotFound);
  const nearbyOffers = useAppSelector((state) => state.nearPlaces);
  const nearbyOffersIsLoading = useAppSelector((state) => state.nearPlacesIsLoading);


  const [nearbyCardHoverId, setNearbyCardHoverId] = useState<string | null>(null);

  function handleCardHover(nearOfferId: string | null) {
    setNearbyCardHoverId(nearOfferId);
  }

  const activeNearbyOffers = nearbyOffers.slice(DEFAULT_BEGIN, Math.min(NEAR_PLACES_COUNT, nearbyOffers.length));
  if(offerActive) {
    activeNearbyOffers.unshift(offerActive);
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <Nav/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        {offerIsLoading && <Spinner />}
        {offerIsNotFound && <Navigate to={AppRoute.NotFound} />}
        {offerActive && !offerIsNotFound && !offerIsLoading && (
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offerActive.images?.length > 0 &&
                offerActive.images.slice(DEFAULT_BEGIN, Math.min(MAX_IMAGES_SHOW, offerActive.images.length))
                  .map((url, id) => {
                    const keyValue = `${id}-${url}`;
                    return (
                      <div key={keyValue} className="offer__image-wrapper">
                        <img className="offer__image" src={url} alt="Photo studio" />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offerActive.isPremium ?
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                  : ''}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offerActive.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className={`offer__bookmark-icon ${offerActive.isFavorite ? 'offer__bookmark-button--active' : ''}`} width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: '80%' }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offerActive.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{offerActive.type}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offerActive.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offerActive.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{offerActive.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                {offerActive.goods && (
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">Whats inside</h2>
                    <ul className="offer__inside-list">
                      {offerActive.goods.map((good) => {
                        const keyValue = good;
                        return (<li key = {keyValue} className="offer__inside-item">{good}</li>);
                      })}
                    </ul>
                  </div>
                )}
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    {offerActive.host?.avatarUrl && (
                      <div className={`offer__avatar-wrapper ${offerActive.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                        <img
                          className="offer__avatar user__avatar"
                          src={offerActive.host.avatarUrl}
                          width={74}
                          height={74}
                          alt="Host avatar"
                        />
                      </div>
                    )}
                    {offerActive.host?.name && (
                      <span className="offer__user-name">{offerActive.host.name}</span>
                    )}
                    {offerActive.host?.isPro && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the
                      unique lightness of Amsterdam. The building is green and from
                      18th century.
                    </p>
                    <p className="offer__text">
                      An independent House, strategically located between Rembrand
                      Square and National Opera, but where the bustle of the city
                      comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                {reviewsActive && (<ReviewsList reviews = {reviewsActive} offerId = {cardId} />)}
              </div>
            </div>
            {activeNearbyOffers.length > 0 && (
              <Map mapType='offer' offers={activeNearbyOffers} cardHoverId={nearbyCardHoverId} city={cityMapActive}/>
            )}
          </section>
        )}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {!nearbyOffersIsLoading && (
                <GeneralCardList elementType={'offers'} offers = {activeNearbyOffers} setActivePlaceCard = {handleCardHover}/>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
