import {CityList} from './types/city';
import {CityMap} from './types/cityMap';

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

export const handleStars = (width: number) => `${String(Math.round(width) * 20)}%`;

export const CITY_LIST: CityList = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const citiesList = [CITY_LIST.Paris, CITY_LIST.Cologne, CITY_LIST.Brussels, CITY_LIST.Amsterdam, CITY_LIST.Hamburg, CITY_LIST.Dusseldorf];

export const DEFAULT_CITY = CITY_LIST.Paris;

export const cityMap: CityMap[] = [
  {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 12
  },
  {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12
  },
  {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 12
  },
  {
    title: 'Brussels',
    lat: 50.846557,
    lng:4.351697,
    zoom: 12
  },
  {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 12
  },
  {
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 12
  },
];

export const [defaultLocation] = cityMap.filter((item) => item.title === DEFAULT_CITY);

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

