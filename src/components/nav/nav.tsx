import {NavLink, Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {AuthorizationStatus, AppRoute} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import {getFavoritesLength} from '../../store/favorites-process/selectors';
import styles from './nav.module.css';
import {assignauthorizationStatusByDefault} from '../../store/user-process/user-process';

function Nav(): JSX.Element {
  const authorizationStatusActive = useAppSelector(getAuthorizationStatus);
  const userConnect = useAppSelector(getUser);
  const favoriteCardsLength = useAppSelector(getFavoritesLength);
  const isLogged = authorizationStatusActive === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logoutAction());
    dispatch(assignauthorizationStatusByDefault());
  };

  return (
    <nav className="header__nav">
      {isLogged ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <NavLink
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
              data-testid="header-link"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img src={userConnect?.avatarUrl} data-testid="avatar-img" />
              </div>
              <span className="header__user-name user__name">
                {userConnect?.email}
              </span>
              <span className="header__favorite-count">{favoriteCardsLength.toString()}</span>
            </NavLink>
          </li>
          <li className="header__nav-item">
            <button className={`header__nav-link ${styles.resetStyleButton}`}
              onClick={handleClick}
            >
              <span className="header__signout">Sign out</span>
            </button>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li
            className="header__nav-item user"
          >
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
