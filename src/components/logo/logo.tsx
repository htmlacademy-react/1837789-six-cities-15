import {Link} from 'react-router-dom';

function Logo(): JSX.Element {

  return (
    <Link className="header__logo-link header__logo-link--active" to="/" data-testid="header-link">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
        data-testid="logo-img"
      />
    </Link>
  );
}

export default Logo;
