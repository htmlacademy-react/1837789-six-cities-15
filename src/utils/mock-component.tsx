import {MemoryHistory, createMemoryHistory} from 'history';
import HistoryRouter from '../components/history-router/history-router';
import {HelmetProvider} from 'react-helmet-async';
import {MockStore, configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {State} from '../types/state';
import {createAPI} from '../services/api';
import thunk from 'redux-thunk';
import {Action, Store} from 'redux';
import {AppThunkDispatch, makeFakeStore} from './fake-mock-by-test';
import {Provider} from 'react-redux';

export function withHistory(component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<State> = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}

export function withStoreAndHistory(
  component: React.ReactElement,
  initialState?: Partial<State>,
  history?: MemoryHistory
) {
  const initialMockStoreState = makeFakeStore(initialState);
  const componentWithHistory = withHistory(component, history);
  const complexComponent = withStore(
    componentWithHistory,
    initialMockStoreState
  );

  return complexComponent;
}

export function makeMockStoreWithThunkAndState(initialState: Partial<State> = {}) {
  const axios = createAPI();
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);

  return mockStoreCreator(initialState);
}

export function makeMockStoreWrapperForHook(store: Store): React.FC {
  const mockStoreWrapper = ({ children }: { children?: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return mockStoreWrapper;
}
