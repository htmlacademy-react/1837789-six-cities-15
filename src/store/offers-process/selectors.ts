import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offers} from '../../types/offer';
import {SortType} from '../../const';
import {City} from '../../types/city';

export const getOffers = (state: Pick<State, NameSpace.Offers>): Offers =>
  state[NameSpace.Offers].offers;

export const getOffersIsLoading = (state: Pick<State, NameSpace.Offers>): boolean =>
  state[NameSpace.Offers].offersIsLoading;

export const getOffersIsNotFound = (state: Pick<State, NameSpace.Offers>): boolean =>
  state[NameSpace.Offers].offersIsNotFound;

export const getCityActive = (state: Pick<State, NameSpace.Offers>): string =>
  state[NameSpace.Offers].cityActive;

export const getCity = (state: Pick<State, NameSpace.Offers>): City =>
  state[NameSpace.Offers].city;

export const getSortType = (state: Pick<State, NameSpace.Offers>): SortType =>
  state[NameSpace.Offers].sortType;
