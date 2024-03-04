
type LocationsListProps = {
  cities: string[];
}

function LocationsList({cities}: LocationsListProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const keyValue = city;
            return (
              <li key = {keyValue} className="locations__item">
                <a className={`locations__item-link tabs__item ${city === 'Amsterdam' ? 'tabs__item--active' : ''}`} href="#">
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
