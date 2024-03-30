import {AuthorizationStatus, NameSpace} from '../../const';
import {UserConnect} from '../../types/user';
import {getAuthorizationStatus} from '../user-process/selectors';

const makeFakeUserData = (): UserConnect => ({
  name: '',
  isPro: true,
  avatarUrl: '',
  email: 'test@mail.com',
  token: '',
});

const fakeUser = makeFakeUserData();

describe('selector: getAuthorizationStatus', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: fakeUser,
    }
  };

  it('should return auth status from state', () => {
    const result = getAuthorizationStatus(state);

    expect(result).toEqual(AuthorizationStatus.NoAuth);
  });
});

