import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import theme from 'theme';

export function Loader(props: {
  loading: boolean;
  fullPageLoaderStyle?: ViewStyle;
}) {
  const { loading, fullPageLoaderStyle } = props;
  return loading ? (
    <View style={[styles.fullPageLoader, fullPageLoaderStyle]}>
      <Image
        source={theme.images.loader}
        resizeMode="contain"
        style={styles.loaderImage}
      />
    </View>
  ) : null;
}
const styles = StyleSheet.create({
  fullPageLoader: {
    height: 32,
    width: 32,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.ALT_BLACK,
  },
  loaderImage: {
    width: 100,
    height: 100,
  },
});
