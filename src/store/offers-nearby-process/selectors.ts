import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offers} from '../../types/offer';

export const getOffersNearby = (state: State): Offers =>
  state[NameSpace.OffersNearby].offersNearby;

export const getOffersNearbyIsLoading = (state: State): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsLoading;

export const getOffersNearbyIsNotFound = (state: State): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsNotFound;
