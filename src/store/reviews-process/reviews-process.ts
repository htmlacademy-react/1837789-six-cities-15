import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsProcess} from '../../types/state';
import {fetchReviewsAction, submitReviewAction} from '../api-actions';
import {reviewsSorting} from '../../utils/offersSorting';

const initialState: ReviewsProcess = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: true,
  reviewsIsNotSubmit: true,
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewsIsNotFound = false;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData.length > 0) {
          state.reviews = reviewsSorting(reviewsData);
        }

        state.reviewsIsLoading = false;
      })

      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewsIsNotFound = true;
      })

      .addCase(submitReviewAction.pending, (state) => {
        state.reviewsIsNotSubmit = true;
      })

      .addCase(submitReviewAction.fulfilled, (state, action) => {
        const newReview = action.payload;

        state.reviews.push(newReview);
        state.reviews = reviewsSorting(state.reviews);
        state.reviewsIsNotSubmit = false;
      })

      .addCase(submitReviewAction.rejected, (state) => {
        state.reviewsIsNotSubmit = true;
      });
  },
});

