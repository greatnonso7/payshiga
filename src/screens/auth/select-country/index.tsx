import React from 'react';
import { Box, Text } from 'design-system';
import { Header, HeaderText, Icon, Screen } from 'shared';
import theme from 'theme';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { flagList } from 'data';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<AuthStackParamList, 'SelectCountry'>;

const SelectCountry = ({ navigation: { navigate } }: Props) => {
  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Header hasBackButton />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <HeaderText
          hasHeaderText="Country of Residence"
          hasSubText="Terms & service applied to you will depend on your resident country"
        />

        {flagList?.map(item => {
          return (
            <Box
              key={item.id}
              mx={36}
              my={16}
              onPress={() => navigate('ChooseUsername')}
              as={TouchableOpacity}
              activeOpacity={0.8}
              flexDirection={'row'}
              alignItems={'center'}>
              <Icon name={item.flag} />
              <Text color={theme.colors.WHITE} pl={16} variant="headerMedium">
                {item.title}
              </Text>
            </Box>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 100,
  },
});

export default SelectCountry;
