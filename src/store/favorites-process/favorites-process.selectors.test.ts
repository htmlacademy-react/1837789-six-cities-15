import {makeFakeOffers} from '../../utils/fake-mock-by-test';
import {NameSpace} from '../../const';
import {favoritesProcess} from '../../types/state';
import {getFavorites, getFavoritesIsLoading, getFavoritesIsNotFound} from './selectors';


const fakeOffers = makeFakeOffers();

const fakeState: favoritesProcess = {
  favorites: fakeOffers,
  favoritesIsLoading: false,
  favoritesIsNotFound: false,
};

let state = { [NameSpace.Favorites]: fakeState };

describe('Reducer: offer selectors', () => {
  beforeEach(() => {
    state = {[NameSpace.Favorites]: { ...fakeState }};
  });

  describe('selector: getFavorites', () => {
    it('should return "favorites" from state', () => {
      const result = getFavorites(state);

      expect(result).toEqual(fakeOffers);
    });
  });

  describe('selector: getFavoritesIsLoading', () => {
    it('should return true or false favoritesIsLoading. status in the state', () => {
      const result = getFavoritesIsLoading(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getFavoritesIsNotFound', () => {
    it('should return true or false favoritesIsNotFound. status in the state', () => {
      const result = getFavoritesIsNotFound(state);

      expect(result).toEqual(false);
    });
  });
});
