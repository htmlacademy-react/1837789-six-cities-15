import {AxiosInstance} from 'axios';
import {AppDispatch, State} from './state';

export type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
