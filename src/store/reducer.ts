import {createReducer} from '@reduxjs/toolkit';
import {setCityActive,
  getOffers,
  setChangeMap,
  getSortType,
  setSorting,
  loadOffers,
  requireAuthorization,
  setOffersIsLoading,
  setError,
  setUser} from './action';
import {DEFAULT_CITY, defaultLocation, SortType, AuthorizationStatus} from '../const';
import {offersSorting} from '../utils/offersSorting';
import {Offers} from '../types/offer';
import {CityMap} from '../types/cityMap';
import {User} from '../types/user';

type InitalState = {
  cityActive: string;
  allOffers: Offers;
  offers: Offers;
  offersIsLoading: boolean;
  city: CityMap;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  error: string | null;
}

const initialState: InitalState = {
  cityActive: DEFAULT_CITY,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  city: defaultLocation,
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })

    .addCase(getOffers, (state) => {
      if (state.allOffers.length) {
        const offersByCity = state.allOffers.filter(
          (item) => item?.city?.name === state.cityActive
        );
        state.offers = offersSorting(state.sortType, offersByCity);
      }
    })

    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setChangeMap, (state, action) => {
      state.city = action.payload;
    })

    .addCase(setSorting, (state) => {
      state.offers = offersSorting(state.sortType, state.offers);
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setOffersIsLoading, (state, action) => {
      state.offersIsLoading = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
