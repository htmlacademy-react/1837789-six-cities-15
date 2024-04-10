import Nav from './nav';
import {withHistory} from '../../utils/mock-component';
import {render, screen} from '@testing-library/react';

describe('Component: Nav', () => {
  it('should render correctly', () => {
    const navLinkTestId = 'header-link';
    const imageTestId = 'avatar-img-img';
    const preparedComponent = withHistory(<Nav />);

    render(preparedComponent);

    const logoLink = screen.getByTestId(navLinkTestId);
    const image = screen.getByTestId(imageTestId);

    expect(logoLink).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
