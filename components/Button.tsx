import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { colors, typography } from '@/constants/theme';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <ThemedText type="headingBold13" style={styles.buttonText}>
        {title}
      </ThemedText>
      <IconSymbol
        name="chevron.right"
        size={16}
        color={colors.baseColors.popBlack[500]}
        style={styles.buttonArrow}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,1.000000)',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  buttonText: {
    backgroundColor: 'rgba(13,13,13,1.000000)',
    width: '37.500003%',
    height: '33.333333%',
    fontSize: 13,
    fontFamily: 'Gilroy-Bold',
   rerun  fontWeight: '700',
    letterSpacing: 0.2,
    lineHeight: 16,
    position: 'absolute',
    left: '17.857144%',
    top: '33.333333%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.baseColors.popWhite[500],
  },
  buttonArrow: {
    width: '17.857139%',
    height: '16.666664%',
    position: 'absolute',
    left: '64.285719%',
    top: '41.666667%',
  },
});