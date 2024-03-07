import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {setCityActive, getOffers} from '../../store/action';


type LocationsListProps = {
  cities: string[];
}

function LocationsList({cities}: LocationsListProps): JSX.Element {
  const cityActive = useAppSelector((state) => state.cityActive);
  const dispatch = useAppDispatch();

  function changeCity (city:string) {
    dispatch(setCityActive(city));
    dispatch(getOffers());
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
