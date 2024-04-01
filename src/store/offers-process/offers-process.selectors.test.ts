import {makeFakeOffers, makeFakeCity} from '../../utils/fakeMockByTest';
import {NameSpace, DEFAULT_LOCATION} from '../../const';
import {OffersProcess} from '../../types/state';
import {address} from 'faker/locale/en';
import {CityName} from '../../types/city';
import {SortName} from '../../types/sort';
import {getOffers, getOffersIsLoading, getOffersIsNotFound,
  getCityActive, getCity, getSortType} from './selectors';


const fakeOffers = makeFakeOffers();
const fakeLocation = makeFakeCity();
const fakeCity = address.cityName() as CityName;
const fakeSortType = address.cityName() as SortName;

const fakeState: OffersProcess = {
  cityActive: fakeCity,
  city: fakeLocation,
  sortType: fakeSortType,
  allOffers: fakeOffers,
  offers: fakeOffers,
  offersIsLoading: false,
  offersIsNotFound: false,
};

let state = { [NameSpace.Offers]: fakeState };

describe('Reducer: offer selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.Offers]: { ...fakeState } };
  });

  describe('selector: getOffers', () => {
    it('should return "offers" from state', () => {
      const result = getOffers(state);

      expect(result).toEqual(fakeOffers);
    });
  });

  describe('selector: getOffersIsLoading', () => {
    it('should return true or false offersIsLoading. status in the state', () => {
      const result = getOffersIsLoading(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getOffersNearbyIsNotFound', () => {
    it('should return true or false offersIsNotFound. status in the state', () => {
      const result = getOffersIsNotFound(state);

      expect(result).toEqual(false);
    });
  });

  describe('selector: getCityActive', () => {
    it('should return "cityActive" from state', () => {
      const result = getCityActive(state);

      expect(result).toEqual(fakeCity);
    });
  });

  describe('selector: getSortType', () => {
    it('should return "sortType" from state', () => {
      const result = getSortType(state);

      expect(result).toEqual(fakeSortType);
    });
  });

  describe('selector: getCity', () => {
    it('should return "city" from state', () => {
      const result = getCity(state);

      expect(result).toEqual(fakeLocation);
    });
  });
});
