import React, { useEffect, useState } from 'react';
import { Box, Text } from 'design-system';
import theme from 'theme';
import { Icon } from 'shared';
import { TouchableOpacity } from 'react-native';
import { CountryList } from '../modals';

export interface SelectedCountry {
  id: number;
  title: string;
  code: string;
  flag: string;
}

export const CountryPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountry>();
  const [show, setShow] = useState<'country' | ''>();

  useEffect(() => {
    setSelectedCountry({
      id: 1,
      title: 'Nigeria',
      code: '+234',
      flag: 'https://hatscripts.github.io/circle-flags/flags/ng.svg',
    });
  }, []);

  const onSelectFlag = async (flag: SelectedCountry) => {
    setSelectedCountry(flag);
    setShow('');
  };
  return (
    <Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        as={TouchableOpacity}
        onPress={() => setShow('country')}
        activeOpacity={0.8}>
        <Text color={theme.colors.WHITE} variant="bodyMedium" fontSize={20}>
          {selectedCountry?.code}
        </Text>
        <Box mx={1}>
          <Icon name="caret-down" />
        </Box>
      </Box>

      <CountryList
        isVisible={show === 'country'}
        onClose={() => setShow('')}
        onComplete={onSelectFlag}
      />
    </Box>
  );
};
