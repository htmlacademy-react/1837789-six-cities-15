import {render, screen} from '@testing-library/react';
import Nav from './nav';
import {withHistory, withStore} from '../../utils/mock-component';
import {makeFakeStore, makeFakeUserData} from '../../utils/fake-mock-by-test';
import {AuthorizationStatus, NameSpace} from '../../const';

describe('Component <UserPanel />', () => {
  const navWithHistory = withHistory(<Nav />);

  it('should render correctly when the user is not authorized', () => {
    const initialState = makeFakeStore();
    const {withStoreComponent} = withStore(
      navWithHistory,
      initialState
    );
    const expectedText = 'Sign in';

    render(withStoreComponent);
    const sighInText = screen.getByText(expectedText);

    expect(sighInText).toBeInTheDocument();
  });

  it('should render correctly when the user is authorized', () => {
    const fakeUser = makeFakeUserData();
    const initialMockState = makeFakeStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userConnect: fakeUser,
      },
    });
    const { withStoreComponent } = withStore(
      navWithHistory,
      initialMockState
    );
    const expectedText = 'Sign out';

    render(withStoreComponent);
    const signOutElement = screen.getByText(expectedText);
    const userEmailElement = screen.getByText(fakeUser.email);

    expect(signOutElement).toBeInTheDocument();
    expect(userEmailElement).toBeInTheDocument();
  });
});

