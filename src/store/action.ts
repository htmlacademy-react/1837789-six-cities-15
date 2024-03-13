import {createAction} from '@reduxjs/toolkit';
import {CityMap} from '../types/cityMap';
import {SortType} from '../const';
import {Offers} from '../types/offer';

export const setCityActive = createAction('main/CityActive', (value: string)=>({payload: value}));

export const getOffers = createAction('main/Offers');

export const setChangeMap = createAction('map/ChangeMap', (value: CityMap)=>({payload: value}));

export const getSortType = createAction('main/SortType', (value: SortType)=>({payload: value}));

export const setSorting = createAction('setSorting');

export const loadOffers = createAction<Offers>('data/loadOffers');
