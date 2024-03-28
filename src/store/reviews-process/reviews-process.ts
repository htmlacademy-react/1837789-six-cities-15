import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsProcess} from '../../types/state';
import {fetchReviewsAction, submitReviewAction} from '../api-actions';

const initialState: ReviewsProcess = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: false,
  reviewsIsNotSubmit: false,
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setIsNotSubmit(state, action: PayloadAction<boolean>) {
      state.reviewsIsNotSubmit = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewsIsNotFound = false;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData.length > 0) {
          state.reviews = reviewsData;
        }

        state.reviewsIsLoading = false;
      })

      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewsIsNotFound = true;
      })

      .addCase(submitReviewAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewsIsNotFound = false;
      })

      .addCase(submitReviewAction.fulfilled, (state, action) => {
        const newReview = action.payload;

        state.reviews.push(newReview);
        state.reviewsIsLoading = false;
      })

      .addCase(submitReviewAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewsIsNotFound = true;
      });
  },
});

export const {setIsNotSubmit} = reviews.actions;
