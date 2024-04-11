import FavoritesPage from './favorites-page';
import {withStoreAndHistory} from '../../utils/mock-component';
import {
  makeFakeStore,
} from '../../utils/fake-mock-by-test';
import { render } from '@testing-library/react';

describe('Component: <FavoritesPage />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render FavoritesPage', () => {
    const headerTestId = 'header-container';
    const {withStoreComponent: offerPageWrappedComponent} =
      withStoreAndHistory(<FavoritesPage />, makeFakeStore());

    const {getByTestId} = render(offerPageWrappedComponent);

    const spinnerElement = getByTestId(headerTestId);
    expect(spinnerElement).toBeInTheDocument();
  });
});
