import {MemoryHistory, createMemoryHistory} from 'history';
import { render, screen} from '@testing-library/react';
import {AppRoute} from '../../const';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';
import App from './app';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" with Paris when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go back to the main page.')).toBeInTheDocument();
  });
});
