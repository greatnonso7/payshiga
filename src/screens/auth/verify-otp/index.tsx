import React, { useState } from 'react';
import { Box, Text } from 'design-system';
import { Header, HeaderText, Loader, Screen } from 'shared';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import theme from 'theme';
import { TextInput } from 'react-native';

type Props = StackScreenProps<AuthStackParamList, 'VerifyOtp'>;

const VerifyOtp = ({ navigation: { navigate } }: Props) => {
  const [loading, setLoading] = useState(false);

  const resend = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Header hasBackButton />
      <HeaderText
        hasHeaderText="We sent you a code"
        hasSubText="Enter the code we sent to your number"
      />

      <Box mt={40} mx={40}>
        <TextInput />

        <Box mt={20}>
          <Text variant="bodyMedium" color={theme.colors.ACCENT_GREY_100}>
            Didn't get the code?{' '}
            <Text
              color={theme.colors.PRIMARY_BLUE_100}
              variant="bodyMedium"
              onPress={() => resend()}>
              Resend
            </Text>
          </Text>
        </Box>
        <Loader loading={loading} />
      </Box>
    </Screen>
  );
};

export default VerifyOtp;
