import {makeFakeReviews} from '../../utils/fakeMockByTest';
import { NameSpace} from '../../const';
import {ReviewsProcess} from '../../types/state';
import {getReviews, getReviewsIsLoading, getReviewsIsNotFound,
  getReviewsIsNotSubmit, getReviewsIsClickSubmit} from './selectors';


const fakeReview = makeFakeReviews();

const fakeState: ReviewsProcess = {
  reviews: fakeReview,
  reviewsIsLoading: false,
  reviewsIsNotFound: false,
  reviewsIsNotSubmit: false,
  isClickSubmit: false,
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

  describe('selector: getReviewsIsNotSubmit', () => {
    it('should return true or false reviewsIsNotSubmit. status in the state', () => {
      const result = getReviewsIsNotSubmit(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getReviewsIsClickSubmit', () => {
    it('should return true or false isClickSubmit. status in the state', () => {
      const result = getReviewsIsClickSubmit(state);

      expect(result).toEqual(false);
    });
  });
});
