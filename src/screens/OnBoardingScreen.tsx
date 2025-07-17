import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { ICONS } from '../constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyButton from '../components/MyButton';

const { width, height } = Dimensions.get('window');

const OnBoardingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ICONS.OBSBackground style={styles.backgroundImage} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ICONS.OBSLogo height={height * 0.14} />
        </View>
        <View>
          <ICONS.OBSImage height={height * 0.25} />
        </View>
        <View style={styles.debtTextContainer}>
          <Text style={styles.debtText}>Debt Payment Management</Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>Dues, Levies, Rent, Thrifts, Loans, Savings etc
            within organization, community or business.</Text>
        </View>
        <View style={styles.twoWayTextContainer}>
          <Text style={styles.twoWayText}>TWO WAYS LOGIN   |   ADMIN & MEMBERS</Text>
        </View>
        <View style={styles.btnContainer}>
          <MyButton
            text='GET STARTED'
            onPress={() => console.log("GET STARTED")}
            color='rgba(255, 255, 255, 1)'
            backgroundColor='rgba(255, 127, 39, 1)'
          />
        </View>
        <View style={styles.policyTextContainer}>
          <Text style={styles.policyText}>By using Duesify app, you agree to the
            Terms of Service and Privacy Policies</Text>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  logo: {
    // height: height * 0.1,
    // backgroundColor: '#d6b2b2ff'
  },
  btnContainer: {
    width: '90%',
    marginTop: height * 0.07
  },
  debtTextContainer: {
    marginTop: height * 0.035,
  },
  subTextContainer: {
    marginTop: height * 0.01,
    width: width * 0.8,
  },
  debtText: {
    fontFamily: 'roboto',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    color: 'rgba(51, 61, 65, 1)',
  },
  policyTextContainer: {
    marginTop: height * 0.07,
    width: width * 0.70,
  },
  policyText: {
    fontFamily: 'roboto',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0,
    color: 'rgba(217, 217, 217, 1)',
    textAlign: 'center',
  },
  twoWayTextContainer: {
    marginTop: height * 0.01,
  },
  twoWayText: {
    fontFamily: 'roboto',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'roboto',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0,
    color: 'rgba(51, 61, 65, 0.72)',
    textAlign: 'center',
    padding: 1,
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    // backgroundColor: '#dcc1c1ff',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: height * 0.06,
  },
});