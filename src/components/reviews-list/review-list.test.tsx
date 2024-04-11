import {render, screen} from '@testing-library/react';
import {makeFakeReviews} from '../../utils/fake-mock-by-test';
import {withStoreAndHistory} from '../../utils/mock-component';
import ReviewsList from './review-list';

describe('Component <ReviewsList />:', () => {
  it('should render correctly', () => {
    const fakeReviews = makeFakeReviews();
    const expectedCount = fakeReviews.length;
    const reviewsContainerTestId = 'reviews-container';
    const cardContainerTestId = 'review-container';
    const {withStoreComponent: wrappedOfferList} = withStoreAndHistory(
      <ReviewsList reviews={fakeReviews}/>
    );

    render(wrappedOfferList);
    const reviews = screen.getByTestId(reviewsContainerTestId);
    const cards = screen.getAllByTestId(cardContainerTestId);

    expect(reviews).toBeInTheDocument();
    expect(cards.at(0)).toBeInTheDocument();
    expect(cards.at(cards.length - 1)).toBeInTheDocument();
    expect(cards.length).toBe(expectedCount);
  });
});
