import {AuthorizationStatus, NameSpace} from '../../const';
import {UserConnect} from '../../types/user';
import {getAuthorizationStatus} from '../user-process/selectors';

const makeFakeUserData = (): UserConnect => ({
  name: '1',
  isPro: true,
  avatarUrl: '2',
  email: 'test@mail.com',
  token: '3',
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

    expect(result).toBe('NO_AUTH');
  });
});
