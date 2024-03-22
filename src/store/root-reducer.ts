import {combineReducers} from '@reduxjs/toolkit';
import {user} from './user-process/user-process';
import {NameSpace} from '../const';
import {offers} from './offers-process/offers-process';
import {offer} from './offer-process/offer-process';
import {reviews} from './reviews-process/reviews-process';
import {offersNearby} from './offers-nearby-process/offers-nearby-process';
import {errorMessage} from './error-message-process/error-mewssage-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Offer]: offer.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.OffersNearby]: offersNearby.reducer,
  [NameSpace.ErrorMessage]: errorMessage.reducer,
});
