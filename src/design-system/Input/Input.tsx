import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Controller, ControllerRenderProps } from 'react-hook-form';
import Box, { BoxProps } from '../Box';
import Text from '../Text';
import { InputBaseProps } from './types';
import theme from 'theme';
import styles from './style';

interface RegularInputProps extends InputBaseProps, TextInputProps {
  type?: 'regular';
  containerProps?: BoxProps;
  baseContainerStyle?: ViewStyle;
  textInputContainerStyle?: any;
  password?: boolean;
  onPressPasswordIcon?: () => void;
  isDropDown?: boolean;
  onPressDropDown?: () => void;
  isUsername?: boolean;
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
  name = '',
  type = 'regular',
  baseContainerStyle,
  isDropDown,
  onPressDropDown,
  isUsername,
  textInputContainerStyle,
  ...props
}: RegularInputProps) => {
  const regularInput = ({ onChange, onBlur, value }: ControllerRenderProps) => {
    return (
      <Box
        // px={16}
        activeOpacity={0.8}
        height={46}
        onPress={onPressDropDown}
        as={isDropDown ? TouchableOpacity : View}
        style={[styles.baseContainer, baseContainerStyle]}>
        {isUsername && (
          <Text
            variant="bodyMedium"
            fontFamily={theme.font.ShigaSansBold}
            color={theme.colors.PLACEHOLDER_BLACK}
            fontSize={20}>
            @
          </Text>
        )}
        <TextInput
          style={[styles.textInput, textInputContainerStyle]}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          selectionColor={theme.colors.PLACEHOLDER_BLACK}
          editable={isDropDown ? false : true}
          placeholderTextColor={theme.colors.PLACEHOLDER_BLACK}
          {...props}
        />
      </Box>
    );
  };

  const componentMap: ComponentMapType = {
    regular: regularInput,
  };

  return (
    <Box {...containerProps}>
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
      </Box>
    </Box>
  );
};
