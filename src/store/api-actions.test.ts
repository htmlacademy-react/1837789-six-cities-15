import {State} from '../types/state';
import {submitReviewAction, checkAuthAction} from './api-actions';
import {makeFakeCommentData, makeFakeReview} from '../utils/fakeMockByTest';
import {ApiRoute} from '../const';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

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
      USER: {
        user:  null
      }
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
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
      const fakeReviewData = makeFakeCommentData();
      mockAxiosAdapter.onPost(ApiRoute.Comments).reply(200, fakeReview);

      await store.dispatch(submitReviewAction(fakeReviewData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const submitReviewActionFulfilled = emittedActions.at(1) as ReturnType<typeof submitReviewAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        submitReviewAction.pending.type,
        submitReviewAction.fulfilled.type,
      ]);

      expect(submitReviewActionFulfilled.payload)
        .toEqual(fakeReview);
    });
  });
});

