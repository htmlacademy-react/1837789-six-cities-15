import Logo from './logo';
import {withHistory} from '../../utils/mock-component';
import {render, screen} from '@testing-library/react';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const logoLinkTestId = 'header-link';
    const imageTestId = 'logo-img';
    const preparedComponent = withHistory(<Logo />);

    render(preparedComponent);

    const logoLink = screen.getByTestId(logoLinkTestId);
    const image = screen.getByTestId(imageTestId);

    expect(logoLink).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
