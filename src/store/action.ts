import {createAction} from '@reduxjs/toolkit';
import {CityMap} from '../types/cityMap';
import { Sorting } from '../const';

export const setCityActive = createAction('main/CityActive', (value: string)=>({payload: value}));

export const getOffers = createAction('main/Offers');

export const setChangeMap = createAction('map/ChangeMap', (value: CityMap)=>({payload: value}));

export const getSortValue = createAction('main/SortValue', (value: Sorting)=>({payload: value}));
