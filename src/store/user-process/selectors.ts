import {State} from '../../types/state';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserConnect} from '../../types/user';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: Pick<State, NameSpace.User>): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUser = (state: Pick<State, NameSpace.User>): UserConnect | null =>
  state[NameSpace.User].userConnect;
