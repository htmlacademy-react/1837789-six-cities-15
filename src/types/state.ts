import {store} from '../store/index';
import {AuthorizationStatus, SortType} from '../const';
import {Reviews} from '../types/review';
import {Offer, Offers} from '../types/offer';
import {CityMap} from '../types/cityMap';
import {UserConnect} from '../types/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserConnect | null;
};

export type ErrorMessageProcess = {
  errorMessage: string | null;
};

export type ReviewsProcess = {
  reviews: Reviews;
  reviewsIsLoading: boolean;
  reviewsIsNotFound: boolean;
};

export type OfferProcess = {
  offer: Offer | null;
  offerIsLoading: boolean;
  offerIsNotFound: boolean;
};

export type OffersNearbyProcess = {
  offersNearby: Offers;
  offersNearbyIsLoading: boolean;
  offersNearbyIsNotFound: boolean;
};

export type OffersProcess = {
  cityActive: string;
  city: CityMap;
  sortType: SortType;
  allOffers: Offers;
  offers: Offers;
  offersIsLoading: boolean;
  offersIsNotFound: boolean;
};

export type favoritesProcess = {
  favorites: Offers;
  favoritesIsLoading: boolean;
  favoritesIsNotFound: boolean;
};
