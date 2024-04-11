import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import App from './app';
import {AppRoute, AuthorizationStatus, NameSpace} from '../../const';
import {withHistory, withStore} from '../../utils/mock-component';
import {
  makeFakeOffer,
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
        makeFakeStore()
      );
      const spinnerId = 'spinner-container';
      mockHistory.push(AppRoute.Main);

      render(withStoreComponent);

      expect(screen.getByTestId(spinnerId)).toBeInTheDocument();
    });

    it('should render <MainPage /> when the user navigates to "/"', () => {
      const fakeOffers = makeFakeOffers();
      fakeOffers[0].city.name = 'Paris';
      const fakeStore = makeFakeStore();

      const {withStoreComponent} = withStore(withHistoryApp, fakeStore);
      mockHistory.push(AppRoute.Main);

      render(withStoreComponent);

      const mapContainerId = 'map-container';

      expect(screen.getByTestId(mapContainerId)).toBeInTheDocument();
    });
  });

  describe('route "/favorites"', () => {
    it('should render <Favorite /> when the user is logged in and has favorites', () => {
      const fakeOfferOne = makeFakeOffer();
      const fakeOfferTwo = makeFakeOffer();
      const {withStoreComponent} = withStore(
        withHistoryApp,
        makeFakeStore({
          [NameSpace.User]: {
            authorizationStatus: AuthorizationStatus.Auth,
            userConnect: null,
          },
          [NameSpace.Favorites]: {
            favorites: [fakeOfferOne, fakeOfferTwo],
            favoritesIsLoading: false,
            favoritesIsNotFound: false
          },
        })
      );

      const expectedCount = 2;
      const favoritesItemId = 'favorites-item';
      const expectedTitle = 'Saved listing';
      const unexpectedTitle = 'Favorites (empty)';

      mockHistory.push(AppRoute.Favorites);
      render(withStoreComponent);

      const favoritesItems = screen.getAllByTestId(favoritesItemId);

      expect(screen.getByText(expectedTitle)).toBeInTheDocument();
      expect(favoritesItems.length).toBe(expectedCount);
      expect(screen.queryByText(unexpectedTitle)).not.toBeInTheDocument();
    });
  });

  describe('route "*"', () => {
    it('should render <NotFoundPage /> when the user navigates to a non-existent page', () => {
      const initialState = makeFakeStore();
      const {withStoreComponent} = withStore(withHistoryApp, initialState);
      const expectedTitle = '404. Page not found';

      mockHistory.push('/*');
      render(withStoreComponent);

      expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    });
  });
});
