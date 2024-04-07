import {Offers} from '../types/offer';

export function getOffersByCity(
  offers: Offers,
  city: string
): Offers | [] {
  return offers.filter((offer) => offer?.city?.name === city);
}
