import React, { useState } from 'react';
import { Box, Button } from 'design-system';
import { Header, HeaderText, PinKeyPad, Screen } from 'shared';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';
import theme from 'theme';
import { CountryPicker } from './components';
import { StyleSheet, TextInput } from 'react-native';
import { isAndroid } from 'utils';

type Props = StackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = ({ navigation: { navigate } }: Props) => {
  const [phone, setPhone] = useState('');
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Header hasBackButton />
      <HeaderText
        hasHeaderText="Test Assessment"
        hasSubText="We will send you a verification code confirm this is your number"
      />
      <Box mx={40} mt={12}>
        <Box mt={30} flexDirection={'row'} alignItems={'center'}>
          <CountryPicker />
          <TextInput
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
    fontSize: 20,
    fontFamily: theme.font.SFProRoundedMedium,
    width: 200,
    top: isAndroid ? 6 : 0,
    color: theme.colors.WHITE,
  },
});

export default Signup;
