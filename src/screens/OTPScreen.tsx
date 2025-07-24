import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '../constants/icons'
import MyButton from '../components/MyButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationParamList } from '../navigation/types';

const { width, height } = Dimensions.get('window');

type OTPScreenProps = NativeStackScreenProps<StackNavigationParamList, 'OTPScreen'>;

const OTPScreen: React.FC<OTPScreenProps> = ({ navigation }) => {
// const OTPScreen = () => {
    const [otp, setOtp] = useState<[string, string, string, string]>(['', '', '', '']);
    const inputsRef = useRef<Array<TextInput | null>>([]);
    const handleTextChange = (text: string, index: number) => {
        // Allow only a single digit (0-9)
        if (text === '' || /^\d$/.test(text)) {
            const newOtp = [...otp] as [string, string, string, string];
            newOtp[index] = text;
            setOtp(newOtp);
            if (text && index < otp.length - 1) {
                inputsRef.current[index + 1]?.focus();
            } else if (text && index === otp.length - 1) {
                Keyboard.dismiss();
            }
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <ScrollView showsVerticalScrollIndicator={false}>
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
                        {otp.map((value, index) => (
                            <View key={index} style={styles.codeBoxContainer}>
                                <TextInput
                                    ref={(ref) => { inputsRef.current[index] = ref }}
                                    style={styles.codeDigitText}
                                    placeholder='-'
                                    keyboardType='numeric'
                                    maxLength={1}
                                    value={value}
                                    onChangeText={(text) => handleTextChange(text, index)}
                                    returnKeyType='next'
                                    onKeyPress={({ nativeEvent }) => {
                                        if (nativeEvent.key === 'Backspace') {
                                            const newOtp = [...otp] as [string, string, string, string];
                                            if (!otp[index] && index > 0) {
                                                newOtp[index - 1] = '';
                                                setOtp(newOtp);
                                                inputsRef.current[index - 1]?.focus();
                                            } else {
                                                newOtp[index] = '';
                                                setOtp(newOtp);
                                            }
                                        }
                                    }}

                                />
                            </View>
                        ))}
                    </View>
                    <View style={styles.btnContainer}>
                        <MyButton
                            text='NEXT'
                            onPress={() => {
                                navigation.navigate('HomeScreen');
                            }}
                            color='rgba(255, 255, 255, 1)'
                            backgroundColor=' rgba(255, 127, 39, 1)'
                        />
                    </View>
                    <View style={styles.resentTextContainer}>
                        <Text style={styles.resentText}>Code not received? Resent again 59 seconds</Text>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: 'rgba(249, 249, 249, 1)',
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
        // backgroundColor: '#481616ff',
        // backgroundColor: 'white',

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
        fontWeight: '400',
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
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13,
        // lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(154, 157, 164, 1)',
    },
    codeDigitText: {
        // fontFamily: 'roboto',
        fontWeight: '100',
        fontStyle: 'normal',
        fontSize: 30,
        // lineHeight: 13,
        letterSpacing: 0,
        color: 'rgba(47, 47, 47, 1)',
        // paddingTop: 10,
        // backgroundColor: '#e4d8d8ff',
        // justifyContent: 'center',
    },
    smsTextContainer: {
        marginTop: height * 0.04,
        // width: width * 0.8,
    },
    smsText: {
        // fontFamily: 'roboto',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 1)',
    },
});