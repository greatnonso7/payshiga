import React, { useState } from 'react';
import { Box, Button, Text } from 'design-system';
import { Header, HeaderText, Icon, Screen } from 'shared';
import theme from 'theme';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { customizeProfile } from 'data';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { capitalizeFirstLetter } from 'utils';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

type Props = StackScreenProps<AuthStackParamList, 'SetDisplay'>;

const SetDisplay = ({ navigation: { navigate } }: Props) => {
  const [imageType, setImageType] = useState<'color' | 'image' | ''>('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState<Asset>();

  const { params } = useRoute<RouteProp<AuthStackParamList, 'SetDisplay'>>();

  const setActiveProfile = async (item: { id: number; title: string }) => {
    setImageType('color');
    setImage(item.title);
  };
  const openMediaLibrary = async () => {
    const options: ImageLibraryOptions = {
      maxWidth: 250,
      maxHeight: 250,
      mediaType: 'photo',
      includeBase64: true,
    };
    const result = await launchImageLibrary(options);

    const doc: Asset | undefined = result?.assets?.[0];
    setImageType('image');
    setImage('');
    setFile(doc);
  };

  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.BLACK}>
      <Header hasBackButton />
      <HeaderText
        hasHeaderText="Set a display image"
        hasSubText="Choose a image for your wallet profile. You can always change this later"
        width={300}
      />
      <Box
        mt={40}
        justifyContent={'center'}
        alignItems={'center'}
        alignSelf={'center'}
        width={158}
        height={158}>
        {imageType === 'color' ? (
          <Box
            backgroundColor={image}
            width={158}
            height={158}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={100}>
            <Text color={theme.colors.WHITE} variant="h2" fontSize={72}>
              {capitalizeFirstLetter(params.username?.slice(0, 1))}
            </Text>
          </Box>
        ) : imageType === 'image' ? (
          <Image
            source={{ uri: file?.uri }}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        ) : (
          <Icon name="display-image" />
        )}
        <Box
          position={'absolute'}
          right={2}
          p={12}
          onPress={() => openMediaLibrary()}
          as={TouchableOpacity}
          activeOpacity={0.8}
          bottom={-2}
          backgroundColor={theme.colors.PLACEHOLDER_BLACK}
          borderRadius={100}>
          <Icon name="image-icon" />
        </Box>
      </Box>
      <Text
        color={theme.colors.WHITE}
        pt={56}
        textAlign={'center'}
        variant="bodyMedium">
        Or customize
      </Text>
      <Box justifyContent={'center'} alignItems={'center'} mt={40}>
        <FlatList
          numColumns={4}
          data={customizeProfile}
          renderItem={({ item }) => {
            return (
              <Box
                key={item.id}
                width={56}
                as={TouchableOpacity}
                activeOpacity={0.8}
                borderRadius={100}
                height={56}
                onPress={() => setActiveProfile(item)}
                m={16}
                justifyContent={'center'}
                alignItems={'center'}
                backgroundColor={item.title}>
                {image === item?.title && <Icon name="tick" />}
              </Box>
            );
          }}
        />
      </Box>

      <Button title="Continue" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 158,
    height: 158,
    borderRadius: 100,
  },
});

export default SetDisplay;
