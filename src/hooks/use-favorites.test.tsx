import {renderHook} from '@testing-library/react';
import {useFavorites} from './use-favorites';
import * as navigate from 'react-router';
import { createMemoryHistory } from 'history';
import {
  AppRoute,
  AuthorizationStatus,
  NameSpace,
} from '../const';
import {
  extractActionsTypes,
  makeFakeOffers,
  makeFakeOffer,
  makeFakeStore,
} from '../utils/fake-mock-by-test';
import {
  makeMockStoreWithThunkAndState,
  makeMockStoreWrapperForHook,
  withStore,
} from '../utils/mock-component';
import React from 'react';
import {State} from '../types/state';
import {act} from 'react-dom/test-utils';

type TWithProviderWrapperProps = {
  children: React.ReactElement;
};

const withProviderWrapperWithInitialState =
  (initialState: Partial<State>) => ({children}: TWithProviderWrapperProps) =>
    withStore(children, makeFakeStore(initialState)).withStoreComponent;

describe('Hook: useFavorites', () => {
  const initialMockHistory = createMemoryHistory();
  const mockNavigate = () => initialMockHistory.push(AppRoute.Login);
  vi.spyOn(navigate, 'useNavigate').mockReturnValue(mockNavigate);

  beforeEach(() => {
    initialMockHistory.push('/anything');
  });

  it('should return "changeFavoritesMark" function', () => {
    const fakeOffer = makeFakeOffer();
    const id = fakeOffer.id;
    const flagStatus = 0;
    const initialState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Unknown,
        userConnect: null,
      },
    };

    const wrapper = withProviderWrapperWithInitialState(initialState);
    const {result} = renderHook(() => useFavorites(id, flagStatus), {
      wrapper,
    });

    expect(typeof result.current).toBe('function');
  });

  it('should redirect to route "/login" when the user is not logged in', () => {
    const fakeOffer = makeFakeOffer();
    const id = fakeOffer.id;
    const flagStatus = 0;
    const initialState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userConnect: null,
      },
    };

    const wrapper = withProviderWrapperWithInitialState(initialState);
    const { result } = renderHook(() => useFavorites(id, flagStatus), {
      wrapper,
    });

    const handleFavoriteClick = result.current;

    act(handleFavoriteClick);

    expect(initialMockHistory.location.pathname).toBe(AppRoute.Login);
  });

  it('should change "isFavorite" status and not redirect to route "/login" when the user has already logged in', () => {
    const fakeOffersPreview = makeFakeOffers();
    const fakeOffer = makeFakeOffer();
    const id = fakeOffersPreview[0].id;
    const flagStatus = fakeOffersPreview[0].isFavorite ? 0 : 1;
    const initialState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userConnect: null,
      },
      [NameSpace.Offer]: {
        offer: fakeOffer,
        offerIsLoading: false,
        offerIsNotFound: false,
      },
    };

    const mockStore = makeMockStoreWithThunkAndState(
      makeFakeStore(initialState)
    );
    const wrapper = makeMockStoreWrapperForHook(mockStore);
    const expectedAction = ['setFavorites/pending'];

    const { result } = renderHook(() => useFavorites(id, flagStatus), {
      wrapper,
    });
    const handleFavoriteClick = result.current;

    act(handleFavoriteClick);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(initialMockHistory.location.pathname).toBe('/anything');
    expect(actions).toEqual(expectedAction);
  });
});
