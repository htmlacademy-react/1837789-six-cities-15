import {createAction} from '@reduxjs/toolkit';
import {CityMap} from '../types/cityMap';

export const setCityActive = createAction('main/setCityActive', (value: string)=>({payload: value}));

export const getOffers = createAction('main/getOffers');

export const setChangeMap = createAction('map/setChangeMap', (value: CityMap)=>({payload: value}));
