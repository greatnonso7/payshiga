import { hp } from 'utils';
import { font } from './font';

export const typography = {
  tiny: {
    fontFamily: font.ShigaSansRegular,
    fontSize: hp(10),
  },
  tinyMedium: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(10),
  },
  tinyBold: {
    fontFamily: font.ShigaSansBold,
    fontSize: hp(10),
  },
  bodySmall: {
    fontFamily: font.ShigaSansRegular,
    fontSize: hp(12),
  },
  small: {
    fontFamily: font.ShigaSansRegular,
    fontSize: hp(10),
  },
  smallBold: {
    fontFamily: font.ShigaSansBold,
    fontSize: hp(12),
  },
  body: {
    fontFamily: font.ShigaSansRegular,
    fontSize: hp(14),
  },
  bodyMedium: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(14),
  },
  bodyBold: {
    fontFamily: font.ShigaSansBold,
    fontSize: hp(14),
  },
  headerBold: {
    fontFamily: font.ShigaSansBold,
    fontSize: hp(16),
  },
  header: {
    fontFamily: font.ShigaSansRegular,
    fontSize: hp(16),
  },
  headerMedium: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(16),
  },
  headerBig: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(18),
  },
  heading: {
    fontFamily: font.ShigaSansBold,
    fontSize: hp(20),
  },
  h1: {
    fontFamily: font.ShigaSansBold,
    fontSize: hp(32),
  },
  h2: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(28),
  },
  h3: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(22),
  },
  h4: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(17),
  },
  bottomTabRegular: {
    fontFamily: font.ShigaSansRegular,
    fontSize: hp(11),
  },
  bottomTabMedium: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(11),
  },
  h4UpperCase: {
    fontFamily: font.ShigaSansMedium,
    fontSize: hp(17),
    textTransform: 'uppercase',
  },
};
