import { Box, Text } from 'design-system';
import React from 'react';
import { TextStyle } from 'react-native';
import theme from 'theme';
import { hp, wp } from 'utils';

interface HeaderTextProps {
  hasHeaderText: string;
  textStyle?: TextStyle;
  hasSubText?: string;
  width?: number;
  textVariant?: 'bodySmall' | 'smallBold';
}

export const HeaderText = ({
  hasHeaderText,
  hasSubText,
  width,
  textVariant,
}: HeaderTextProps) => {
  return (
    <Box px={16}>
      <Text variant="h1" color={theme.colors.PRIMARY} lineHeight={hp(43)}>
        {hasHeaderText}
      </Text>
      {hasSubText && (
        <Text
          width={width || wp(244)}
          color={theme.colors.FAINT_ICON}
          variant={textVariant || 'bodyMedium'}>
          {hasSubText}
        </Text>
      )}
    </Box>
  );
};
