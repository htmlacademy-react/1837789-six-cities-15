import {createReducer} from '@reduxjs/toolkit';
import {setCityActive, getOffers, setChangeMap, getSortType, setSorting} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY, defaultLocation, SortType} from '../const';
import {offersSorting} from '../utils/offersSorting';

const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
  city: defaultLocation,
  sortType: SortType.Popular
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
    })

    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setChangeMap, (state, action) => {
      state.city = action.payload;
    })

    .addCase(setSorting, (state) => {
      state.offers = offersSorting(state.sortType, state.offers);
    });
});

export {reducer};
