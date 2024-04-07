import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, DEFAULT_SORT, SortType} from '../../const';
import {OffersProcess} from '../../types/state';
import {fetchOffersAction} from '../api-actions';
import {Offers, Offer} from '../../types/offer';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  sortType: DEFAULT_SORT,
  offers: [],
  offersIsLoading: false,
  offersIsNotFound: false,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
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
          state.offers = action.payload;
          state.offersIsLoading = false;
        }
      )

      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersIsLoading = false;
        state.offersIsNotFound = true;
      });
  },
});

export const {setCityActive, setSortType, setFavoriteOffers} = offers.actions;

