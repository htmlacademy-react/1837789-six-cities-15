import {favoritesOffer} from './favorites-process';
import {favoritesProcess} from '../../types/state';
import {fetchFavoritesAction} from '../api-actions';

import {makeFakeOffers} from '../../utils/fake-mock-by-test';

const initialState: favoritesProcess = {
  favorites: [],
  favoritesIsLoading: false,
  favoritesIsNotFound: false,
};

let state: favoritesProcess;

describe('Slice favorites-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: favoritesProcess = { ...initialState };

    expect(favoritesOffer.reducer(initialState, emptyAction)).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: favoritesProcess = { ...initialState };

    expect(favoritesOffer.reducer(undefined, emptyAction)).toEqual(expectedState);
  });


  describe('fetchFavoritesAction test', () => {
    it('fetchFavoritesAction fulfilled', () => {
      const fakeFavoritesOffers = makeFakeOffers();
      const expectedState: favoritesProcess = { ...initialState, favorites: fakeFavoritesOffers };

      expect(
        favoritesOffer.reducer(state, {
          type: fetchFavoritesAction.fulfilled.type,
          payload: fakeFavoritesOffers,
        })
      ).toEqual(expectedState);
    });

    it('fetchFavoritesAction rejected', () => {
      const expectedState: favoritesProcess = { ...initialState, favoritesIsLoading: false, favoritesIsNotFound: true };
      const actualState: favoritesProcess = { ...initialState, favoritesIsLoading: true, favoritesIsNotFound: false };

      expect(
        favoritesOffer.reducer(actualState, {
          type: fetchFavoritesAction.rejected.type,
        })
      ).toEqual(expectedState);
    });
  });
});
