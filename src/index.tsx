import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {Setting} from './const';
import {citiesList} from './const';
import {offers} from './mocks/offers';
import {nearbyOffers} from './mocks/nearbyOffers';
import {reviews} from './mocks/reviews';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placesCount = {Setting.PlacesCount}
        offers = {offers}
        nearbyOffers = {nearbyOffers}
        reviews = {reviews}
        citiesList={citiesList}
      />
    </Provider>
  </React.StrictMode>,
);
