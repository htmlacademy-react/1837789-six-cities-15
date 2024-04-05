import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {fetchOffersAction} from '../../store/api-actions';

function Logo(): JSX.Element {
  const dispatch = useAppDispatch();
  function changeOffers () {
    dispatch(fetchOffersAction());
  }

  return (
    <Link className="header__logo-link header__logo-link--active" to="/" data-testid="header-link" onClick={() => changeOffers()}>
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
