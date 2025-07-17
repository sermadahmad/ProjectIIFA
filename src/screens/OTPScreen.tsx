import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '../constants/icons'
import MyButton from '../components/MyButton';

const { width, height } = Dimensions.get('window');

const OTPScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <ICONS.Logo height={height * 0.09} />
                </View>
                <View>
                    <ICONS.OTPImage height={height * 0.17} />
                </View>
                <View style={styles.smsTextContainer}>
                    <Text style={styles.smsText}>WHAT’S THE CODE IN SMS?</Text>
                </View>
                <View style={styles.codeTextContainer}>
                    <Text style={styles.codeText}>Enter the 4-digit code in SMS or </Text>
                    <TouchableOpacity><Text style={[styles.codeText, { color: 'rgba(255, 127, 39, 1)' }]}>Change number </Text></TouchableOpacity>
                </View>
                <View style={styles.codeContainer}>
                    <View style={styles.codeBoxContainer}>
                        <Text style={styles.codeDigitText}>2</Text>
                    </View>
                    <View style={styles.codeBoxContainer}>
                        <Text style={styles.codeDigitText}>-</Text>
                    </View>
                    <View style={styles.codeBoxContainer}>
                        <Text style={styles.codeDigitText}>-</Text>
                    </View>
                    <View style={styles.codeBoxContainer}>
                        <Text style={styles.codeDigitText}>-</Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <MyButton
                        text='NEXT'
                        onPress={() => console.log("NEXT")}
                        color='rgba(255, 255, 255, 1)'
                        backgroundColor=' rgba(255, 127, 39, 1)'
                    />
                </View>
                <View style={styles.resentTextContainer}>
                    <Text style={styles.resentText}>Code not received? Resent again 59 seconds</Text>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default OTPScreen;

const styles = StyleSheet.create({
    btnContainer: {
        width: '90%',
        marginTop: height * 0.08
    },

    codeContainer: {
        flexDirection: 'row',
        marginTop: height * 0.03,
        // gap: 5,
        // alignItems: 'center',
        // backgroundColor: '#481616ff'
    },
    codeBoxContainer: {
        width: 52,
        height: 52,
        borderColor: 'rgba(218, 218, 218, 1)',
        backgroundColor: 'rgba(243, 243, 243, 1)',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderStyle: 'dashed',
        borderWidth: 0.6,

        // backgroundColor: '#481616ff'
    },
    mainContainer: {
        alignItems: 'center',
        // backgroundColor: '#481616ff'
    },
    logoContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        // backgroundColor: '#d69999ff'

    },
    resentTextContainer: {
        // flexDirection: 'row',
        marginTop: height * 0.01,
        // width: width * 0.8,
    },
    resentText: {
        // fontFamily: 'roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 13,
        // lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(130, 130, 130, 1)',
    },
    codeTextContainer: {
        flexDirection: 'row',
        marginTop: height * 0.01,
        // width: width * 0.8,
    },
    codeText: {
        // fontFamily: 'roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 13,
        // lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(154, 157, 164, 1)',
    },
    codeDigitText: {
        // fontFamily: 'roboto',
        fontWeight: 100,
        fontStyle: 'normal',
        fontSize: 30,
        // lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(47, 47, 47, 1)',
    },
    smsTextContainer: {
        marginTop: height * 0.04,
        // width: width * 0.8,
    },
    smsText: {
        // fontFamily: 'roboto',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 1)',
    },
});