import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offers} from '../../types/offer';

export const getOffersNearby = (state: Pick<State, NameSpace.OffersNearby>): Offers =>
  state[NameSpace.OffersNearby].offersNearby;

export const getOffersNearbyIsLoading = (state: Pick<State, NameSpace.OffersNearby>): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsLoading;

export const getOffersNearbyIsNotFound = (state: Pick<State, NameSpace.OffersNearby>): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsNotFound;
