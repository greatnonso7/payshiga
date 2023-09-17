import React from 'react';
import { Box, Button, Text } from 'design-system';
import { BaseModal, Icon } from 'shared';
import theme from 'theme';
import { StyleSheet, TextInput } from 'react-native';

interface ReferralCodeProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const ReferralCode = ({
  isVisible,
  onClose,
  onComplete,
}: ReferralCodeProps) => {
  return (
    <BaseModal visible={isVisible} onClose={onClose}>
      <Box paddingBottom={40} paddingTop={30}>
        <Icon name="referral-code" />

        <Box mx={40} mt={20}>
          <Text variant="headerMedium" color={theme.colors.WHITE} fontSize={20}>
            Enter referral code
          </Text>
          <Text color={theme.colors.ACCENT_GREY_100} variant="header" pt={10}>
            “Skip” if you don’t have any code
          </Text>

          <Box mt={20}>
            <TextInput
              placeholder="CODE"
              autoFocus
              placeholderTextColor={theme.colors.PLACEHOLDER_BLACK}
              style={styles.codeInputStyle}
              keyboardType="numeric"
            />

            <Text pt={15} variant="body" color={theme.colors.ACCENT_GREY_100}>
              TAP to find how they find their code?
            </Text>
          </Box>

          <Box
            mt={30}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Button
              isNotBottom
              backgroundColor={theme.colors.TXNBTN_BLACK}
              width={150}
              title="Skip"
              onPress={onComplete}
              borderRadius={100}
            />
            <Button
              isNotBottom
              backgroundColor={theme.colors.PRIMARY_BLUE_100}
              width={150}
              disabled
              title="Continue"
              borderRadius={100}
            />
          </Box>
        </Box>
      </Box>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  codeInputStyle: {
    fontFamily: theme.font.ShigaSansMedium,
    fontSize: 20,
    color: theme.colors.WHITE,
  },
});
