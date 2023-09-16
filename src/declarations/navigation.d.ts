import { RootStackParamList } from 'types';

export type StackParamsList = RootStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
