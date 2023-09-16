import { hp } from 'utils';
import { font } from './font';

export const typography = {
  tiny: {
    fontFamily: font.MulishRegular,
    fontSize: hp(10),
  },
  tinyMedium: {
    fontFamily: font.DarkerGrotesqueSemiBold,
    fontSize: hp(10),
  },
  tinyBold: {
    fontFamily: font.MulishBold,
    fontSize: hp(10),
  },
  bodySmall: {
    fontFamily: font.MulishRegular,
    fontSize: hp(12),
  },
  small: {
    fontFamily: font.MulishRegular,
    fontSize: hp(10),
  },
  smallBold: {
    fontFamily: font.MulishBold,
    fontSize: hp(12),
  },
  body: {
    fontFamily: font.MulishRegular,
    fontSize: hp(14),
  },
  bodyMedium: {
    fontFamily: font.MulishMedium,
    fontSize: hp(14),
  },
  bodyBold: {
    fontFamily: font.MulishBold,
    fontSize: hp(14),
  },
  headerBold: {
    fontFamily: font.DarkerGrotesqueBold,
    fontSize: hp(16),
  },
  header: {
    fontFamily: font.DarkerGrotesqueRegular,
    fontSize: hp(16),
  },
  headerMedium: {
    fontFamily: font.DarkerGrotesqueMedium,
    fontSize: hp(16),
  },
  headerBig: {
    fontFamily: font.DarkerGrotesqueSemiBold,
    fontSize: hp(18),
  },
  heading: {
    fontFamily: font.DarkerGrotesqueBold,
    fontSize: hp(20),
  },
  h1: {
    fontFamily: font.DarkerGrotesqueExtraBold,
    fontSize: hp(32),
  },
  h2: {
    fontFamily: font.DarkerGrotesqueSemiBold,
    fontSize: hp(28),
  },
  h3: {
    fontFamily: font.DarkerGrotesqueSemiBold,
    fontSize: hp(22),
  },
  h4: {
    fontFamily: font.DarkerGrotesqueSemiBold,
    fontSize: hp(17),
  },
  bottomTabRegular: {
    fontFamily: font.ManropeRegular,
    fontSize: hp(11),
  },
  bottomTabMedium: {
    fontFamily: font.ManropeSemiBold,
    fontSize: hp(11),
  },
  h4UpperCase: {
    fontFamily: font.MulishMedium,
    fontSize: hp(17),
    textTransform: 'uppercase',
  },
};
