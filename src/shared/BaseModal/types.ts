import { ViewStyle } from 'react-native';

export interface BaseModalProps {
  visible?: boolean;
  children?: any;
  onClose: () => void;
  containerStyles?: ViewStyle;
  removeBackTap?: boolean;
  headerText?: string;
  showHeader?: boolean;
}
