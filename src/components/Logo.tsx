import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={styles.image}
      />
    </View>

  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: 97,
    height: 73,
  },
});