import React from 'react';
import { Box, Text } from 'design-system';
import theme from 'theme';
import { Icon } from 'shared';
import { hp, wp } from 'utils';
import { TouchableOpacity } from 'react-native';

interface DashboardOptionProps {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
    hasCurrency: boolean;
  };
}

export const DashboardOption = ({ item }: DashboardOptionProps) => {
  return (
    <Box
      py={20}
      px={16}
      as={TouchableOpacity}
      activeOpacity={0.8}
      borderRadius={hp(16)}
      backgroundColor={theme.colors.ALT_BLACK}
      width={wp(160)}>
      <Box>
        <Box
          width={52}
          height={52}
          backgroundColor={theme.colors.OFF_BLACK_100}
          borderRadius={100}
          justifyContent={'center'}
          alignItems={'center'}>
          <Icon name={item.icon} />
        </Box>
        {item.hasCurrency && (
          <Box
            position={'absolute'}
            bottom={-5}
            left={30}
            borderWidth={2}
            borderColor={theme.colors.BG_MAIN_BLACK}
            borderRadius={100}>
            <Icon name="ng" />
          </Box>
        )}
      </Box>

      <Box mt={40}>
        <Text variant="headerMedium" color={theme.colors.WHITE}>
          {item.title}
        </Text>
        <Text color={theme.colors.SUBTEXT}>{item.description}</Text>
      </Box>
    </Box>
  );
};
