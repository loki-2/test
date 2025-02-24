import { colors } from './theme';

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = colors.moreColors.poliPurple[500];
const tintColorDark = colors.baseColors.popWhite[500];

export const Colors = {
  light: {
    text: colors.baseColors.popBlack[500],
    background: colors.baseColors.popWhite[500],
    tint: tintColorLight,
    icon: colors.baseColors.popBlack[100],
    tabIconDefault: colors.baseColors.popBlack[100],
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colors.baseColors.popWhite[400],
    background: colors.baseColors.popBlack[500],
    tint: tintColorDark,
    icon: colors.baseColors.popWhite[200],
    tabIconDefault: colors.baseColors.popWhite[200],
    tabIconSelected: tintColorDark,
  },
};