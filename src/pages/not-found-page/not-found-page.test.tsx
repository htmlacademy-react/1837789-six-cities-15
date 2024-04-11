import {render, screen} from '@testing-library/react';
import NotFoundPage from './not-found-page';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component: NotFoundPage', () => {
  const notFoundPageWithHistory = withHistory(<NotFoundPage />);
  it('should render correctly', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      notFoundPageWithHistory,
      initialState
    );
    const expectedHeaderText = '404. Page not found';
    const expectedLinkText = 'Go back to the main page.';

    render(withStoreComponent);

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
