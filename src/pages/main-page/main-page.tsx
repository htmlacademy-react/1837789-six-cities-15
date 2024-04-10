import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks/index';
import Nav from '../../components/nav/nav';
import MainEmpty from '../../components/main-empty/main-empty';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import GeneralCardList from '../../components/general-card-list/general-card-list';
import LocationsList from '../../components/locations-list/locations-list';
import {getCityActive, getOffersIsLoading, getOffersIsNotFound, getOffersByCityAndSort} from '../../store/offers-process/selectors';
import Spinner from '../../components/spinner/spinner';
import classNames from 'classnames';

function MainPage(): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector(getCityActive);
  const offers = useAppSelector(getOffersByCityAndSort);
  const cityMapActive = offers[0]?.city;
  const placesCount = offers.length;
  const offersIsLoading = useAppSelector(getOffersIsLoading);
  const offersIsNotFound = useAppSelector(getOffersIsNotFound);
  const isEmpty = offersIsNotFound || !placesCount;

  return (
    <div className={classNames('page', 'page--gray', 'page--main', {'page__main--index-empty' : isEmpty})}>
      <Helmet>
        <title>Main</title>
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        {offersIsLoading && <Spinner />}
        {offersIsNotFound && <Navigate to={AppRoute.NotFound} />}
        {!offersIsLoading && (
          <div className="cities">
            {placesCount ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesCount} {placesCount === 1 ? 'place' : 'places'} to stay in {cityActive}</b>
                  <Sort />
                  <GeneralCardList elementType='cities' offers = {offers} setActivePlaceCard = {setCardHoverId}/>
                </section>
                <div className="cities__right-section">
                  {cityMapActive && (<Map mapType='cities' offers={offers} cardHoverId={cardHoverId} city={cityMapActive}/>)}
                </div>
              </div>
            ) : (
              <MainEmpty cityActive = {cityActive} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
