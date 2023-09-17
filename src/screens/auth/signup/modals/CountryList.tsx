import React, { useState } from 'react';
import { Box, Text } from 'design-system';
import { Icon } from 'shared';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { flagList } from 'data';
import Modal from 'react-native-modal';
import { deviceWidth, hp, isAndroid, wp } from 'utils';
import theme from 'theme';
import { SelectedCountry } from '../components';
import FuzzySearch from 'fuzzy-search';

interface CountryListProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: (selectedFlag: SelectedCountry) => void;
}

export const CountryList = ({
  isVisible,
  onClose,
  onComplete,
}: CountryListProps) => {
  const [searchData, setSearchData] = useState(flagList || []);

  const onChange = async (val: string) => {
    console.log(val);
    if (val.length > 0) {
      const searcher = new FuzzySearch(flagList, ['title'], {
        caseSensitive: false,
      });

      const result = searcher.search(val);
      console.log(result);
      setSearchData(result as any);
    } else {
      setSearchData(flagList);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      deviceWidth={deviceWidth}>
      <Box
        backgroundColor={theme.colors.TXNBG_BLACK}
        top={100}
        height={hp(800)}
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
        width={deviceWidth}
        right={20}>
        <Box
          width={25}
          height={5}
          top={2}
          alignSelf={'center'}
          borderRadius={100}
          backgroundColor={theme.colors.PLACEHOLDER_BLACK}
        />

        <Box
          mx={24}
          mt={23}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text color={theme.colors.WHITE} variant="headerMedium" fontSize={18}>
            Select Country
          </Text>
          <Box onPress={onClose} as={TouchableOpacity} activeOpacity={0.8}>
            <Icon name="close" />
          </Box>
        </Box>

        <Box
          my={20}
          mx={24}
          px={12}
          flexDirection={'row'}
          height={46}
          borderRadius={16}
          backgroundColor={theme.colors.TXNBTN_BLACK}
          alignItems={'center'}>
          <Icon name="search" />
          <TextInput
            placeholder="Tap the search bar"
            style={styles.inputSearchBar}
            onChangeText={(text: string) => onChange(text)}
            textAlignVertical="center"
            selectionColor={theme.colors.PLACEHOLDER_BLACK}
            placeholderTextColor={theme.colors.PLACEHOLDER_BLACK}
          />
        </Box>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={searchData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Box
                key={index}
                mx={28}
                py={10}
                as={TouchableOpacity}
                onPress={() => onComplete(item)}
                activeOpacity={0.8}
                flexDirection={'row'}
                alignItems={'center'}>
                <Icon name={item.flag} />
                <Text color={theme.colors.WHITE} pl={16} variant="headerMedium">
                  {item.title}
                </Text>
                <Text
                  pl={12}
                  variant="headerMedium"
                  color={theme.colors.ACCENT_GREY_100}>
                  {item.code}
                </Text>
              </Box>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <Box py={180} justifyContent={'center'} alignItems={'center'}>
                <Text variant="headerMedium" color={theme.colors.WHITE}>
                  No search results found
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
  contentContainerStyle: {
    paddingBottom: 100,
  },
  inputSearchBar: {
    marginLeft: wp(8),
    fontSize: hp(16),
    fontFamily: theme.font.ShigaSansMedium,
    top: isAndroid ? 3 : 0,
    color: theme.colors.WHITE,
  },
});
