import {UserData} from '../types/user-data';

export type User = UserData & {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};
