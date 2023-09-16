import React, { useState } from 'react';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { Box, Text } from 'design-system';
import { Icon } from 'shared';
import { hp, wp } from 'utils';
import { TouchableOpacity } from 'react-native';

interface PinKeyPadProps {
  onComplete?: (value: string) => void;
  isEscrow?: boolean;
}

export const PinKeyPad = ({ onComplete, isEscrow }: PinKeyPadProps) => {
  const [pin, setPin] = useState('');

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  const firstRow = ['1', '2', '3'];
  const secondRow = ['4', '5', '6'];
  const thirdRow = ['7', '8', '9'];
  const fourthRow = ['faceId', '0', 'del'];

  const onLongPress = (item: any) => {
    RNReactNativeHapticFeedback.trigger('impactMedium', options);

    if (item === 'del') {
      setPin('');
    }
  };

  const onPressButton = async (item: string) => {
    RNReactNativeHapticFeedback.trigger('impactMedium', options);
    let completePin;
    if (item === 'del') {
      setPin(pin?.slice(0, -1));
      // setErrorPin();
      return;
    }
    if (item === 'pin') {
      return;
    }

    if (isEscrow) {
      if (pin.length < 7) {
        setPin(pin + item);
      }

      completePin = pin + item;
      if (completePin.length === 6) {
        onComplete && onComplete(completePin);
      }
    } else {
      if (pin?.length < 5) {
        setPin(pin + item);
      }

      completePin = pin + item;
      if (completePin.length === 4) {
        onComplete && onComplete(completePin);
      }
    }
  };

  return (
    <Box mt={80}>
      <Box
        width={isEscrow ? wp(330) : wp(250)}
        height={hp(50)}
        flexDirection={'row'}
        alignItems={'center'}
        alignSelf={'center'}
        justifyContent={'space-between'}>
        {(isEscrow ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4]).map((item, index) => {
          let hasCompleted = pin?.length >= index + 1;
          return (
            <Box key={index}>
              <Icon name={hasCompleted ? 'active-pin' : 'empty-pin'} />
            </Box>
          );
        })}
      </Box>
      <Box
        flexDirection={'row'}
        mt={90}
        mx={20}
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
                <Text fontSize={60} variant="h1">
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
                <Text fontSize={60} variant="h1">
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
                <Text fontSize={60} variant="h1">
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
                    <Icon name="arrow-left" />
                  ) : item === '0' ? (
                    <Text fontSize={60} variant="h1">
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
