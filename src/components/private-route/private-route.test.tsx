import {MemoryHistory, createMemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus, NameSpace} from '../../const';
import {withHistory, withStore } from '../../utils/mock-component';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import { render, screen } from '@testing-library/react';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component: <PrivateRoute />', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  it('should render component with the text "public route", when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const initialFakeStore = makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userConnect: null,
      },
    });
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <span>{notExpectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );
    const {withStoreComponent} = withStore(
      preparedComponent,
      initialFakeStore
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component with the text "private route", when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const initialFakeStore = makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userConnect: null,
      },
    });
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <span>{expectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );
    const {withStoreComponent} = withStore(
      preparedComponent,
      initialFakeStore
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
