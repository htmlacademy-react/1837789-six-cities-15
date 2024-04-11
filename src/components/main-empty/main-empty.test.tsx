import {render, screen} from '@testing-library/react';
import MainEmpty from './main-empty';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component: MainEmpty', () => {
  const notFoundPageWithHistory = withHistory(<MainEmpty cityActive={'Paris'}/>);
  it('should render correctly', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      notFoundPageWithHistory,
      initialState
    );
    const expectedText = 'We could not find any property available at the moment in Paris';

    render(withStoreComponent);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
