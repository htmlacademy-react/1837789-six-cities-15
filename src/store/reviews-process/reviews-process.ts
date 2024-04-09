import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsProcess} from '../../types/state';
import {fetchReviewsAction, submitReviewAction} from '../api-actions';
import {RequestStatus} from '../../const';

const initialState: ReviewsProcess = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: true,
  reviewRequestStatus: RequestStatus.Idle,
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    assignReviewRequestStatusByDefault: (state) => {
      state.reviewRequestStatus = RequestStatus.Idle;
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
        state.reviewRequestStatus = RequestStatus.Pending;
      })

      .addCase(submitReviewAction.fulfilled, (state, action) => {
        state.reviewRequestStatus = RequestStatus.Success;
        const newReview = action.payload;

        state.reviews.push(newReview);
      })

      .addCase(submitReviewAction.rejected, (state) => {
        state.reviewRequestStatus = RequestStatus.Error;
      });
  },
});

export const {assignReviewRequestStatusByDefault} = reviews.actions;

