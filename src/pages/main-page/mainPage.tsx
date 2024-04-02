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
import GeneralCardList from '../../components/general-card-list/generalCardList';
import LocationsList from '../../components/locations-list/locationsList';
import {getCityActive, getCity, getOffers, getOffersIsLoading, getOffersIsNotFound} from '../../store/offers-process/selectors';
import Spinner from '../../components/spinner/spinner';

function MainPage(): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector(getCityActive);
  const offers = useAppSelector(getOffers);
  const cityMapActive = useAppSelector(getCity);
  const placesCount = offers.length;
  const offersIsLoading = useAppSelector(getOffersIsLoading);
  const offersIsNotFound = useAppSelector(getOffersIsNotFound);
  const isEmpty = offersIsNotFound || !placesCount;

  return (
    <div className={`page page--gray page--main ${isEmpty ? 'page__main--index-empty' : ''}`}>
      {offersIsLoading && <Spinner />}
      {offersIsNotFound && <Navigate to={AppRoute.NotFound} />}
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
        <LocationsList cityActive = {cityActive} />
        {!offersIsLoading && (
          <div className="cities">
            {placesCount ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesCount} {placesCount === 1 ? 'place' : 'places'} to stay in {cityActive}</b>
                  <Sort />
                  <div className="cities__places-list places__list tabs__content">
                    <GeneralCardList elementType='cities' offers = {offers} setActivePlaceCard = {setCardHoverId}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map mapType='cities' offers={offers} cardHoverId={cardHoverId} city={cityMapActive}/>
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
