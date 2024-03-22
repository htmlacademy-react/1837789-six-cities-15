import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {cityMap} from '../../const';
import {getCityActive} from '../../store/offers-process/selectors';
import {setCityActive, setOffers, setChangeMap} from '../../store/offers-process/offers-process';


type LocationsListProps = {
  cities: string[];
}

function LocationsList({cities}: LocationsListProps): JSX.Element {
  const cityActive = useAppSelector(getCityActive);
  const dispatch = useAppDispatch();

  function changeCity (city: string) {
    const [cityMapActive] = cityMap.filter((item) => item.title === city);

    dispatch(setCityActive(city));
    dispatch(setOffers());
    dispatch(setChangeMap(cityMapActive));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const keyValue = city;
            return (
              <li key = {keyValue} className="locations__item">
                <a className={`locations__item-link tabs__item ${city === cityActive ? 'tabs__item--active' : ''}`}
                  onClick={()=>changeCity(city)} href="#"
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
