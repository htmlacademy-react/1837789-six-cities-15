import Spinner from './spinner';
import { render, screen } from '@testing-library/react';

describe('Component: Spinner', () => {
  it('should create a spinner', () => {
    const spinnerContainerTestId = 'spinner-container';
    render(<Spinner/>);
    const spinnerContainer = screen.getByTestId(spinnerContainerTestId);
    expect(spinnerContainer).toBeInTheDocument();
  });
});
