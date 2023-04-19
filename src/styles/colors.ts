export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
  background: string;
  cardColor: string;
};

const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const Colors: ColorPalettes = {
  dark: {
    primary: '#3F51B5',
    secondary: '#161629',
    textPrimary: sharedColors.white,
    textSecondary: '#67686E',
    background: '#1f1f1f',
    cardColor: '#37474F',
    ...sharedColors,
  },
  light: {
    primary: '#3F51B5',
    secondary: '#E4E4E4',
    textPrimary: '#161629',
    textSecondary: '#9D5DB0',
    background: '#f2f2f2',
    cardColor: '#FFFFFF',
    ...sharedColors,
  },
};

export default Colors;
