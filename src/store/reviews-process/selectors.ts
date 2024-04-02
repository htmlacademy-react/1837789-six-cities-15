import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Reviews} from '../../types/review';

export const getReviews = (state: Pick<State, NameSpace.Reviews>): Reviews =>
  state[NameSpace.Reviews].reviews;

export const getReviewsIsLoading = (state: Pick<State, NameSpace.Reviews>): boolean =>
  state[NameSpace.Reviews].reviewsIsLoading;

export const getReviewsIsNotFound = (state: Pick<State, NameSpace.Reviews>): boolean =>
  state[NameSpace.Reviews].reviewsIsNotFound;


