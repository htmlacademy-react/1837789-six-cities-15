import {UserData} from '../types/user-data';

export type User = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

export type UserConnect = UserData & {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};
