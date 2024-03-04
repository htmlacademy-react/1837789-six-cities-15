import {useState} from 'react';
import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import {Offers} from '../../types/offer';
import Map from '../../components/map/map';
import {city} from '../../mocks/city';
import GeneralCardList from '../../components/general-card-list/generalCardList';
import LocationsList from '../../components/locations-list/locationsList';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
  citiesList: string[];
}

function MainPage({placesCount, offers, citiesList}: MainPageProps): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);

  return (
    <div className="page page--gray page--main">
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
        <LocationsList cities = {citiesList} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <GeneralCardList elementType={'cities'} offers = {offers} onCardHover = {setCardHoverId}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map mapType={'cities'} offers={offers} cardHoverId={cardHoverId} city={city}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
