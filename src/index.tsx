import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';
import {offers} from './mocks/offers';
import {nearbyOffers} from './mocks/nearbyOffers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount = {Setting.PlacesCount}
      offers = {offers}
      nearbyOffers = {nearbyOffers}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
