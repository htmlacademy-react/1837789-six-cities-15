
import {render, screen} from '@testing-library/react';
import Map from './map';
import {makeFakeOffer, makeFakeCity} from '../../utils/fakeMockByTest';
import {withHistory} from '../../utils/mock-component';

describe('Component <Map />:', () => {
  it('should render correct', () => {
    const fakeOfferPreviewOne = makeFakeOffer();
    const fakeOfferPreviewTwo = makeFakeOffer();
    const fakeOffers = [fakeOfferPreviewOne, fakeOfferPreviewTwo];
    const cityMapActive = makeFakeCity();
    const mapContainerId = 'map-section';
    const component = withHistory(
      <Map mapType='offer' offers={fakeOffers} city={cityMapActive} />
    );

    render(component);
    const mapContainer = screen.getByTestId(mapContainerId);

    expect(mapContainer).toBeInTheDocument();
  });
});
