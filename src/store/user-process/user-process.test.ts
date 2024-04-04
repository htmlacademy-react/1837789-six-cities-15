import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {AuthorizationStatus} from '../../const';
import {makeFakeUserData} from '../../utils/fakeMockByTest';
import {UserProcess} from '../../types/state';
import {userSlice} from './user-process';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userConnect: null,
};

let state: UserProcess;

describe('Slice user-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: UserProcess = { ...initialState };

    const result = userSlice.reducer(initialState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: UserProcess = { ...initialState };

    const result = userSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  describe('checkAuthAction test', () => {
    it('checkAuthAction fulfilled', () => {
      const fakeUser = makeFakeUserData();
      const expectedState: UserProcess = {
        ...initialState,
        authorizationStatus: AuthorizationStatus.Auth,
        userConnect: fakeUser,
      };

      expect(
        userSlice.reducer(state, {
          type: checkAuthAction.fulfilled.type,
          payload: fakeUser,
        })
      ).toEqual(expectedState);
    });

    it('checkAuthAction rejected', () => {
      const expectedState: UserProcess = {
        ...initialState,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };

      expect(
        userSlice.reducer(state, {
          type: checkAuthAction.rejected,
        })
      ).toEqual(expectedState);
    });
  });

  describe('loginAction test', () => {
    it('loginAction fulfilled', () => {
      const fakeUser = makeFakeUserData();
      const expectedState: UserProcess = {
        ...initialState,
        authorizationStatus: AuthorizationStatus.Auth,
        userConnect: fakeUser,
      };

      expect(
        userSlice.reducer(state, {
          type: loginAction.fulfilled.type,
          payload: fakeUser,
        })
      ).toEqual(expectedState);
    });

    it('loginAction rejected', () => {
      const expectedState: UserProcess = {
        ...initialState,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };

      expect(
        userSlice.reducer(state, {
          type: loginAction.rejected,
        })
      ).toEqual(expectedState);
    });
  });

  describe('logoutAction test', () => {
    it('logoutAction fulfilled', () => {
      const expectedState: UserProcess = {
        ...initialState,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };

      expect(
        userSlice.reducer(state, {
          type: logoutAction.fulfilled.type,
        })
      ).toEqual(expectedState);
    });
  });
});
