import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import {withHistory} from '../../utils/withHistory';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404. Page not found';
    const expectedLinkText = 'Go back to the main page.';

    render(withHistory(<NotFoundPage />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
