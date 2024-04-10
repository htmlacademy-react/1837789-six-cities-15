import {checkAuthAction,
  submitReviewAction,
  fetchFavoritesAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  loginAction,
  logoutAction,
} from './api-actions';
import {redirectToRoute} from './action';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {ApiRoute} from '../const';
import * as tokenStorage from '../services/token';
import {State} from '../types/state';
import {makeFakeReview, makeFakeOffer, makeFakeReviews, makeFakeUserData, makeFakeUserRegistrationData} from '../utils/fake-mock-by-test';
import {datatype} from 'faker';

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);

  let store: ReturnType<typeof mockStoreCreator>;
  beforeEach(() => {
    store = mockStoreCreator({
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      const fakeResponse = {token: 'secret'};
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200, fakeResponse);
      const expectedActions = [
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ];

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual(expectedActions);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('submitReviewAction', () => {
    it('should dispatch submitReviewAction.pending, submitReviewAction.fulfilled when server response 200', async () => {
      const fakeReview = makeFakeReview();
      const {id} = fakeReview;
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/${id}`).reply(200, fakeReview);

      await store.dispatch(submitReviewAction(fakeReview));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        submitReviewAction.pending.type,
        submitReviewAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchFavoritesAction', () => {
    it('should dispatch fetchFavoritesAction.pending, fetchFavoritesAction.fulfilled when server response 200', async () => {
      const mockFavorites = makeFakeOffer();
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(200, mockFavorites);
      await store.dispatch(fetchFavoritesAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesAction.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);
      expect(fetchFavoritesActionFulfilled.payload).toEqual(mockFavorites);
    });
    it('should dispatch fetchFavoritesAction.pending, fetchFavoritesAction.rejected when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(400);
      await store.dispatch(fetchFavoritesAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearPlaces', () => {
    it('should dispatch fetchOffersNearbyAction.pending, fetchOffersNearbyAction.fulfilled when server response 200', async () => {
      const mockOffersNearby = makeFakeOffer();
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockId}/nearby`).reply(200, mockOffersNearby);
      await store.dispatch(fetchOffersNearbyAction(mockId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchfetchOffersNearbyActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersNearbyAction.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchOffersNearbyAction.pending.type,
        fetchOffersNearbyAction.fulfilled.type,
      ]);
      expect(fetchfetchOffersNearbyActionFulfilled.payload).toEqual(mockOffersNearby);
    });
    it('should dispatch fetchOffersNearbyAction.pending, fetchOffersNearbyAction.rejected when server response 400', async () => {
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockId}/nearby`).reply(400);
      await store.dispatch(fetchOffersNearbyAction(mockId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        fetchOffersNearbyAction.pending.type,
        fetchOffersNearbyAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch fetchReviewsAction.pending, fetchReviewsAction.fulfilled when server response 200', async () => {
      const mockReviews = makeFakeReviews();
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/${mockId}`).reply(200, mockReviews);
      await store.dispatch(fetchReviewsAction(mockId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;
      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);
      expect(fetchReviewsActionFulfilled.payload).toEqual(mockReviews);
    });
    it('should dispatch fetchReviewsAction.pending, fetchFavoritesAction.rejected when server response 400', async () => {
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/${mockId}`).reply(400);
      await store.dispatch(fetchReviewsAction(mockId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser = makeFakeUserData();
      const fakeRegData = makeFakeUserRegistrationData();
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeUser);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');
      const expectedActions = [
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ];

      await store.dispatch(loginAction(fakeRegData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual(expectedActions);
      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeUser.token);
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });
  });
});
