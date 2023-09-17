import React, { useState } from 'react';
import { Box, Button } from 'design-system';
import { Screen } from 'shared';
import theme from 'theme';
import { wp } from 'utils';
import { ImportantNotice, ReferralCode } from './modals';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';

type Props = StackScreenProps<AuthStackParamList, 'Onboarding'>;

const Onboarding = ({ navigation: { navigate } }: Props) => {
  const [open, setOpen] = useState<'notice' | 'referral' | ''>('');

  const onCompleteNotice = async () => {
    setOpen('');
    setTimeout(() => {
      setOpen('referral');
    }, 1000);
  };

  const onCompleteReferral = async () => {
    setOpen('');
    setTimeout(() => {
      navigate('Signup');
    }, 1000);
  };
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Box position={'absolute'} alignSelf={'center'} bottom={100}>
        <Button
          backgroundColor={'transparent'}
          borderWidth={1}
          borderColor={theme.colors.WHITE}
          mb={20}
          width={wp(247)}
          alignSelf={'center'}
          borderRadius={100}
          title="Login"
          isNotBottom
        />
        <Button
          backgroundColor={theme.colors.WHITE}
          width={wp(247)}
          alignSelf={'center'}
          isNotBottom
          onPress={() => setOpen('notice')}
          borderRadius={100}
          textColor={theme.colors.BLACK}
          title="Create an account"
        />
      </Box>

      <ImportantNotice
        isVisible={open === 'notice'}
        onClose={() => setOpen('')}
        onComplete={onCompleteNotice}
      />

      <ReferralCode
        isVisible={open === 'referral'}
        onClose={() => setOpen('')}
        onComplete={onCompleteReferral}
      />
    </Screen>
  );
};

export default Onboarding;
