import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {FormEvent, useState, ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {setCityActive} from '../../store/offers-process/offers-process';
import Logo from '../../components/logo/logo';
import {useNavigate} from 'react-router-dom';
import {AppRoute, CITIES_LIST, getRandomInteger, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthData} from '../../types/auth-data';
import {useEffect} from 'react';

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^[A-za-z0-9_]+[A-za-z0-9_]{1,}$/.test(password);

const validate = (formData: AuthData): boolean => {
  if (!validateEmail(formData.email)) {
    return false;
  }

  if (!validatePassword(formData.password)) {
    return false;
  }

  return true;
};

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cityButton = CITIES_LIST[getRandomInteger(0, CITIES_LIST.length - 1)];
  const authStatus = useAppSelector(getAuthorizationStatus);

  const navigate = useNavigate();

  function handlCityButton (city:string) {
    dispatch(setCityActive(city));
  }

  const [isSubmitButtonOk, setIsSubmitButtonOk] = useState(false);
  const [formData, setFormData] = useState<AuthData>({
    email: '',
    password: '',
  });

  const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    if (validate({ ...formData, [name]: value })) {
      setIsSubmitButtonOk(true);
    } else {
      setIsSubmitButtonOk(false);
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      loginAction({
        email: formData.email,
        password: formData.password,
      })
    );
  };
  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--gray page--login" data-testid="page-login">
      <Helmet>
        <title>Six cities. Register!</title>
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
        <div className="page__login-container container" data-testid="page-login-container">
          <section className="login">
            <h1 className="login__title" data-testid="login-title">
              Sign in
            </h1>
            <form
              action="#"
              className="login__form form"
              method="post"
              onSubmit={handleFormSubmit}
              data-testid="login-form"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">
                  E-mail
                </label>
                <input
                  onChange={handleTextChange}
                  value={formData.email}
                  className="login__input form__input"
                  name="email"
                  title="Email, for example test@test.com"
                  placeholder="Email"
                  required
                  type="email"
                  data-testid="email-element"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">
                  Password
                </label>
                <input
                  onChange={handleTextChange}
                  value={formData.password}
                  className="login__input form__input"
                  name="password"
                  title="The password must contain at least one digit or letter"
                  placeholder="Password"
                  required
                  type="password"
                  data-testid="password-element"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isSubmitButtonOk}
                data-testid="login-button-submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item" data-testid="location-item">
              <Link
                className="locations__item-link"
                onClick={() =>
                  handlCityButton(cityButton)}
                to={AppRoute.Main}
                data-testid="location-link"
              >
                <span data-testid="location-city">
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
