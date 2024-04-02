import {offersNearby, setFavoriteNearby} from './offers-nearby-process';
import {OffersNearbyProcess} from '../../types/state';
import {fetchOffersNearbyAction} from '../api-actions';

import {makeFakeNearbyPlaces, makeFakeOffer} from '../../utils/fakeMockByTest';

const initialState: OffersNearbyProcess = {
  offersNearby: [],
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false
};

let state: OffersNearbyProcess;

describe('Slice offers-nearby-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersNearbyProcess = { ...initialState };

    expect(offersNearby.reducer(initialState, emptyAction)).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersNearbyProcess = { ...initialState };

    expect(offersNearby.reducer(undefined, emptyAction)).toEqual(expectedState);
  });

  it('should change offer with "setFavoriteNearby" action', () => {
    const fakeNearbyOffers = makeFakeNearbyPlaces();
    const fakeNearbyFavoriteOffer = makeFakeOffer();
    const actualState: OffersNearbyProcess = { ...initialState, offersNearby: fakeNearbyOffers};
    let expectedFakeNearbyOffers = [...fakeNearbyOffers];
    expectedFakeNearbyOffers = expectedFakeNearbyOffers.map((item) => item.id === fakeNearbyFavoriteOffer.id ? fakeNearbyFavoriteOffer : item);
    const expectedState = {
      ...initialState,
      offersNearby: expectedFakeNearbyOffers,
    };

    const result = offersNearby.reducer(actualState, setFavoriteNearby(fakeNearbyFavoriteOffer));
    expect(result).toEqual(expectedState);
  });

  describe('fetchOffersNearbyAction test', () => {
    it('fetchOffersNearbyAction fulfilled', () => {
      const fakeNearbyOffers = makeFakeNearbyPlaces();
      const expectedState: OffersNearbyProcess = { ...initialState, offersNearby: fakeNearbyOffers };

      expect(
        offersNearby.reducer(state, {
          type: fetchOffersNearbyAction.fulfilled.type,
          payload: fakeNearbyOffers,
        })
      ).toEqual(expectedState);
    });

    it('fetchOffersNearbyAction rejected', () => {
      const expectedState: OffersNearbyProcess = { ...initialState, offersNearbyIsLoading: false, offersNearbyIsNotFound: true };
      const actualState: OffersNearbyProcess = { ...initialState, offersNearbyIsLoading: true, offersNearbyIsNotFound: false };

      expect(
        offersNearby.reducer(actualState, {
          type: fetchOffersNearbyAction.rejected.type,
        })
      ).toEqual(expectedState);
    });
  });
});
