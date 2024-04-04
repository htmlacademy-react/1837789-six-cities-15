import {makeFakeReviews} from '../../utils/fake-mock-by-test';
import { NameSpace} from '../../const';
import {ReviewsProcess} from '../../types/state';
import {getReviews, getReviewsIsLoading, getReviewsIsNotFound} from './selectors';
import {RequestStatus} from '../../const';


const fakeReview = makeFakeReviews();

const fakeState: ReviewsProcess = {
  reviews: fakeReview,
  reviewsIsLoading: false,
  reviewsIsNotFound: false,
  reviewRequestStatus: RequestStatus.Idle,
};

let state = { [NameSpace.Reviews]: fakeState };

describe('Reducer: reviews selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.Reviews]: { ...fakeState } };
  });

  describe('selector: getReviews', () => {
    it('should return "reviews" from state', () => {
      const result = getReviews(state);

      expect(result).toEqual(fakeReview);
    });
  });

  describe('selector: getReviewsIsLoading', () => {
    it('should return true or false reviewsIsLoading. status in the state', () => {
      const result = getReviewsIsLoading(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getReviewsIsNotFound', () => {
    it('should return true or false reviewsIsNotFound. status in the state', () => {
      const result = getReviewsIsNotFound(state);

      expect(result).toEqual(false);
    });
  });

});
