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
  setUser,
  loadOffer,
  setOfferIsLoading,
  addReviews,
  setOfferIsNotFound,
  loadNearPlaces,
  setNearPlacesIsLoading,
  setNearPlacesIsNotFound} from './action';
import {DEFAULT_CITY, defaultLocation, SortType, AuthorizationStatus} from '../const';
import {offersSorting} from '../utils/offersSorting';
import {Offers, Offer} from '../types/offer';
import {CityMap} from '../types/cityMap';
import {UserConnect} from '../types/user';
import {Reviews} from '../types/review';

type InitalState = {
  cityActive: string;
  allOffers: Offers;
  offers: Offers;
  offer: Offer | null;
  offersIsLoading: boolean;
  offerIsLoading: boolean;
  offerIsNotFound: boolean;
  nearPlaces: Offers;
  nearPlacesIsLoading: boolean;
  nearPlacesIsNotFound: boolean;
  city: CityMap;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  user: UserConnect | null;
  reviews: Reviews;
  error: string | null;

}

const initialState: InitalState = {
  cityActive: DEFAULT_CITY,
  allOffers: [],
  offers: [],
  offer: null,
  offersIsLoading: false,
  offerIsLoading: false,
  offerIsNotFound: false,
  nearPlaces: [],
  nearPlacesIsLoading: false,
  nearPlacesIsNotFound: false,
  city: defaultLocation,
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  reviews: [],
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
      state.allOffers = action.payload;
    })

    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setOffersIsLoading, (state, action) => {
      state.offersIsLoading = action.payload;
    })

    .addCase(setOfferIsLoading, (state, action) => {
      state.offerIsLoading = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })

    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })

    .addCase(addReviews, (state, action) => {
      state.reviews = action.payload;
    })

    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })

    .addCase(setOfferIsNotFound, (state, action) => {
      state.offerIsNotFound = action.payload;
    })

    .addCase(setNearPlacesIsLoading, (state, action) => {
      state.nearPlacesIsLoading = action.payload;
    })

    .addCase(setNearPlacesIsNotFound, (state, action) => {
      state.nearPlacesIsNotFound = action.payload;
    });
});

export {reducer};
