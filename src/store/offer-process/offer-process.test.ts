import {offer, setFavoriteOffer} from './offer-process';
import {OfferProcess} from '../../types/state';
import {fetchOfferAction} from '../api-actions';

import {makeFakeOffer} from '../../utils/fake-mock-by-test';

const initialState: OfferProcess = {
  offer: null,
  offerIsLoading: false,
  offerIsNotFound: false
};

let state: OfferProcess;

describe('Slice offer-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OfferProcess = { ...initialState };

    expect(offer.reducer(initialState, emptyAction)).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OfferProcess = { ...initialState };

    expect(offer.reducer(undefined, emptyAction)).toEqual(expectedState);
  });

  it('should change offer with "setFavoriteOffer" action', () => {
    const fakeFavoriteOffer = makeFakeOffer();
    const actualState: OfferProcess = { ...initialState, offer: fakeFavoriteOffer};
    const expectedState = {
      ...initialState,
      offer: fakeFavoriteOffer,
    };

    const result = offer.reducer(actualState, setFavoriteOffer(fakeFavoriteOffer.isFavorite));
    expect(result).toEqual(expectedState);
  });

  describe('fetchOfferAction test', () => {
    it('fetchOfferAction fulfilled', () => {
      const fakeOffer = makeFakeOffer();
      const expectedState: OfferProcess = { ...initialState, offer: fakeOffer };

      expect(
        offer.reducer(state, {
          type: fetchOfferAction.fulfilled.type,
          payload: fakeOffer,
        })
      ).toEqual(expectedState);
    });

    it('fetchOfferAction rejected', () => {
      const expectedState: OfferProcess = { ...initialState, offerIsLoading: false, offerIsNotFound: true };
      const actualState: OfferProcess = { ...initialState, offerIsLoading: true, offerIsNotFound: false };

      expect(
        offer.reducer(actualState, {
          type: fetchOfferAction.rejected.type,
        })
      ).toEqual(expectedState);
    });
  });
});
