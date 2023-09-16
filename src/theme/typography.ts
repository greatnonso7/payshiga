import { hp } from 'utils';
import { font } from './font';

export const typography = {
  tiny: {
    fontFamily: font.SFProRoundedRegular,
    fontSize: hp(10),
  },
  tinyMedium: {
    fontFamily: font.SFProRoundedSemibold,
    fontSize: hp(10),
  },
  tinyBold: {
    fontFamily: font.SFProRoundedBold,
    fontSize: hp(10),
  },
  bodySmall: {
    fontFamily: font.SFProRoundedRegular,
    fontSize: hp(12),
  },
  small: {
    fontFamily: font.SFProRoundedRegular,
    fontSize: hp(10),
  },
  smallBold: {
    fontFamily: font.SFProRoundedBold,
    fontSize: hp(12),
  },
  body: {
    fontFamily: font.SFProRoundedRegular,
    fontSize: hp(14),
  },
  bodyMedium: {
    fontFamily: font.SFProRoundedMedium,
    fontSize: hp(14),
  },
  bodyBold: {
    fontFamily: font.SFProRoundedBold,
    fontSize: hp(14),
  },
  headerBold: {
    fontFamily: font.SFProRoundedBold,
    fontSize: hp(16),
  },
  header: {
    fontFamily: font.SFProRoundedRegular,
    fontSize: hp(16),
  },
  headerMedium: {
    fontFamily: font.SFProRoundedMedium,
    fontSize: hp(16),
  },
  headerBig: {
    fontFamily: font.SFProRoundedSemibold,
    fontSize: hp(18),
  },
  heading: {
    fontFamily: font.SFProRoundedBold,
    fontSize: hp(20),
  },
  h1: {
    fontFamily: font.SFProRoundedBold,
    fontSize: hp(32),
  },
  h2: {
    fontFamily: font.SFProRoundedSemibold,
    fontSize: hp(28),
  },
  h3: {
    fontFamily: font.SFProRoundedSemibold,
    fontSize: hp(22),
  },
  h4: {
    fontFamily: font.SFProRoundedSemibold,
    fontSize: hp(17),
  },
  bottomTabRegular: {
    fontFamily: font.SFProRoundedRegular,
    fontSize: hp(11),
  },
  bottomTabMedium: {
    fontFamily: font.SFProRoundedSemibold,
    fontSize: hp(11),
  },
  h4UpperCase: {
    fontFamily: font.SFProRoundedMedium,
    fontSize: hp(17),
    textTransform: 'uppercase',
  },
};
