import {createAction} from '@reduxjs/toolkit';
import {CityMap} from '../types/cityMap';
import {SortType, AuthorizationStatus, AppRoute, NameSpace} from '../const';
import {Offers} from '../types/offer';
import {User} from '../types/user';

export const setCityActive = createAction('main/CityActive', (value: string)=>({payload: value}));

export const getOffers = createAction('main/Offers');

export const setChangeMap = createAction('map/ChangeMap', (value: CityMap)=>({payload: value}));

export const getSortType = createAction('main/SortType', (value: SortType)=>({payload: value}));

export const setSorting = createAction('offers/setSorting');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('setError');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const setUser = createAction<User | null>(`${NameSpace.User}/setUser`);

