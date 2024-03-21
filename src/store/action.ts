import {createAction} from '@reduxjs/toolkit';
import {CityMap} from '../types/cityMap';
import {SortType, AuthorizationStatus, AppRoute} from '../const';
import {Offers, Offer} from '../types/offer';
import {UserConnect} from '../types/user';
import {Reviews} from '../types/review';

export const setCityActive = createAction('main/CityActive', (value: string)=>({payload: value}));

export const getOffers = createAction('main/Offers');

export const setChangeMap = createAction('map/ChangeMap', (value: CityMap)=>({payload: value}));

export const getSortType = createAction('main/SortType', (value: SortType)=>({payload: value}));

export const setSorting = createAction('offers/setSorting');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadOffer = createAction<Offer | null>('data/loadOffer');

export const setOfferIsNotFound = createAction<boolean>('setOfferIsNotFound');

export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');

export const setOfferIsLoading = createAction<boolean>('setOfferIsLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('setError');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const setUser = createAction<UserConnect | null>('USER/setUser');

export const addReviews = createAction<Reviews>('data/addReviews');

export const loadNearPlaces = createAction<Offers>('data/loadNearPlaces');

export const setNearPlacesIsNotFound = createAction<boolean>('setNearPlacesNotFound');

export const setNearPlacesIsLoading = createAction<boolean>('setloadNearIsLoading');

