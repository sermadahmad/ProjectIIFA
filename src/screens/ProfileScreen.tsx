import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MySolidButton from '../components/MySolidButton';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile Screen</Text>
    <MySolidButton
      text={"Reset Onboarding"}
      handlePress={async () => {
        await AsyncStorage.setItem('hasSeenOnboarding', 'false');
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
