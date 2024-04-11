
import {render, screen} from '@testing-library/react';
import Map from './map';
import {makeFakeOffer, makeFakeCity} from '../../utils/fake-mock-by-test';
import {withHistory} from '../../utils/mock-component';

describe('Component <Map />:', () => {
  it('should render correct', () => {
    const city = makeFakeCity();
    const fakeOfferOne = makeFakeOffer();
    const fakeOfferTwo = makeFakeOffer();
    const fakeOffers = [fakeOfferOne, fakeOfferTwo];
    const mapContainerId = 'map-section';
    const component = withHistory(
      <Map mapType={'cities'} offers={fakeOffers} city={city} />
    );

    render(component);
    const mapContainer = screen.getByTestId(mapContainerId);

    expect(mapContainer).toBeInTheDocument();
  });
});
