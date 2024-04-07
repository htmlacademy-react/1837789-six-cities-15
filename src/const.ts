import {CityList, City} from './types/city';

export const PRIVATE_ROUTES: readonly string[] = ['/favorites'];

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Main = '/',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const handleStars = (rating: number): string => `${(Math.round(rating) * 100 / 5)}%`;
export const DEFAULT_LOCATION: City = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
} as const;

export const CityName: CityList = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const CITIES_LIST = [CityName.Paris, CityName.Cologne, CityName.Brussels, CityName.Amsterdam, CityName.Hamburg, CityName.Dusseldorf];

export const DEFAULT_CITY = CityName.Paris;

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const DEFAULT_SORT = SortType.Popular;

export enum ApiRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments/',
  Login = '/login',
  Logout = '/logout'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  OffersNearby = 'OFFERSNEARBY',
  ErrorMessage = 'ERRORMESSAGE',
  Favorites = 'FAVORITES'
}

export enum FavoritesTriggerUpdate {
  Offers = 'UpdateOffers',
  Offer = 'UpdateOffer',
  Favorites = 'UpdateFavorites',
  Nearby = 'UpdateNearby',
}

export const getRandomInteger = (a: number, b: number): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export enum RequestStatus {
  Idle = 'idle',
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
}
