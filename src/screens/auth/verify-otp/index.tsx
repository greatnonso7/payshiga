import React, { useState } from 'react';
import { Box, Button, RegularInput, Text } from 'design-system';
import { Header, HeaderText, Loader, Screen } from 'shared';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import theme from 'theme';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  otp: string;
}

const schema = yup.object().shape({
  otp: yup.string().required().max(6),
});

type Props = StackScreenProps<AuthStackParamList, 'VerifyOtp'>;

const VerifyOtp = ({ navigation: { navigate } }: Props) => {
  const [loading, setLoading] = useState(false);

  const { control, setValue, watch } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      otp: '',
    },
    mode: 'all',
  });

  const { otp } = watch();

  const setOtpText = (value: string) => {
    let formattedText = value.split(' ').join('');

    if (formattedText.length > 0) {
      //@ts-ignore
      formattedText = formattedText?.match(new RegExp('.{1,3}', 'g')).join(' ');
    }

    if (value.length === 7) {
      resend();
    }
    setValue('otp', formattedText);
  };

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
        <RegularInput
          control={control}
          name="otp"
          placeholder="000 000"
          keyboardType="numeric"
          autoFocus
          maxLength={7}
          returnKeyType="done"
          onChangeText={(text: string) => setOtpText(text)}
        />

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

      <Button
        disabled={otp.length === 7 && !loading ? false : true}
        title="Continue"
        onPress={() => navigate('SelectCountry')}
      />
    </Screen>
  );
};

export default VerifyOtp;
