import {makeFakeNearbyPlaces} from '../../utils/fakeMockByTest';
import {NameSpace} from '../../const';
import {OffersNearbyProcess} from '../../types/state';
import {getOffersNearby, getOffersNearbyIsLoading, getOffersNearbyIsNotFound} from './selectors';


const fakeOffers = makeFakeNearbyPlaces();

const fakeState: OffersNearbyProcess = {
  offersNearby: fakeOffers,
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false,
};

let state = { [NameSpace.OffersNearby]: fakeState };

describe('Reducer: offer selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.OffersNearby]: { ...fakeState } };
  });

  describe('selector: getOffersNearby', () => {
    it('should return "offersNearby" from state', () => {
      const result = getOffersNearby(state);

      expect(result).toEqual(fakeOffers);
    });
  });

  describe('selector: getOffersNearbyIsLoading', () => {
    it('should return true or false offersNearbyIsLoading. status in the state', () => {
      const result = getOffersNearbyIsLoading(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getOffersNearbyIsNotFound', () => {
    it('should return true or false offersNearbyIsNotFound. status in the state', () => {
      const result = getOffersNearbyIsNotFound(state);

      expect(result).toEqual(false);
    });
  });
});
