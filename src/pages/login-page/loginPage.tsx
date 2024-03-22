import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useRef, FormEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {setCityActive, setChangeMap} from '../../store/offers-process/offers-process';
import Logo from '../../components/logo/logo';
import {AppRoute, cityMap} from '../../const';

function LoginPage(): JSX.Element {
  const cityButton = 'Amsterdam';
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  function onCityButton (city:string) {
    const [cityMapActive] = cityMap.filter((item) => item.title === city);

    dispatch(setCityActive(city));
    dispatch(setChangeMap(cityMapActive));
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }

  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Шесть городов. Зарегистрируйся!</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">
              Sign in
            </h1>
            <form
              action="#"
              className="login__form form"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">
                  E-mail
                </label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
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

export default LoginPage;
