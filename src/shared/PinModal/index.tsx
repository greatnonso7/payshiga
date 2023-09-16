import { Box, Text } from 'design-system';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { BaseModal } from 'shared/BaseModal';
import { Icon } from 'shared/Icon';
import { PinKeyPad } from 'shared/PinKeyPad';
import { Screen } from 'shared/Screen';
import theme from 'theme';
import { deviceHeight, hp, wp } from 'utils';

interface PinModalProps {
  isVisible?: boolean;
  onClose: () => void;
  onComplete: (pin: string) => void;
  isEscrow?: boolean;
}

export const PinModal = ({
  isVisible,
  onClose,
  onComplete,
  isEscrow,
}: PinModalProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pin, setPin] = useState('');

  const onCompletePin = async (completePin: string) => {
    if (isEscrow) {
      if (completePin.length === 6) {
        setPin(completePin);
        setTimeout(() => {
          onComplete(completePin);
        }, 500);
      }
    } else {
      if (completePin.length === 4) {
        setPin(completePin);
        setTimeout(() => {
          onComplete(completePin);
        }, 500);
      }
    }
  };
  return (
    <BaseModal
      visible={isVisible}
      onClose={onClose}
      containerStyles={{ top: -hp(100) }}>
      <Box height={deviceHeight * 1.5}>
        <Screen removeSafeaArea>
          <Box mx={24} top={10}>
            <Box as={TouchableOpacity} activeOpacity={0.8} onPress={onClose}>
              <Icon name="back-arrow" />
            </Box>
            <Text variant="h1" color={theme.colors.PRIMARY} lineHeight={hp(43)}>
              Enter your pin
            </Text>
            <Text
              width={wp(294)}
              color={theme.colors.FAINT_ICON}
              variant={'bodyMedium'}>
              Enter your transaction pin to complete this operation
            </Text>
          </Box>
          <PinKeyPad onComplete={onCompletePin} isEscrow={isEscrow} />
        </Screen>
      </Box>
    </BaseModal>
  );
};
