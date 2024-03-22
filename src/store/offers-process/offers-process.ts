import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, DEFAULT_SORT, DEFAULT_LOCATION} from '../../const';
import {OffersProcess} from '../../types/state';
import {fetchOffersAction} from '../api-actions';
import {offersSorting} from '../../utils/offersSorting';
import {SortType} from '../../const';
import {Offers} from '../../types/offer';
import {CityMap} from '../../types/cityMap';

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

    setCityActive(state, action: PayloadAction<string>) {
      state.cityActive = action.payload;
    },

    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },

    setChangeMap(state, action: PayloadAction<CityMap>) {
      state.city = action.payload;
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

export const {setOffers, setCityActive, setSortType, setChangeMap} = offers.actions;

