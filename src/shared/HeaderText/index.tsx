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
    <Box px={40}>
      <Text
        variant="h4"
        fontSize={26}
        color={theme.colors.WHITE}
        lineHeight={hp(43)}>
        {hasHeaderText}
      </Text>
      {hasSubText && (
        <Text
          width={width || wp(244)}
          color={theme.colors.ACCENT_GREY_100}
          fontSize={16}
          variant={textVariant || 'headerMedium'}>
          {hasSubText}
        </Text>
      )}
    </Box>
  );
};
