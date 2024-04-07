import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from './index';
import {getAuthorizationStatus} from '../store/user-process/selectors';
import {
  AppRoute,
  AuthorizationStatus,
} from '../const';
import {setFavoritesAction} from '../store/api-actions';

export const useFavorites = (
  offerId: string,
  status: number,
) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function onChangeFavorites() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoritesAction({offerId, status}));
  }

  return onChangeFavorites;
};
