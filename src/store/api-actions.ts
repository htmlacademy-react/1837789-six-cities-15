import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offers, Offer} from '../types/offer';
import {Reviews, Review} from '../types/review';
import {CommentData} from '../types/comments';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {ApiRoute, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserConnect} from '../types/user';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('fetchOffers',async (_arg, {extra: api}) => {
  const {data} = await api.get<Offers>(ApiRoute.Offers);

  return data;
});

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('checkAuth', async (_arg, {extra: api}) => await api.get(ApiRoute.Login));

export const loginAction = createAsyncThunk<UserConnect, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
('login', async ({login: email, password}, {dispatch, extra: api}) => {
  const {data} = await api.post<UserConnect>(ApiRoute.Login, {email, password});
  const {token} = data;
  saveToken(token);
  dispatch(redirectToRoute(AppRoute.Main));

  return data;
});

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('logout', async (_arg, {extra: api}) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
});

export const fetchOfferAction = createAsyncThunk<
  Offer,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}
>('fetchOffer', async (_arg, {extra: api}) => {
  const id = _arg;

  const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Reviews,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'fetchReviews', async (_arg, {extra: api}) => {
    const id = _arg;
    const {data} = await api.get<Reviews>(`${ApiRoute.Comments}/${id}`);

    return data;
  });

export const fetchOffersNearbyAction = createAsyncThunk<
  Offers,
  number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >('fetchOffersNearby', async (_arg, { extra: api}) => {
    const id = _arg;

    const {data} = await api.get<Offers>(`${ApiRoute.Offers}/${id}/nearby`);

    return data;
  });

export const submitReviewAction = createAsyncThunk<
    Review,
    CommentData,
    {
      dispatch: AppDispatch;
      state: State;
      extra: AxiosInstance;
    }
  >('submitComment', async ({id, comment, rating}, {extra: api}) => {
    const { data } = await api.post<Review>(`${ApiRoute.Comments}/${id}`, {
      comment: comment,
      rating: rating,
    });

    return data;
  }
  );


