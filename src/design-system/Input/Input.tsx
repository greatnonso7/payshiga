/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Controller, ControllerRenderProps } from 'react-hook-form';
import Box, { BoxProps } from '../Box';
import Text from '../Text';
import { InputBaseProps } from './types';
import theme from 'theme';
import styles from './style';
import { hp, wp } from 'utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'shared';

interface RegularInputProps extends InputBaseProps, TextInputProps {
  type?: 'regular';
  containerProps?: BoxProps;
  baseContainerStyle?: ViewStyle;
  hasIcon?: string;
  textInputContainerStyle?: any;
  noForgot?: boolean;
  password?: boolean;
  onPressPasswordIcon?: () => void;
  isDropDown?: boolean;
  onPressDropDown?: () => void;
  isTag?: boolean;
  isLoading?: boolean;
  isAvailable?: boolean;
  isAmount?: boolean;
}

interface ComponentMapType {
  [index: string]: ({
    onChange,
    onBlur,
    value,
  }: any) => JSX.Element | JSX.Element[];
}

export const RegularInput = ({
  containerProps,
  control,
  errorText,
  label,
  name = '',
  type = 'regular',
  baseContainerStyle,
  noForgot,
  hasIcon,
  onPressPasswordIcon,
  password,
  isDropDown,
  onPressDropDown,
  isTag,
  isLoading,
  isAvailable,
  textInputContainerStyle,
  isAmount,
  ...props
}: RegularInputProps) => {
  const regularInput = ({ onChange, onBlur, value }: ControllerRenderProps) => {
    return (
      <Box
        px={16}
        activeOpacity={0.8}
        onPress={onPressDropDown}
        as={isDropDown ? TouchableOpacity : View}
        style={[
          styles.baseContainer,
          baseContainerStyle,
          Boolean(errorText) && styles.errorContainer,
        ]}>
        {hasIcon && <Icon name={hasIcon} />}
        {isTag && (
          <Text variant="bodySmall" pr={1}>
            @
          </Text>
        )}
        {isAmount && (
          <Text variant="bodyBold" pr={1}>
            ₦
          </Text>
        )}
        <TextInput
          style={[
            styles.textInput,
            textInputContainerStyle,
            { paddingLeft: hasIcon ? wp(10) : 0 },
          ]}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          editable={isDropDown ? false : true}
          placeholderTextColor={theme.colors.FAINT_ICON}
          {...props}
        />
        {password && (
          <Box
            as={TouchableOpacity}
            activeOpacity={0.8}
            onPress={onPressPasswordIcon}>
            <Icon name="eye-slash" />
          </Box>
        )}
        {isDropDown && (
          <Box
            as={TouchableOpacity}
            onPress={onPressDropDown}
            activeOpacity={0.8}>
            <Icon name="arrow-down" />
          </Box>
        )}
        {isLoading && (
          <ActivityIndicator size={'small'} color={theme.colors.PRIMARY} />
        )}
        {isAvailable && <Icon name="tick-circle" />}
      </Box>
    );
  };

  const componentMap: ComponentMapType = {
    regular: regularInput,
  };

  const navigation = useNavigation<any>();

  return (
    <Box {...containerProps}>
      {label && (
        <Text
          variant="body"
          pb={10}
          fontSize={hp(14)}
          color={theme.colors.FAINT_ICON}
          fontFamily={theme.font.MulishMedium}>
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>{componentMap[type]({ onChange, onBlur, value })}</View>
        )}
      />
      <Box flexDirection={'row'}>
        {errorText && (
          <Text variant="bodySmall" top={1} color="red">
            {errorText}
          </Text>
        )}
        {props?.secureTextEntry && noForgot && (
          <Box
            as={TouchableOpacity}
            onPress={() => navigation.navigate('ForgotPassword')}
            activeOpacity={0.8}
            position={'absolute'}
            right={0}
            top={2}>
            <Text variant="bodyBold" color={theme.colors.FAINT_ICON}>
              Forgot password?
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
