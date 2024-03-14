import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {citiesList} from './const';
import {offers} from './mocks/offers';
import {nearbyOffers} from './mocks/nearbyOffers';
import {reviews} from './mocks/reviews';
import {store} from './store';
import ErrorMessage from './components/error-message/error-message';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        offers = {offers}
        nearbyOffers = {nearbyOffers}
        reviews = {reviews}
        citiesList={citiesList}
      />
    </Provider>
  </React.StrictMode>,
);
