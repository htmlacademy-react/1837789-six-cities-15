import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import App from './app';
import {AppRoute, AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT} from '../../const';
import {withHistory, withStore} from '../../utils/mock-component';
import {
  makeFakeOffers,
  makeFakeStore,
} from '../../utils/fake-mock-by-test';

describe('Component: <App />', () => {
  let mockHistory: MemoryHistory;
  let withHistoryApp: React.ReactElement;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    withHistoryApp = withHistory(<App />, mockHistory);
  });

  describe('route "/"', () => {
    it('should render the <Spinner /> when the offers have not loaded yet', () => {
      const {withStoreComponent} = withStore(
        withHistoryApp,
        makeFakeStore(
          {OFFERS: {cityActive: DEFAULT_CITY,
            sortType: DEFAULT_SORT,
            offers: [],
            offersIsLoading: true,
            offersIsNotFound: false},
          }
        )
      );
      const spinnerId = 'spinner-container';
      mockHistory.push(AppRoute.Main);

      render(withStoreComponent);

      expect(screen.getByTestId(spinnerId)).toBeInTheDocument();
    });

    it('should render <MainPage /> when the user navigates to "/"', () => {
      const fakeOffers = makeFakeOffers();
      const {withStoreComponent} = withStore(withHistoryApp, makeFakeStore(
        {OFFERS: {cityActive: DEFAULT_CITY,
          sortType: DEFAULT_SORT,
          offers: fakeOffers,
          offersIsLoading: false,
          offersIsNotFound: false},
        USER: {userConnect: null, authorizationStatus: AuthorizationStatus.Auth}
        }
      ));
      mockHistory.push(AppRoute.Main);

      render(withStoreComponent);

      expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    });
  });

  describe('route "/favorites"', () => {
    it('should render "Favorites" when user navigate to "/favorites and Authorized"', () => {
      const withHistoryComponent = withHistory(<App />, mockHistory);
      const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore(
        {USER: {userConnect: null, authorizationStatus: AuthorizationStatus.Auth}}
      ));
      mockHistory.push(AppRoute.Favorites);

      render(withStoreComponent);

      expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
      expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
    });
  });

  describe('route "/login"', () => {
    it('should render <LoginPage /> when the user navigates to "/login"', () => {
      const withHistoryComponent = withHistory(<App />, mockHistory);
      const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore(
        {USER: {userConnect: null, authorizationStatus: AuthorizationStatus.NoAuth}}
      ));
      mockHistory.push(AppRoute.Login);

      render(withStoreComponent);

      expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });
  });

  describe('route "/offer/:id"', () => {
    it('should render <OfferPage /> when the user navigates to "/offer/:id"', () => {
      const withHistoryComponent = withHistory(<App />, mockHistory);
      const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
      mockHistory.push(AppRoute.Offer);

      render(withStoreComponent);

      expect(screen.getByTestId('offer-page-container')).toBeInTheDocument();
    });
  });

  describe('route "*"', () => {
    it('should render <NotFoundPage /> when the user navigates to a non-existent page', () => {
      const initialState = makeFakeStore();
      const {withStoreComponent} = withStore(withHistoryApp, initialState);

      mockHistory.push('/invalidRoute');
      render(withStoreComponent);

      expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    });
  });
});
