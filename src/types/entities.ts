import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  AppDashboard: NavigatorScreenParams<DashboardStackParamList>;
};

export type AuthStackParamList = {
  Onboarding: undefined;
};

export type DashboardStackParamList = {
  Dashboard: BottomTabStackParamList;
};

export type BottomTabStackParamList = {
  Home: undefined;
  Transactions: undefined;
  Search: undefined;
  Card: undefined;
  Profile: undefined;
};

export type PhoneCountry = {
  id?: number;
  name: string;
  flag?: string;
  code?: string | number;
  dial_code?: string;
};
