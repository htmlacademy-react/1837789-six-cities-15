import {render, screen} from '@testing-library/react';
import MainPage from './main-page';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component: MainPage', () => {
  const notFoundPageWithHistory = withHistory(<MainPage />);
  it('should render correctly', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      notFoundPageWithHistory,
      initialState
    );
    const expectedHeaderText = /Cities/i;

    render(withStoreComponent);

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Cologne')).toBeInTheDocument();
    expect(screen.getByText('Brussels')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
  });
});
