import {render, screen} from '@testing-library/react';
import Favorites from './favorites';
import { withHistory, withStore } from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component <Favorites />', () => {
  const userPanelWithHistory = withHistory(<Favorites />);

  it('should render correctly when there are featured offers', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      userPanelWithHistory,
      initialState
    );
    const expectedText = 'Saved listing';

    render(withStoreComponent);
    const sighInText = screen.getByText(expectedText);

    expect(sighInText).toBeInTheDocument();
  });
});

