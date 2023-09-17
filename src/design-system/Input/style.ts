import { StyleSheet } from 'react-native';
import theme from 'theme';
import { hp } from 'utils';

const styles = StyleSheet.create({
  baseContainer: {
    height: hp(50),
    backgroundColor: theme.colors.BLACK,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  textInput: {
    fontFamily: theme.font.ShigaSansMedium,
    fontSize: hp(20),
    height: hp(40),
    width: 300,
    borderWidth: 1,
    padding: 0,
    color: theme.colors.WHITE,
  },
});

export default styles;
