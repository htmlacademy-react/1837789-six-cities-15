import {
  commerce,
  datatype,
  image,
  internet,
  lorem,
} from 'faker';

import {Offer, Offers} from '../types/offer';
import {UserConnect, User} from '../types/user';
import {Location} from '../types/location';
import {City, CityName} from '../types/city';
import {address} from 'faker/locale/en';

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

const makeFakeCity = (): City => ({
  name: address.cityName() as CityName,
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

export {makeFakeUserData,
  makeFakeOffer,
  makeFakeUserRegistrationData,
  makeFakeNearbyPlaces};
