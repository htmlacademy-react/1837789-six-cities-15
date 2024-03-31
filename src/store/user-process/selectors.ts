import {State} from '../../types/state';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserConnect} from '../../types/user';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUser = (state: State): UserConnect | null =>
  state[NameSpace.User].user;
