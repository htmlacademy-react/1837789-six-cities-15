import {createAction} from '@reduxjs/toolkit';

export const setCityActive = createAction('main/setCityActive', (value: string)=>({payload: value}));
export const getOffers = createAction('main/getOffers');
