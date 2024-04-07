import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {CITIES_LIST, AppRoute} from '../../const';
import {setCityActive} from '../../store/offers-process/offers-process';
import {Link} from 'react-router-dom';
import {getCityActive} from '../../store/offers-process/selectors';
import classNames from 'classnames';


function LocationsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const cityActive = useAppSelector(getCityActive);

  function handlChangeCity (city: string) {
    dispatch(setCityActive(city));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_LIST.map((city) => {
            const keyValue = city;
            return (
              <li key = {keyValue} className="locations__item">
                <Link className={classNames('locations__item-link', 'tabs__item',
                  {'tabs__item--active': city === cityActive})}
                onClick={() => handlChangeCity(city)} to={AppRoute.Main}
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
