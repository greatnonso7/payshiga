import React from 'react';
import { Box, Button, Text } from 'design-system';
import { Icon } from 'shared';
import theme from 'theme';
import { hp, wp } from 'utils';

export const BalanceContainer = () => {
  return (
    <Box
      p={16}
      backgroundColor={theme.colors.APP_BLACK}
      mx={wp(20)}
      borderRadius={hp(16)}
      mt={hp(16)}>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text variant="headerMedium" color={theme.colors.WHITE}>
          NGN Balance
        </Text>

        <Box
          px={2}
          py={2}
          flexDirection={'row'}
          alignItems={'center'}
          borderRadius={32}
          backgroundColor={theme.colors.OFF_BLACK}>
          <Icon name="ng" />
          <Box ml={2}>
            <Icon name="arrow-down" />
          </Box>
        </Box>
      </Box>
      <Text
        pt={12}
        variant="h2"
        color={theme.colors.WHITE}
        fontFamily={theme.font.ShigaSansBold}>
        ₦95,800.05
      </Text>

      <Box
        flexDirection={'row'}
        mt={32}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Button
          isNotBottom
          height={45}
          width={wp(145)}
          title="Add money"
          backgroundColor={theme.colors.PLACEHOLDER_BLACK}
        />
        <Button
          isNotBottom
          height={45}
          width={wp(145)}
          backgroundColor={theme.colors.PLACEHOLDER_BLACK}
          title="Transfer"
        />
      </Box>
    </Box>
  );
};
