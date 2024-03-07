import {createReducer} from '@reduxjs/toolkit';
import {setCityActive} from './action';
import {offers} from '../mocks/offers';
import {getOffers} from './action';
import {DEFAULT_CITY} from '../const';

const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })

    .addCase(getOffers, (state) => {
      state.offers = offers.filter(
        (item) => item?.city?.name === state.cityActive
      );
    });
});

export {reducer};
