import {reviews} from './reviews-process';
import {ReviewsProcess} from '../../types/state';
import {fetchReviewsAction} from '../api-actions';
import {makeFakeReviews} from '../../utils/fakeMockByTest';

const initialState: ReviewsProcess = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: true,
  reviewsIsNotSubmit: true,
};

let state: ReviewsProcess;

describe('Slice reviews-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: ReviewsProcess = { ...initialState };

    expect(reviews.reducer(initialState, emptyAction)).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: ReviewsProcess = { ...initialState };

    expect(reviews.reducer(undefined, emptyAction)).toEqual(expectedState);
  });

  describe('fetchReviewsAction test', () => {
    it('fetchReviewsAction fulfilled', () => {
      const fakeReviews = makeFakeReviews();
      const expectedState: ReviewsProcess = { ...initialState, reviews: fakeReviews };

      expect(
        reviews.reducer(state, {
          type: fetchReviewsAction.fulfilled.type,
          payload: fakeReviews,
        })
      ).toEqual(expectedState);
    });

    it('fetchReviewsAction rejected', () => {
      const expectedState: ReviewsProcess = { ...initialState, reviewsIsLoading: false, reviewsIsNotFound: true };
      const actualState: ReviewsProcess = { ...initialState, reviewsIsLoading: true, reviewsIsNotFound: false };

      expect(
        reviews.reducer(actualState, {
          type: fetchReviewsAction.rejected.type,
        })
      ).toEqual(expectedState);
    });
  });
});

