import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Box, BoxProps, Text } from 'design-system';
import theme from 'theme';
import { getBottomSpace, hp, wp } from 'utils';
import { Icon } from 'shared';

interface Props extends BoxProps {
  title?: string;
  disabled?: boolean;
  textColor?: string;
  textVariant?: any;
  backgroundColor?: string;
  hasIcon?: string;
  loading?: boolean;
  isNotBottom?: boolean;
  containerStyle?: ViewStyle;
  loadingColor?: string;
}

export const Button = ({
  title,
  disabled,
  textColor,
  textVariant,
  hasIcon,
  backgroundColor,
  loading,
  isNotBottom,
  containerStyle,
  loadingColor,
  ...props
}: Props) => {
  return (
    <Box style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <Box
        disabled={disabled}
        activeOpacity={0.8}
        opacity={disabled ? 0.2 : 1}
        as={TouchableOpacity}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        borderRadius={hp(100)}
        height={hp(46)}
        width={wp(311)}
        backgroundColor={backgroundColor || theme.colors.PRIMARY_BLUE_100}
        {...props}>
        <Box
          flexDirection={'row'}
          alignItems="center"
          justifyContent={'center'}
          alignSelf={'center'}>
          {loading ? (
            <ActivityIndicator
              size={'small'}
              color={loadingColor || theme.colors.WHITE}
            />
          ) : (
            <>
              {hasIcon && (
                <Box top={hp(1)} right={10}>
                  <Icon name={hasIcon} />
                </Box>
              )}
              <Text
                color={textColor || 'white'}
                variant={textVariant || 'headerBold'}>
                {title}
              </Text>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(40) + getBottomSpace(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
