import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {citiesList, AppRoute} from '../../const';
import {getCityActive} from '../../store/offers-process/selectors';
import {setCityActive, setOffers, setChangeMap} from '../../store/offers-process/offers-process';
import {Link} from 'react-router-dom';

function LocationsList(): JSX.Element {
  const cityActive = useAppSelector(getCityActive);
  const dispatch = useAppDispatch();

  function changeCity (city: string) {

    dispatch(setCityActive(city));
    dispatch(setOffers());
    dispatch(setChangeMap());
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((city) => {
            const keyValue = city;
            return (
              <li key = {keyValue} className="locations__item">
                <Link className={`locations__item-link tabs__item ${city === cityActive ? 'tabs__item--active' : ''}`}
                  onClick={() => changeCity(city)} to={AppRoute.Main}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
