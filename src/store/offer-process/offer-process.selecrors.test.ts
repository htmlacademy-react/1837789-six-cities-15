import {makeFakeOffer} from '../../utils/fake-mock-by-test';
import { NameSpace} from '../../const';
import {OfferProcess} from '../../types/state';
import {getOffer, getOfferIsLoading, getOfferIsNotFound} from './selectors';


const fakeOffer = makeFakeOffer();

const fakeState: OfferProcess = {
  offer: fakeOffer,
  offerIsLoading: false,
  offerIsNotFound: false,
};

let state = { [NameSpace.Offer]: fakeState };

describe('Reducer: offer selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.Offer]: { ...fakeState } };
  });

  describe('selector: getOffer', () => {
    it('should return "offer" from state', () => {
      const result = getOffer(state);

      expect(result).toEqual(fakeOffer);
    });
  });

  describe('selector: getOfferIsLoading', () => {
    it('should return true or false offerIsLoading. status in the state', () => {
      const result = getOfferIsLoading(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getOfferIsNotFound', () => {
    it('should return true or false offerIsNotFound. status in the state', () => {
      const result = getOfferIsNotFound(state);

      expect(result).toEqual(false);
    });
  });
});
