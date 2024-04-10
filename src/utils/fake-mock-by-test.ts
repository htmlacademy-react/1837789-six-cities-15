import {
  commerce,
  datatype,
  image,
  internet,
  date,
  lorem,
} from 'faker';

import {Offer, Offers} from '../types/offer';
import {Review, Reviews} from '../types/review';
import {UserConnect, User} from '../types/user';
import {CommentData} from '../types/comments';
import {Location} from '../types/location';
import {City, CityName} from '../types/city';
import {State} from '../types/state';
import {address} from 'faker/locale/en';
import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT} from '../const';
import {getToken} from '../services/token';
import {RequestStatus} from '../const';
import {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../services/api';
import {Action} from 'redux';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

const token = getToken();

const makeFakeUser = (): User => ({
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
});

const makeFakeUserData = (): UserConnect => ({
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
  email: internet.email(),
  token: datatype.string(),
});

const makeFakeUserRegistrationData = () => ({
  email: internet.email(),
  password: datatype.string(),
});

const makeFakeLocation = (): Location => ({
  zoom: datatype.number({ min: 5, max: 15 }),
  latitude: datatype.number({ min: 5, max: 6, precision: 0.0001 }),
  longitude: datatype.number({ min: 4, max: 10, precision: 0.001 }),
});

const fakeCity = address.cityName() as CityName;

const makeFakeCity = (): City => ({
  name: fakeCity,
  location: makeFakeLocation(),
});

const makeFakeOffer = (): Offer => ({
  id: datatype.string(),
  title: lorem.word(10),
  type: commerce.product(),
  price: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  bedrooms: datatype.number({ min: 1, max: 10 }),
  maxAdults: datatype.number({ min: 1, max: 5 }),
  isPremium: datatype.boolean(),
  isFavorite: datatype.boolean(),
  description: commerce.productDescription(),
  previewImage: image.imageUrl(260, 200, 'cat', true),
  images: Array.from({ length: 2 }, () => image.imageUrl(260, 200, 'cat', true)),
  location: makeFakeLocation(),
  city: makeFakeCity(),
  host: makeFakeUser(),
  goods: [commerce.product()],
});

const makeFakeNearbyPlaces = (): Offers =>
  Array.from({ length: 3 }, makeFakeOffer);

const makeFakeOffers = (): Offers =>
  Array.from({ length: 12 }, makeFakeOffer);

const makeFakeReview = (): Review => ({
  id: datatype.string(),
  user: makeFakeUser(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
  date: String(date.recent()),
});

const makeFakeReviews = (): Reviews =>
  Array.from({ length: 5 }, makeFakeReview);

const makeFakeCommentData = (): CommentData => ({
  id: datatype.string(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
});

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  OFFERS: {cityActive: DEFAULT_CITY,
    sortType: DEFAULT_SORT,
    offers: makeFakeOffers(),
    offersIsLoading: false,
    offersIsNotFound: false},
  OFFER: {offer: null,
    offerIsLoading: false,
    offerIsNotFound: false },
  USER: {authorizationStatus: token ? AuthorizationStatus.Auth : AuthorizationStatus.Unknown,
    userConnect:  null},
  REVIEWS: {reviews: [],
    reviewsIsLoading: false,
    reviewsIsNotFound: true,
    reviewRequestStatus: RequestStatus.Idle,},
  OFFERSNEARBY: {offersNearby: [],
    offersNearbyIsLoading: false,
    offersNearbyIsNotFound: false,},
  ERRORMESSAGE: {errorMessage: null},
  FAVORITES: {favorites: [],
    favoritesIsLoading: false,
    favoritesIsNotFound: false},
  ...initialState ?? {},
});

export {makeFakeUserData,
  makeFakeOffer,
  makeFakeUserRegistrationData,
  makeFakeNearbyPlaces,
  makeFakeOffers,
  makeFakeCity,
  makeFakeReview,
  makeFakeReviews,
  makeFakeCommentData};
