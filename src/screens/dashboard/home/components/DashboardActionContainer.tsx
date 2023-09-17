import React from 'react';
import { Box, Text } from 'design-system';
import { Icon } from 'shared';
import theme from 'theme';
import { TouchableOpacity } from 'react-native';

interface DashboardActionContainerProps {
  item: {
    id: number;
    icon: string;
    title: string;
    description: string;
  };
}

export const DashboardActionContainer = ({
  item,
}: DashboardActionContainerProps) => {
  return (
    <Box
      flexDirection={'row'}
      py={24}
      as={TouchableOpacity}
      activeOpacity={0.8}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Box
          p={10}
          borderRadius={12}
          backgroundColor={theme.colors.PURPLE_TEXT}
          justifyContent={'center'}
          alignItems={'center'}>
          <Icon name={item.icon} />
        </Box>

        <Box ml={16}>
          <Text variant="headerMedium" color={theme.colors.WHITE}>
            {item.title}
          </Text>
          <Text variant="header" color={theme.colors.ACCENT_GREY_100}>
            {item.description}
          </Text>
        </Box>
      </Box>
      <Icon name="option" />
    </Box>
  );
};
