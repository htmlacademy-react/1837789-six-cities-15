import {checkAuthAction, submitReviewAction} from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {ApiRoute} from '../const';
import {State} from '../types/state';
import {makeFakeReview} from '../utils/fake-mock-by-test';
import {Review} from '../types/review';

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
      const fakeReview : Review = makeFakeReview();
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
});
