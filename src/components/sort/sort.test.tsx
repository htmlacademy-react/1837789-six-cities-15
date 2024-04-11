import {render, screen} from '@testing-library/react';
import {withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/fake-mock-by-test';
import Sort from './sort';

describe('Component <Sorting />:', () => {
  it('should render correctly', () => {
    const expectedText = 'Top rated first';
    const {withStoreComponent} = withStore(<Sort />, makeFakeStore());

    render(withStoreComponent);
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
