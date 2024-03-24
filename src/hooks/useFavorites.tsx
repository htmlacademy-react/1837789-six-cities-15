import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from '../hooks/index';
import {getAuthorizationStatus} from '../store/user-process/selectors';
import {
  AppRoute,
  AuthorizationStatus,
  FavoritesTriggerUpdate,
} from '../const';
import {setFavoritesAction} from '../store/api-actions';

export const useFavorites = (
  offerId: string,
  status: number,
  triggerUpdate: FavoritesTriggerUpdate
) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function onChangeFavorites() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoritesAction({offerId, status, triggerUpdate}));
  }

  return onChangeFavorites;
};
