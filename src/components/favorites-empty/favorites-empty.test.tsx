import {render, screen} from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';

describe('Component <FavoritesEmpty />', () => {
  const userPanelWithHistory = withHistory(<FavoritesEmpty />);

  it('should render correctly when here are no featured offers', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      userPanelWithHistory,
      initialState
    );
    const expectedText = 'Nothing yet saved.';

    render(withStoreComponent);
    const sighInText = screen.getByText(expectedText);

    expect(sighInText).toBeInTheDocument();
  });
});

