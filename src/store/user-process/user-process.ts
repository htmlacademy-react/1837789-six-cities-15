import {createSlice} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {NameSpace, AuthorizationStatus} from '../../const';
//import {getToken} from '../../services/token';

//const token = getToken();

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userConnect:  null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    assignauthorizationStatusByDefault: (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, {payload}) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userConnect = payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userConnect = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })

      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});

export const {assignauthorizationStatusByDefault} = userSlice.actions;
