import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { typography, colors } from '@/constants/theme';

const { width, height } = Dimensions.get('window');
const scaleFactor = Math.min(width / 320, height / 540);

export default function MembershipApplication() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleProceed = () => {
    // Handle proceed action
    console.log('Proceed with mobile number:', mobileNumber);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <ThemedText type="capsSemiBold12" style={styles.header}>
            MEMBERSHIP APPLICATION
          </ThemedText>
          <View style={styles.titleContainer}>
            <ThemedText type="headingExtraBold44" style={styles.title}>
              tell us your
            </ThemedText>
            <ThemedText type="headingExtraBold44" style={styles.title}>
              mobile number
            </ThemedText>
          </View>
          <TextInput
            style={styles.input}
            placeholder="MOBILE NUMBER"
            placeholderTextColor={colors.baseColors.popWhite[300]}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setIsChecked(!isChecked)}
          >
            <View style={[styles.checkboxBox, isChecked && styles.checkboxChecked]} />
            <ThemedText type="bodyRegular14" style={styles.checkboxText}>
              allow CRED to access your credit information from{' '}
              <ThemedText type="bodyBold14">RBI approved bureaus.</ThemedText> this does not
              impact your credit score.
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button
        title="Proceed"
        onPress={handleProceed}
        style={styles.proceedButton}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.baseColors.popBlack[500],
  },
  scrollContent: {
    flexGrow: 1,
    padding: `${5.9 * scaleFactor}%`, // 20px / 340px
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    ...typography.capsSemiBold12,
    color: colors.baseColors.popWhite[300],
    marginBottom: `${8.8 * scaleFactor}%`, // 30px / 340px
  },
  titleContainer: {
    marginBottom: `${11.8 * scaleFactor}%`, // 40px / 340px
  },
  title: {
    ...typography.headingExtraBold44,
    color: colors.baseColors.popWhite[500],
    fontSize: 44 * scaleFactor,
    lineHeight: 48 * scaleFactor,
  },
  input: {
    ...typography.bodyRegular16,
    borderBottomWidth: 1,
    borderBottomColor: colors.baseColors.popWhite[300],
    color: colors.baseColors.popWhite[500],
    paddingVertical: `${2.9 * scaleFactor}%`, // 10px / 340px
    marginBottom: `${8.8 * scaleFactor}%`, // 30px / 340px
    fontSize: 16 * scaleFactor,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: `${5.9 * scaleFactor}%`, // 20px / 340px
  },
  checkboxBox: {
    width: `${5.9 * scaleFactor}%`, // 20px / 340px
    height: `${5.9 * scaleFactor}%`, // 20px / 340px
    borderWidth: 1,
    borderColor: colors.baseColors.popWhite[300],
    marginRight: `${2.9 * scaleFactor}%`, // 10px / 340px
    marginTop: `${0.6 * scaleFactor}%`, // 2px / 340px
  },
  checkboxChecked: {
    backgroundColor: colors.baseColors.popWhite[500],
  },
  checkboxText: {
    flex: 1,
    ...typography.bodyRegular14,
    color: colors.baseColors.popWhite[300],
    fontSize: 14 * scaleFactor,
  },
  proceedButton: {
    alignSelf: 'center',
    width: '100%',
    marginBottom: `${5.9 * scaleFactor}%`, // 20px / 340px
  },
});