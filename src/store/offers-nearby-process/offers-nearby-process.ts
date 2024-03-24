import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersNearbyProcess} from '../../types/state';
import {fetchOffersNearbyAction} from '../api-actions';
import {Offer} from '../../types/offer';

const initialState: OffersNearbyProcess = {
  offersNearby: [],
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false,
};

export const offersNearby = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {
    setFavoriteNearby(state, action: PayloadAction<Offer>) {
      const nearbyFavorite = action.payload;

      state.offersNearby = state.offersNearby.map((item: Offer) =>
        item.id === nearbyFavorite.id ? nearbyFavorite : item
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.offersNearbyIsLoading = true;
        state.offersNearbyIsNotFound = false;
      })

      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        const offersNearbyData = action.payload;

        if (offersNearbyData.length > 0) {
          state.offersNearby = offersNearbyData;
        }

        state.offersNearbyIsLoading = false;
      })

      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.offersNearbyIsLoading = false;
        state.offersNearbyIsNotFound = true;
      });
  },
});

export const {setFavoriteNearby} = offersNearby.actions;
