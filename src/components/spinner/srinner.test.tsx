import {render, screen} from '@testing-library/react';
import Spinner from './spinner';

describe('Component <Spinner />:', () => {
  it('should render correctly', () => {
    const spinnerContainerId = 'spinner-container';
    const component = <Spinner />;

    render(component);
    const spinnerContainer = screen.getByTestId(spinnerContainerId);

    expect(spinnerContainer).toBeInTheDocument();
  });
});
