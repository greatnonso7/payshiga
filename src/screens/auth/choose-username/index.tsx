import React, { useState } from 'react';
import { Box, Button, RegularInput } from 'design-system';
import { Header, HeaderText, Loader, Screen } from 'shared';
import theme from 'theme';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  username: string;
}

const schema = yup.object().shape({
  username: yup.string().required().max(6),
});

type Props = StackScreenProps<AuthStackParamList, 'ChooseUsername'>;

const ChooseUsername = ({ navigation: { navigate } }: Props) => {
  const [loading, setLoading] = useState(false);
  const { control, setValue, watch } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
    },
    mode: 'all',
  });

  const { username } = watch();

  const setUsernameText = (value: string) => {
    let formattedText = value.split(' ').join('');

    setTimeout(() => {
      resend();
    }, 1000);
    setValue('username', formattedText);
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
        hasHeaderText="Choose a Shiga ID"
        hasSubText="Your unique name for getting paid by anyone"
      />
      <Box mt={40} mx={40}>
        <RegularInput
          control={control}
          name="username"
          isUsername
          autoCapitalize="none"
          placeholder="Enter shiga ID"
          autoFocus
          onChangeText={(text: string) => setUsernameText(text)}
        />
        <Box mt={20}>
          <Loader loading={loading} />
        </Box>
      </Box>

      <Button
        disabled={username && !loading ? false : true}
        title="Continue"
        onPress={() => navigate('SetDisplay', { username })}
      />
    </Screen>
  );
};

export default ChooseUsername;
