import { StyleSheet } from 'react-native';
import theme from 'theme';
import { hp } from 'utils';

const styles = StyleSheet.create({
  baseContainer: {
    height: hp(46),
    backgroundColor: theme.colors.BLACK,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  textInput: {
    fontFamily: theme.font.SFProRoundedMedium,
    fontSize: 20,
    flex: 1,
    paddingLeft: 10,
    color: theme.colors.WHITE,
  },
});

export default styles;
