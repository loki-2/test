import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { typography, colors } from '@/constants/theme';

export default function InitialScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/membership-application');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ThemedView style={styles.content}>
        <Image
          source={require('@/assets/images/welcome-illustration.png')}
          style={styles.illustration}
        />
        <ThemedText type="headingExtraBold44" style={styles.title}>
          WELCOME TO THE CLUB
        </ThemedText>
        <ThemedText type="headingBold20" style={styles.subtitle}>
          make payments.
        </ThemedText>
        <ThemedText type="headingBold20" style={styles.subtitle}>
          earn rewards.
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.baseColors.popBlack[500],
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    ...typography.headingExtraBold44,
    color: colors.baseColors.popWhite[500],
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.headingBold20,
    color: colors.baseColors.popWhite[500],
    marginBottom: 10,
    textAlign: 'center',
  },
});