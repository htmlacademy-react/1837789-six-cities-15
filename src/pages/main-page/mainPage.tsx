import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks/index';
import Nav from '../../components/nav/nav';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import GeneralCardList from '../../components/general-card-list/generalCardList';
import LocationsList from '../../components/locations-list/locationsList';

type MainPageProps = {
  citiesList: string[];
}

function MainPage({citiesList}: MainPageProps): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector((state) => state.cityActive);
  const offers = useAppSelector((state) => state.offers);
  const cityMapActive = useAppSelector((state) => state.city);

  const filteredOffersByCity = offers.filter(
    (offer) => offer.city.name === cityActive
  );

  const placesCount = filteredOffersByCity.length;

  return (
    <div className="page page--gray page--main">
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
        <LocationsList cities = {citiesList}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {cityActive}</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <GeneralCardList elementType={'cities'} offers = {filteredOffersByCity} setActivePlaceCard = {setCardHoverId}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map mapType={'cities'} offers={filteredOffersByCity} cardHoverId={cardHoverId} city={cityMapActive}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
