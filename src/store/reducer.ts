import {createReducer} from '@reduxjs/toolkit';
import {setCityActive} from './action';
import {offers} from '../mocks/offers';
import {getOffers} from './action';
import {DEFAULT_CITY} from '../const';
//import {InitState} from '../types/initState';


const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state) => {
      state.cityActive = DEFAULT_CITY;
    })

    .addCase(getOffers, (state) => {
      state.offers = offers.filter(
        (item) => item?.city?.name === state.cityActive
      );
    });
});

export {reducer};
