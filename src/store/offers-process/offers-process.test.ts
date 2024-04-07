import {offers, setFavoriteOffers} from './offers-process';
import {OffersProcess} from '../../types/state';
import {DEFAULT_CITY, DEFAULT_SORT} from '../../const';
import {fetchOffersAction} from '../api-actions';

import {makeFakeOffers, makeFakeOffer} from '../../utils/fake-mock-by-test';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  sortType: DEFAULT_SORT,
  offers: [],
  offersIsLoading: false,
  offersIsNotFound: false,
};

let state: OffersProcess;

describe('Slice offers-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersProcess = { ...initialState };

    expect(offers.reducer(initialState, emptyAction)).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersProcess = { ...initialState };

    expect(offers.reducer(undefined, emptyAction)).toEqual(expectedState);
  });

  it('should change offer with "setFavoriteOffers" action', () => {
    const fakeOffers = makeFakeOffers();
    const fakeFavoriteOffer = makeFakeOffer();
    const actualState: OffersProcess = { ...initialState, offers: fakeOffers};
    let expectedFakeOffers = [...fakeOffers];
    expectedFakeOffers = expectedFakeOffers.map((item) => item.id === fakeFavoriteOffer.id ? fakeFavoriteOffer : item);
    const expectedState = {
      ...initialState,
      offers: expectedFakeOffers,
    };

    const result = offers.reducer(actualState, setFavoriteOffers(fakeFavoriteOffer));
    expect(result).toEqual(expectedState);
  });

  describe('fetchOffersAction test', () => {
    it('fetchOffersAction fulfilled', () => {
      const fakeOffers = makeFakeOffers();
      const expectedState: OffersProcess = { ...initialState, offers: fakeOffers};

      expect(
        offers.reducer(state, {
          type: fetchOffersAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual(expectedState);
    });

    it('fetchOffersAction rejected', () => {
      const expectedState: OffersProcess = { ...initialState, offersIsLoading: false, offersIsNotFound: true };
      const actualState: OffersProcess = { ...initialState, offersIsLoading: true, offersIsNotFound: false };

      expect(
        offers.reducer(actualState, {
          type: fetchOffersAction.rejected.type,
        })
      ).toEqual(expectedState);
    });
  });
});
