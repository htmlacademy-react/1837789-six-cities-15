import {render} from '@testing-library/react';
import LoginPage from './login-page';
import {
  withHistory,
  withStore,
  withStoreAndHistory,
} from '../../utils/mock-component';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { MemoryHistory, createMemoryHistory } from 'history';
import * as router from 'react-router';
import React from 'react';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component: <LoginPage />', () => {
  let mockHistory: MemoryHistory;
  let withHistoryLoginPage: React.ReactElement;
  const navigate = vi.fn();

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    withHistoryLoginPage = withHistory(<LoginPage />, mockHistory);
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  it('renders correctly with default props', () => {
    const EXPECTED_ID = {
      PAGE: 'page-login',
      CONTAINER: 'page-login-container',
      ITEM: 'location-item',
      LOCATION_LINK: 'location-link',
      LOGIN_TITLE: 'login-title',
      FORM: 'login-form',
      EMAIL: 'email-element',
      PASSWORD: 'password-element',
      SUBMIT_BUTTON: 'login-button-submit',
    };
    const { withStoreComponent: wrappedLoginPage } = withStoreAndHistory(
      <LoginPage />
    );
    const { getByTestId } = render(wrappedLoginPage);

    const RESULT_LIST = {
      PAGE_LOGIN: getByTestId(EXPECTED_ID.PAGE),
      CONTAINER: getByTestId(EXPECTED_ID.CONTAINER),
      ITEM: getByTestId(EXPECTED_ID.ITEM),
      LOCATION_LINK: getByTestId(EXPECTED_ID.LOCATION_LINK),
      LOGIN_TITLE: getByTestId(EXPECTED_ID.LOGIN_TITLE),
      FORM: getByTestId(EXPECTED_ID.FORM),
      EMAIL: getByTestId(EXPECTED_ID.EMAIL),
      PASSWORD: getByTestId(EXPECTED_ID.PASSWORD),
      SUBMIT_BUTTON: getByTestId(EXPECTED_ID.SUBMIT_BUTTON),
    };

    expect(RESULT_LIST.PAGE_LOGIN).toBeInTheDocument();
    expect(RESULT_LIST.CONTAINER).toBeInTheDocument();
    expect(RESULT_LIST.ITEM).toBeInTheDocument();
    expect(RESULT_LIST.LOCATION_LINK).toBeInTheDocument();
    expect(RESULT_LIST.LOGIN_TITLE).toBeInTheDocument();
    expect(RESULT_LIST.FORM).toBeInTheDocument();
    expect(RESULT_LIST.EMAIL).toBeInTheDocument();
    expect(RESULT_LIST.PASSWORD).toBeInTheDocument();
    expect(RESULT_LIST.SUBMIT_BUTTON).toBeInTheDocument();
  });

  it('navigates to main page when already logged in', () => {
    const initialState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userConnect: null,
      },
    };
    const { withStoreComponent: wrappedLoginPage } = withStore(
      withHistoryLoginPage,
      makeFakeStore(initialState)
    );

    render(wrappedLoginPage);

    expect(navigate).toHaveBeenCalledWith(AppRoute.Main);
  });
});
