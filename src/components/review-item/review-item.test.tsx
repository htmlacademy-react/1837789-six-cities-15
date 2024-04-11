import {render} from '@testing-library/react';
import ReviewItem from './review-item';
import {makeFakeReview} from '../../utils/fake-mock-by-test';
import {withStoreAndHistory} from '../../utils/mock-component';

describe('Component: <ReviewItem />', () => {
  it('should render correctly', () => {
    const fakeReview = makeFakeReview();
    const EXPECTED_REVIEW_TEST_ID = {
      CONTAINER: 'review-container',
      IMG: 'review-avatar-image',
      RATING: 'starline-container',
      TEXT: 'review-text',
    };
    const {withStoreComponent: wrappedCard} = withStoreAndHistory(
      <ReviewItem reviewItem={fakeReview}/>
    );

    const {getByTestId} = render(wrappedCard);

    const RESULT_LIST = {
      CONTAINER: getByTestId(EXPECTED_REVIEW_TEST_ID.CONTAINER),
      IMG: getByTestId(EXPECTED_REVIEW_TEST_ID.IMG),
      RATING: getByTestId(EXPECTED_REVIEW_TEST_ID.RATING),
      TEXT: getByTestId(EXPECTED_REVIEW_TEST_ID.TEXT),
    };

    expect(RESULT_LIST.CONTAINER).toBeInTheDocument();
    expect(RESULT_LIST.IMG).toBeInTheDocument();
    expect(RESULT_LIST.RATING).toBeInTheDocument();
    expect(RESULT_LIST.TEXT).toBeInTheDocument();
  });
});
