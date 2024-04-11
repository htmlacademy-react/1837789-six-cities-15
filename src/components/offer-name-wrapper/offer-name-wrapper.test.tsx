import {render, screen} from '@testing-library/react';
import OfferNameWrapper from './offer-name-wrapper';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore, makeFakeOffer} from '../../utils/fake-mock-by-test';

describe('Component <UserPanel />', () => {
  const fakeOffer = makeFakeOffer();
  fakeOffer.title = 'Amazing and Extremely Central Flat';
  const navWithHistory = withHistory(<OfferNameWrapper cardId={'1'} offerActive = {fakeOffer} />);

  it('should render correctly when the user is not authorized', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      navWithHistory,
      initialState
    );
    const expectedText = 'Amazing and Extremely Central Flat';

    render(withStoreComponent);
    const sighInText = screen.getByText(expectedText);

    expect(sighInText).toBeInTheDocument();
  });
});

