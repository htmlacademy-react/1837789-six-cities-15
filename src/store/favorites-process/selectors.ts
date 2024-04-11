import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offers} from '../../types/offer';

export const getFavorites = (state: Pick<State, NameSpace.Favorites>): Offers =>
  state[NameSpace.Favorites].favorites;

export const getFavoritesIsLoading = (state: Pick<State, NameSpace.Favorites>): boolean =>
  state[NameSpace.Favorites].favoritesIsLoading;

export const getFavoritesIsNotFound = (state: Pick<State, NameSpace.Favorites>): boolean =>
  state[NameSpace.Favorites].favoritesIsNotFound;

export const getFavoritesLength = (state: Pick<State, NameSpace.Favorites>): number => state[NameSpace.Favorites].favorites.length;
