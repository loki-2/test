import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { typography } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof typography;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'bodyRegular16',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        typography[type],
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  // Keeping the existing styles for backward compatibility
  default: typography.bodyRegular16,
  defaultSemiBold: typography.headingSemiBold16,
  title: typography.headingExtraBold22,
  subtitle: typography.headingBold20,
  link: {
    ...typography.bodyRegular16,
    color: '#0a7ea4',
  },
  customSerif: {
    ...typography.serifHeadingBold18,
    fontFamily: 'serif',
  },
  customMono: {
    ...typography.bodyRegular16,
    fontFamily: 'monospace',
  },
});