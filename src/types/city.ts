import {Location} from './location';
import {CITY_LIST} from '../const';

export type City = {
  name: string;
  location: Location;
};

export type CityOptions = (typeof CITY_LIST)[keyof typeof CITY_LIST];
