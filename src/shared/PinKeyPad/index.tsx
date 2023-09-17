import React from 'react';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { Box, Text } from 'design-system';
import { Icon } from 'shared';
import { TouchableOpacity } from 'react-native';
import theme from 'theme';

interface PinKeyPadProps {
  onPress: (val: string) => void;
  value: string;
}

export const PinKeyPad = ({ onPress, value }: PinKeyPadProps) => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  const firstRow = ['1', '2', '3'];
  const secondRow = ['4', '5', '6'];
  const thirdRow = ['7', '8', '9'];
  const fourthRow = ['', '0', 'del'];

  const onLongPress = (item: any) => {
    RNReactNativeHapticFeedback.trigger('impactMedium', options);

    if (item === 'del') {
      onPress?.('');
    }
  };

  const onPressButton = async (val: string) => {
    RNReactNativeHapticFeedback.trigger('impactMedium', options);
    const lastChar = value?.charAt(value.length - 1);

    const isDotValue = lastChar === '.' && val === '.';

    if (val === 'del') {
      return onPress?.(value?.slice(0, -1));
    }

    const newValue = `${value}${val}`;
    const splitValue = newValue.split('.');
    const decimalLength = splitValue[1]?.length;

    if (
      newValue.length < 12 &&
      !isDotValue &&
      (!decimalLength || decimalLength < 3)
    ) {
      onPress?.(newValue);
    }
  };

  return (
    <Box mt={50}>
      <Box
        flexDirection={'row'}
        mt={90}
        alignItems={'flex-start'}
        justifyContent={'space-between'}>
        <Box flex={1}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={40}>
            {firstRow.map((item, index) => (
              <Box
                as={TouchableOpacity}
                onPress={() => onPressButton(item)}
                key={index}
                activeOpacity={0.8}
                width={82}
                height={54}
                borderRadius={16}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text fontSize={60} variant="h2" color={theme.colors.WHITE}>
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={40}>
            {secondRow.map((item, index) => (
              <Box
                as={TouchableOpacity}
                onPress={() => onPressButton(item)}
                key={index}
                activeOpacity={0.8}
                width={82}
                height={54}
                borderRadius={16}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text fontSize={60} variant="h2" color={theme.colors.WHITE}>
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={40}>
            {thirdRow.map((item, index) => (
              <Box
                as={TouchableOpacity}
                onPress={() => onPressButton(item)}
                key={index}
                activeOpacity={0.8}
                width={82}
                height={54}
                borderRadius={16}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text fontSize={60} variant="h2" color={theme.colors.WHITE}>
                  {item}
                </Text>
              </Box>
            ))}
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={40}>
            {fourthRow.map((item, index) => {
              return (
                <Box
                  as={TouchableOpacity}
                  onPress={() => onPressButton(item)}
                  onLongPress={() => onLongPress(item)}
                  key={index}
                  activeOpacity={0.8}
                  width={82}
                  height={54}
                  borderRadius={16}
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}>
                  {item === 'del' ? (
                    <Icon name="back-icon" />
                  ) : item === '0' ? (
                    <Text fontSize={60} variant="h2" color={theme.colors.WHITE}>
                      {item}
                    </Text>
                  ) : null}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
