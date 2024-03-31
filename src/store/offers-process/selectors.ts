import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offers} from '../../types/offer';
import {SortType} from '../../const';
import {City} from '../../types/city';

export const getOffers = (state: State): Offers =>
  state[NameSpace.Offers].offers;

export const getOffersIsLoading = (state: State): boolean =>
  state[NameSpace.Offers].offersIsLoading;

export const getOffersIsNotFound = (state: State): boolean =>
  state[NameSpace.Offers].offersIsNotFound;

export const getCityActive = (state: State): string =>
  state[NameSpace.Offers].cityActive;

export const getCity = (state: Pick<State, NameSpace.Offers>): City =>
  state[NameSpace.Offers].city;

export const getSortType = (state: State): SortType =>
  state[NameSpace.Offers].sortType;
