import {store} from '../store/index';
import {AuthorizationStatus, SortType} from '../const';
import {Reviews} from '../types/review';
import {Offer, Offers} from '../types/offer';
import {UserConnect} from '../types/user';
import {RequestStatus} from '../const';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userConnect: UserConnect | null;
};

export type ErrorMessageProcess = {
  errorMessage: string | null;
};

export type ReviewsProcess = {
  reviews: Reviews;
  reviewsIsLoading: boolean;
  reviewsIsNotFound: boolean;
  reviewRequestStatus: RequestStatus;
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
  sortType: SortType;
  offers: Offers;
  offersIsLoading: boolean;
  offersIsNotFound: boolean;
};

export type favoritesProcess = {
  favorites: Offers;
  favoritesIsLoading: boolean;
  favoritesIsNotFound: boolean;
};
