import React from 'react';
import { Box, Text } from 'design-system';
import { Header, Screen } from 'shared';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';
import theme from 'theme';
import { SvgUri } from 'react-native-svg';
import { CountryPicker } from './components';
import { StyleSheet, TextInput } from 'react-native';
import { isAndroid } from 'utils';

type Props = StackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = ({ navigation: { navigate } }: Props) => {
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Header hasBackButton />

      <Box mx={40} mt={12}>
        <Text color={theme.colors.WHITE} variant="h4" fontSize={26}>
          Test Assessment
        </Text>
        <Text
          color={theme.colors.ACCENT_GREY_100}
          variant="header"
          pt={10}
          width={295}>
          We will send you a verification code confirm this is your number
        </Text>

        <Box mt={30} flexDirection={'row'} alignItems={'center'}>
          <CountryPicker />
          <TextInput
            editable={false}
            placeholder="812 345 6789"
            style={styles.phoneInputStyle}
            placeholderTextColor={theme.colors.PLACEHOLDER_BLACK}
          />
        </Box>
      </Box>
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
  },
});

export default Signup;
