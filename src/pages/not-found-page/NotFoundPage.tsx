import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks';
import {setCityActive, setChangeMap} from '../../store/offers-process/offers-process';

function NotFoundPage(): JSX.Element {
  const cityButton = 'Paris';
  const dispatch = useAppDispatch();

  function onCityButton (city:string) {
    dispatch(setCityActive(city));
    dispatch(setChangeMap());
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities. Page not found.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">
              404. Page not found
            </h1>
            <Link to="/">Go back to the main page.</Link>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                onClick={() =>
                  onCityButton(cityButton)}
                to={AppRoute.Main}
              >
                <span>
                  {cityButton}
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
