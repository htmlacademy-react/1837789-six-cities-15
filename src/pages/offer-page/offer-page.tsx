import {useParams, Navigate} from 'react-router-dom';
import {AppRoute, handleStars} from '../../const.ts';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import Logo from '../../components/logo/logo.tsx';
import ReviewsList from '../../components/reviews-list/review-list.tsx';
import Map from '../../components/map/map.tsx';
import GeneralCardList from '../../components/general-card-list/general-card-list.tsx';
import Nav from '../../components/nav/nav.tsx';
import {fetchOfferAction, fetchReviewsAction, fetchOffersNearbyAction} from '../../store/api-actions.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import {getOffer, getOfferIsLoading, getOfferIsNotFound} from '../../store/offer-process/selectors.ts';
import {getOffersNearby, getOffersNearbyIsLoading} from '../../store/offers-nearby-process/selectors.ts';
import OfferNameWrapper from '../../components/offer-name-wrapper/offer-name-wrapper.tsx';
import classNames from 'classnames';

const DEFAULT_BEGIN = 0;
const MAX_IMAGES_SHOW = 6;
const NEAR_PLACES_COUNT = 3;

function OfferPage(): JSX.Element {
  const params = useParams();
  const cardId = params.id;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(cardId));
    dispatch(fetchReviewsAction(cardId));
    dispatch(fetchOffersNearbyAction(cardId));
  }, [cardId, dispatch]);


  const offerActive = useAppSelector(getOffer);
  const cityMapActive = offerActive?.city;
  const offerIsLoading = useAppSelector(getOfferIsLoading);
  const offerIsNotFound = useAppSelector(getOfferIsNotFound);
  const nearbyOffers = useAppSelector(getOffersNearby);
  const nearbyOffersIsLoading = useAppSelector(getOffersNearbyIsLoading);

  const activeNearbyOffers = nearbyOffers.slice(DEFAULT_BEGIN, Math.min(NEAR_PLACES_COUNT, nearbyOffers.length));
  const generalOffers = [...activeNearbyOffers];
  if(offerActive) {
    generalOffers.unshift(offerActive);
  }

  if(offerIsLoading) {
    return (<Spinner />);
  }

  if(offerIsNotFound) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return (
    <div className="page">
      <Helmet>
        <title>Offer</title>
      </Helmet>
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
                <OfferNameWrapper cardId = {cardId} offerActive = {offerActive} />
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${handleStars(offerActive.rating)}`}} />
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
                    <div className={classNames('offer__avatar-wrapper', 'user__avatar-wrapper', {'offer__avatar-wrapper--pro' : offerActive.host.isPro})}>
                      <img
                        className="offer__avatar user__avatar"
                        src={offerActive.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    {offerActive.host?.name && (
                      <span className="offer__user-name">{offerActive.host.name}</span>
                    )}
                    {offerActive.host?.isPro && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {offerActive.description}
                    </p>
                  </div>
                </div>
                <ReviewsList offerId = {cardId} />
              </div>
            </div>
            {cityMapActive && (<Map mapType='offer' offers={generalOffers} city={cityMapActive}/>)}
          </section>
        )}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            {!nearbyOffersIsLoading && (
              <GeneralCardList elementType='offers' offers = {activeNearbyOffers}/>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
