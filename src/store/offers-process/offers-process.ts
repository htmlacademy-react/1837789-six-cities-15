import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, DEFAULT_SORT} from '../../const';
import {OffersProcess} from '../../types/state';
import {fetchOffersAction} from '../api-actions';
import {offersSorting} from '../../utils/offersSorting';
import {SortType, DEFAULT_LOCATION} from '../../const';
import {Offers, Offer} from '../../types/offer';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  city: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  offersIsNotFound: false,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffers(state) {
      if (state.allOffers.length) {
        const offersByCity = state.allOffers.filter(
          (item) => item?.city?.name === state.cityActive
        );
        state.offers = offersSorting(state.sortType, offersByCity);
      }
    },

    setFavoriteOffers(state, action: PayloadAction<Offer>) {
      const offerFavorite = action.payload;

      state.offers = state.offers.map((item: Offer) =>
        item.id === offerFavorite.id ? offerFavorite : item
      );
    },

    setCityActive(state, action: PayloadAction<string>) {
      state.cityActive = action.payload;
    },

    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },

    setChangeMap(state) {
      const cityMapActive = state.offers[0]?.city;
      if(cityMapActive) {
        state.city = cityMapActive;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersIsLoading = true;
        state.offersIsNotFound = false;
      })

      .addCase(
        fetchOffersAction.fulfilled,
        (state, action: PayloadAction<Offers>) => {
          state.allOffers = action.payload;
          state.offersIsLoading = false;

          offers.caseReducers.setOffers(state);
        }
      )

      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersIsLoading = false;
        state.offersIsNotFound = true;
      });
  },
});

export const {setOffers, setCityActive, setSortType, setChangeMap, setFavoriteOffers} = offers.actions;

