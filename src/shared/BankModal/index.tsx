import React, { useState } from 'react';
import { Box, Text } from 'design-system';
import { useSelector } from 'react-redux';
import FuzzySearch from 'fuzzy-search';

import { RootState } from 'redux/store';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import theme from 'theme';
import { deviceWidth, hp, wp } from 'utils';

interface BankModalProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: (selectedBank: {
    bankCode: string;
    bankName: string;
    logo: string;
  }) => void;
}

export const BankModal = ({
  isVisible,
  onClose,
  onComplete,
}: BankModalProps) => {
  const banks = useSelector((state: RootState) => state.Wallet.banks);

  const [searchData, setSearchData] = useState(banks || []);

  const onChange = async (val: string) => {
    console.log(val);
    if (val.length > 0) {
      const searcher = new FuzzySearch(banks, ['bankName'], {
        caseSensitive: false,
      });

      const result = searcher.search(val);
      console.log(result);
      setSearchData(result as any);
    } else {
      setSearchData(banks);
    }
  };

  return (
    <Modal isVisible={isVisible} deviceWidth={deviceWidth}>
      <Box
        backgroundColor={theme.colors.WHITE}
        top={100}
        height={hp(800)}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        width={deviceWidth}
        right={20}>
        <Box
          p={20}
          flexDirection={'row-reverse'}
          as={TouchableOpacity}
          onPress={() => {
            onClose();
            setSearchData(banks);
          }}
          activeOpacity={0.8}>
          <Text>Close </Text>
        </Box>

        <Box mx={20} mb={10}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text: string) => onChange(text)}
            placeholder="Search banks..."
          />
        </Box>
        <FlatList
          data={searchData}
          renderItem={({ item, index }) => {
            return (
              <Box
                as={TouchableOpacity}
                activeOpacity={0.8}
                onPress={() => {
                  onComplete(item);
                  setSearchData(banks);
                }}
                flexDirection={'row'}
                key={index}
                alignItems={'center'}
                px={16}
                py={10}>
                <Image source={{ uri: item?.logo }} style={styles.bankImage} />
                <Text width={280} numberOfLines={1} pl={10}>
                  {item?.bankName}
                </Text>
              </Box>
            );
          }}
        />
      </Box>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bankImage: {
    width: 30,
    height: 30,
  },
  searchInput: {
    height: hp(46),
    width: wp(340),
    paddingHorizontal: wp(16),
    borderRadius: 10,
    fontFamily: theme.font.ManropeRegular,
    fontSize: 14,
    color: theme.colors.PRIMARY,
    borderWidth: 1,
    borderColor: theme.colors.OFF_WHITE,
    alignSelf: 'center',
  },
});
