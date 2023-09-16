import React from 'react';
import { Box } from 'design-system';
import { Icon } from 'shared';
import { headerProps } from './types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { populateHitSlop } from 'utils';

export const Header = ({
  hasBackButton,
  hasRightIcon,
  onPressLeftIcon,
  onPressRightIcon,
  containerProps,
}: headerProps) => {
  const navigation = useNavigation<any>();

  const renderHeaderLeft = () => {
    if (hasBackButton) {
      return (
        <Box
          as={TouchableOpacity}
          activeOpacity={0.8}
          position={'absolute'}
          left={0}
          onPress={() =>
            onPressLeftIcon ? onPressLeftIcon() : navigation.goBack()
          }
          hitSlop={populateHitSlop(5)}>
          <Box>
            <Icon name="back-arrow" />
          </Box>
        </Box>
      );
    }
  };

  const renderHeaderRight = () => {
    if (hasRightIcon) {
      return (
        <Box
          position={'absolute'}
          right={0}
          onPress={onPressRightIcon}
          hitSlop={populateHitSlop(5)}
          activeOpacity={0.8}
          as={TouchableOpacity}>
          {hasRightIcon}
        </Box>
      );
    }
  };

  return (
    <Box>
      <Box {...containerProps} px={16}>
        <Box
          height={55}
          alignItems={'center'}
          flexDirection={'row'}
          justifyContent={'center'}>
          {renderHeaderLeft()}
          {renderHeaderRight()}
        </Box>
      </Box>
    </Box>
  );
};
