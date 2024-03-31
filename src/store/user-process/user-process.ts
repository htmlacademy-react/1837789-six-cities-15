import {createSlice} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {NameSpace, AuthorizationStatus} from '../../const';
import {getToken} from '../../services/token';

const token = getToken();

const initialState: UserProcess = {
  authorizationStatus: token
    ? AuthorizationStatus.Auth
    : AuthorizationStatus.Unknown,
  user:  null
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, {payload}) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        const userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;

        if (userData) {
          state.user = userData;
        }
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
