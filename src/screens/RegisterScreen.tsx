import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICONS } from '../constants/icons'
import MyButton from '../components/MyButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationParamList } from '../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

const { width, height } = Dimensions.get('window');

type RegisterScreenProps = NativeStackScreenProps<StackNavigationParamList, 'RegisterScreen'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
    // const RegisterScreen = () => {
    const [isSecure, setIsSecure] = useState(true);
    const [showPicker, setShowPicker] = useState(false);
    const [countryCode, setCountryCode] = useState<CountryCode>("GB");
    const [callingCode, setCallingCode] = useState("44");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSelect = (country: Country) => {
        // console.log(country);
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
        setShowPicker(false);
    };


    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.mainContainer}>
                    <View style={styles.logoContainer}>
                        <ICONS.Logo height={height * 0.09} />
                    </View>
                    <View style={styles.setupTextContainer}>
                        <Text style={styles.setupText}>SETUP YOUR ORGANIZATION</Text>
                    </View>
                    <View style={styles.noteTextContainer}>
                        <Text style={styles.noteText}>PLEASE NOTE: {'\n'}
                            MEMBERS ARE NOT REQUIRED TO REGISTER.
                            CONTACT YOUR ORGANIZATION ADMIN
                            TO GET YOUR MEMBERSHIP LOGIN DETAILS.</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.phoneText}>
                            PHONE NUMBER
                        </Text>
                        <View style={styles.phoneTextInput}>
                            <View style={styles.flagDropdown}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                    onPress={() => setShowPicker(true)}
                                >
                                    <CountryPicker
                                        withAlphaFilter
                                        withCallingCode
                                        withCloseButton
                                        withFilter
                                        withFlag
                                        visible={showPicker}
                                        countryCode={countryCode}
                                        onSelect={onSelect}
                                        onClose={() => setShowPicker(false)}
                                    />
                                    <Text style={styles.countryCodeText}>+{callingCode}</Text>
                                    <ICONS.DropDown />
                                </TouchableOpacity>
                                <View style={styles.divider} ></View>
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    placeholder='Enter phone number'
                                    style={styles.textInput}
                                    placeholderTextColor={'rgba(196, 196, 196, 1)'}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <Text style={styles.phoneText}>create your password</Text>
                        <View style={styles.phoneTextInput}>
                            <View style={styles.passwordContainer}>
                                {/* <Text style={styles.password}>*********</Text> */}
                                <TextInput
                                    placeholder='********'
                                    style={styles.textInput}
                                    placeholderTextColor={'rgba(196, 196, 196, 1)'}
                                    secureTextEntry={isSecure}

                                />
                                <TouchableOpacity onPress={() => {
                                    setIsSecure(!isSecure);
                                }}>
                                    <Icon name={isSecure ? 'eye-off' : 'eye'} size={25} color={'rgba(0, 0, 0, 0.35)'} />
                                </TouchableOpacity>
                                {/* <Icon name='eye-off' size={25} color={'rgba(0, 0, 0, 0.35)'}/> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <MyButton
                            text='NEXT'
                            color='rgba(255, 255, 255, 1)'
                            backgroundColor='rgba(255, 127, 39, 1)'
                            onPress={() => {
                                navigation.navigate('OTPScreen')
                            }}
                        />
                    </View>
                    <View style={styles.alreadyTextContainer}>
                        <Text style={styles.alreadyText}>Already have an account?</Text>
                    </View>
                    <View style={styles.loginTextContainer}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('LoginScreen')
                        }}><Text style={styles.loginText}>Admin Login</Text></TouchableOpacity>
                        <Text style={styles.orText}>  or  </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('LoginScreen')
                        }}><Text style={styles.loginText}>Member Login</Text></TouchableOpacity>
                    </View>
                    <View style={styles.nextTextContainer}>
                        <Text style={styles.alreadyText}>By clicking NEXT, you agree to the</Text>
                    </View>
                    <View style={styles.loginTextContainer}>
                        <TouchableOpacity><Text style={styles.loginText}>Terms of Service</Text></TouchableOpacity>
                        <Text style={styles.andText}> and </Text>
                        <TouchableOpacity><Text style={styles.loginText}>Privacy Policies</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    loginTextContainer: {
        flexDirection: 'row'
        // width: '90%',
        // marginTop: height * 0.04 
        // padding: 2
    },
    loginText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(255, 127, 39, 1)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    orText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(38, 50, 56, 1)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    andText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 0.47)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    alreadyTextContainer: {
        // width: '90%',
        marginTop: height * 0.04
    },
    nextTextContainer: {
        // width: '90%',
        marginTop: height * 0.13
    },
    alreadyText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 0.47)',
        // textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
        // marginTop: 5,

    },
    btnContainer: {
        width: '90%',
        marginTop: height * 0.01
    },
    accountTypeText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: '#FF7F27',
        textTransform: 'uppercase',
        marginTop: 5,

    },


    setupTextContainer: {
        marginTop: height * 0.001,
    },
    setupText: {
        // fontFamily: 'roboto',
        fontWeight: '600',
        // fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        color: 'rgba(29, 40, 58, 1)',
        textAlign: 'center'
    },
    noteTextContainer: {
        marginTop: height * 0.01,
        width: width * 0.7,
    },
    noteText: {
        // fontFamily: 'roboto',
        fontWeight: '400',
        // fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0,
        color: 'rgba(128, 128, 128, 1)',
        textAlign: 'center'
    },

    mainContainer: {
        alignItems: 'center',
        // backgroundColor: '#d69999ff'
        // backgroundColor: 'white',

    },
    logoContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        // backgroundColor: '#d69999ff'

    },
    password: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: '#C4C4C4',

    },


    inputsContainer: {
        width: '100%',
        marginTop: 70,
    },
    phoneText: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        // leading-trim: NONE;
        lineHeight: 12,
        letterSpacing: 0,
        textTransform: 'uppercase',
        color: '#FF7F27',

    },
    phoneTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDCDC',
        // width: '100%',
        height: 47,
        // backgroundColor: '#bbaaaaff',
        alignItems: 'center',
        paddingHorizontal: 10,
        // paddingVertical: 4,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,

    },
    flagDropdown: {
        flexDirection: 'row',
        // backgroundColor: '#7a6d6dff',
        alignItems: 'center',
        gap: 10,
        height: '100%',

    },
    countryCodeText: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: '#263238',
        marginRight: 10,

    },
    divider: {
        width: 2,
        height: '80%',
        backgroundColor: '#DDDCDC',
        // padding: 2,
    },
    textInputContainer: {
        // backgroundColor: '#ab8f8fff',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        // width: '100%',
        // backgroundColor: '#7a6d6dff',

    },
    textInput: {
        // fontFamily: 'roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 15,
        letterSpacing: 0,
        color: 'rgba(196, 196, 196, 1)',
        // backgroundColor: '#a17c7cff',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',
        height: '100%',
        // backgroundColor: '#7a6d6dff',
        // width: '100%',

    },
});