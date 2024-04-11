import {render, screen} from '@testing-library/react';
import {makeFakeOffers} from '../../utils/fake-mock-by-test';
import {withStoreAndHistory} from '../../utils/mock-component';
import FavoritesCardList from './favorites-card-list';

describe('Component <FavoritesCardList />:', () => {
  it('should render correctly', () => {
    const fakeOffersPreview = makeFakeOffers();
    const expectedCount = fakeOffersPreview.length;
    const cardContainerTestId = 'card-container';
    const {withStoreComponent: wrappedOfferList} = withStoreAndHistory(
      <FavoritesCardList
        city={'Paris'}
        list={fakeOffersPreview}
        elementType={'cities'}
      />
    );

    render(wrappedOfferList);
    const cards = screen.getAllByTestId(cardContainerTestId);

    expect(cards.at(0)).toBeInTheDocument();
    expect(cards.at(cards.length - 1)).toBeInTheDocument();
    expect(cards.length).toBe(expectedCount);
  });
});
