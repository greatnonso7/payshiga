import React, { useState } from 'react';
import { Box, Button, RegularInput } from 'design-system';
import { Header, HeaderText, PinKeyPad, Screen } from 'shared';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';
import theme from 'theme';
import { CountryPicker } from './components';
import { StyleSheet } from 'react-native';
import { hp } from 'utils';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  phone: string;
}

const schema = yup.object().shape({
  phone: yup.string().required().max(11),
});

type Props = StackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = ({ navigation: { navigate } }: Props) => {
  const [phone, setPhone] = useState('');

  const { control } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: '',
    },
    mode: 'all',
  });
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Header hasBackButton />
      <HeaderText
        hasHeaderText="Test Assessment"
        hasSubText="We will send you a verification code confirm this is your number"
      />
      <Box mx={40} mt={12}>
        <Box mt={10} flexDirection={'row'} alignItems={'center'}>
          <CountryPicker />
          <RegularInput
            control={control}
            editable={false}
            placeholder="812 345 6789"
            value={phone}
            maxLength={11}
            style={styles.phoneInputStyle}
            placeholderTextColor={theme.colors.PLACEHOLDER_BLACK}
          />
        </Box>

        <PinKeyPad
          value={phone}
          onPress={(val: string) => (val.length <= 11 ? setPhone(val) : null)}
        />
      </Box>
      <Button
        backgroundColor={theme.colors.PRIMARY_BLUE_100}
        disabled={phone.length >= 10 ? false : true}
        title="Continue"
        onPress={() => navigate('VerifyOtp')}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  phoneInputStyle: {
    marginLeft: 10,
    fontSize: hp(20),
    fontFamily: theme.font.ShigaSansMedium,
    width: 200,
    color: theme.colors.WHITE,
  },
});

export default Signup;
