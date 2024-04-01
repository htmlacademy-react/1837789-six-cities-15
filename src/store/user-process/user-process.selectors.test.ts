import {AuthorizationStatus, NameSpace} from '../../const';
import {UserConnect} from '../../types/user';
import {getAuthorizationStatus, getAuthCheckedStatus, getUser} from '../user-process/selectors';
import {UserProcess} from '../../types/state';
import {
  datatype,
  internet,
} from 'faker';

const makeFakeUserData = (): UserConnect => ({
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
  email: internet.email(),
  token: datatype.string(),
});

const fakeUser = makeFakeUserData();

const fakeState: UserProcess = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: fakeUser,
};

let state = { [NameSpace.User]: fakeState };

describe('selector: getAuthorizationStatus', () => {
  beforeEach(() => {
    state = {[NameSpace.User]: { ...fakeState }};
  });

  describe('selector: selectAuthStatus', () => {
    it('should return auth. status from state', () => {
      const result = getAuthorizationStatus(state);

      expect(result).toEqual(AuthorizationStatus.NoAuth);
    });
  });

  describe('selector: getAuthCheckedStatus', () => {
    it('should return true or false auth. status in the state', () => {
      const result = getAuthCheckedStatus(state);

      expect(result).toEqual(true);
    });
  });

  describe('selector: getUser', () => {
    it('should return user auth. data from state', () => {
      const result = getUser(state);

      expect(result).toEqual(fakeUser);
    });
  });
});


