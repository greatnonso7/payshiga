import React, { useState } from 'react';
import { Box, Button } from 'design-system';
import { Screen } from 'shared';
import theme from 'theme';
import { wp } from 'utils';
import { ImportantNotice } from './modals';

const Onboarding = () => {
  const [open, setOpen] = useState<'notice' | ''>('');
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
      />
    </Screen>
  );
};

export default Onboarding;
